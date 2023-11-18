import { getAnimeResponse } from "@/libs/api";
import Card from "@/components/utilities/Card";
import Navbar from "@/components/utilities/Navbar";
export default async function Home() {
    const TopAnime = await getAnimeResponse("top/anime", "limit=15&filter=bypopularity");

    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <Card api={TopAnime} NameOfSection="Top Anime" />
        </main>
    );
}