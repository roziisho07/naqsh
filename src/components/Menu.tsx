import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import demoImage from "/public/demoimg.jpg";
import Image from "next/image";
import Gallery from "./Gallery";
import VideoGallery from "./Videos";

async function Menu() {
  return (
    <Tabs
      defaultValue="Images"
      className="w-full flex flex-col items-center justify-center p-6"
    >
      <TabsList className="text-sm">
        <TabsTrigger value="Images">Images</TabsTrigger>
        <TabsTrigger value="Video">Videos</TabsTrigger>
        <TabsTrigger value="Sound">Sound</TabsTrigger>
        <TabsTrigger value="Websites">Websites</TabsTrigger>
      </TabsList>
      <TabsContent value="Images" className="bg-white  h-auto ">
        <div className="">
          <Gallery />
        </div>
      </TabsContent>
      <TabsContent
        value="Video"
        className="w-full bg-white grid grid-flow-row gap-2 pt- "
      >
        <VideoGallery videoId="TfOq7a0a3xU" />
        <VideoGallery videoId="YkhEB52_m3U" />
        <VideoGallery videoId="TIoYXg-YeEs" />
        <VideoGallery videoId="5soozTqlLfE" />
        <VideoGallery videoId="4pKIyq0oLzo" />
        <VideoGallery videoId="6UHKl7A5uKg" />
        <VideoGallery videoId="r4P0Typq_5c" />
        <VideoGallery videoId="7EDlb5QDl1o" />
      </TabsContent>
      <TabsContent value="Sound">Sound</TabsContent>
      <TabsContent value="Websites">Web Dev</TabsContent>
      <TabsContent value="illustrations">illustrationsv</TabsContent>
      <TabsContent value="architecture">Archi</TabsContent>
    </Tabs>
  );
}

export default Menu;
