import { v2 as cloudinary } from "cloudinary";
import Image from "next/image";

cloudinary.config({
  cloud_name: process.env.API_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

async function GraphicsGallery() {
  const { resources } = await cloudinary.search
    .expression("tags=graphics")
    .execute();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-1 ">
      {resources.map((product: CloudinaryResource) => {
        return (
          <a href="" key={product.public_id}>
            <Image
              className="hover:opacity-60 h-full max-w-full gap-1 rounded-md"
              alt=""
              src={product.secure_url}
              width={500}
              height={500}
            />
          </a>
        );
      })}
    </div>
  );
}

export default GraphicsGallery;
