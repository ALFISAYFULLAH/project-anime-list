import Navbar from "@/components/utilities/Navbar";
import { getAnimeResponse } from "@/libs/api";
import Image from "next/image";
import YouTube from "react-youtube";
import YoutubeAnime from "./YoutubeAnime";
import { TreeStructure } from "@phosphor-icons/react/dist/ssr";

export default async function Home({params : { id }}) {
    try {
      const Anime = await getAnimeResponse(`anime/${id}`);

        return (
            <main className="w-full flex flex-col items-center relative">
                <div className="w-full h-52 md:h-96 lg"><Image priority={true} className="w-full h-full object-cover" src={process.env.NEXT_PUBLIC_IMAGE_ID_ANIME} width={300} height={300} alt=""/></div>
                <div className="w-full flex flex-wrap items-end">
                    <div className="w-4/12 h-32 md:h-64 md:-mt-32 lg:h-80 lg:-mt-40 self-start -mt-16">
                      <Image priority={true} className="w-full h-full object-cover" src={Anime.trailer.images.maximum_image_url || process.env.NEXT_PUBLIC_IMAGE_ID_ANIME} alt="" width={300} height={300}/>
                    </div>
                    <div className="w-8/12 h-16 text-2xl md:text-4xl lg:text-5xl md:h-32 lg:h-40">{ Anime.title}</div>
                </div>
                <div className="w-full px-8 lg:px-16 pb-8 flex flex-col md:flex-row md:justify-between">
                  <div className="md:w-[60%]">
                    <h1 className="mt-4 mb-2 text-2xl md:text-4xl lg:text-5xl">Synopsis</h1>
                    <p className="text-xs font-mono md:text-lg lg:text-xl">{Anime.synopsis}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4 md:w-[20%] md:grid-cols-1 md:mt-14">
                    <div className="h-20 bg-red-500"></div>
                    <div className="h-20 bg-red-500"></div>
                    <div className="h-20 bg-red-500"></div>
                    <div className="h-20 bg-red-500"></div>
                    <div className="h-20 bg-red-500"></div>
                  </div>
                </div>
                <YoutubeAnime video_id={Anime?.trailer?.youtube_id}/>
            </main>
        );
    } catch (error) {
        return (
            <main className="flex flex-col justify-center">
                <Navbar />
                <h1 className="text-2xl ">server lagi error nih sabar ya😥</h1>
            </main>
        );
    }
}
