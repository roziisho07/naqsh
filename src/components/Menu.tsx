import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Gallery from "./Gallery";
import VideoGallery from "./Videos";
import GraphicsGallery from "./GraphicsGallery";

async function Menu() {
  return (
    <Tabs
      defaultValue="Images"
      className="w-full flex flex-col items-center justify-center p-6 "
    >
      <TabsList className="text-sm bg-slate-300 text-blue-800 mb-8">
        <TabsTrigger value="Images">Images</TabsTrigger>
        <TabsTrigger value="Video">Videos</TabsTrigger>
        <TabsTrigger value="Sound">Music</TabsTrigger>
        <TabsTrigger value="illustrations">Graphics</TabsTrigger>
      </TabsList>
      <TabsContent value="Images" className="bg-white  h-auto ">
        <div className="">
          <Gallery />
        </div>
      </TabsContent>
      <TabsContent
        value="Video"
        className="w-full grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-1  "
      >
        <div className="bg-slate-200">
          <VideoGallery videoId="TfOq7a0a3xU" />
        </div>
        <VideoGallery videoId="YkhEB52_m3U" />
        <VideoGallery videoId="TIoYXg-YeEs" />
        <VideoGallery videoId="5soozTqlLfE" />
        <VideoGallery videoId="4pKIyq0oLzo" />
        <VideoGallery videoId="6UHKl7A5uKg" />
        <VideoGallery videoId="r4P0Typq_5c" />
        <VideoGallery videoId="7EDlb5QDl1o" />
      </TabsContent>
      <TabsContent value="Sound">Currently unavailable!</TabsContent>
      <TabsContent value="illustrations">
        <GraphicsGallery />
      </TabsContent>
    </Tabs>
  );
}

export default Menu;
