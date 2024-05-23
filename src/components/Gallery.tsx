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

async function Gallery() {
  const { resources } = await cloudinary.search
    .expression("tags=person")
    .execute();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2  ">
      {resources.map((product: CloudinaryResource) => {
        return (
          <a href="" key={product.public_id}>
            <img
              className="hover:opacity-60 h-auto max-w-full gap-1 rounded-md"
              alt=""
              src={product.secure_url}
            />
          </a>
        );
      })}
    </div>
  );
}

export default Gallery;
