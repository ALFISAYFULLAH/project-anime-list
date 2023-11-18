import Navbar from "@/components/utilities/Navbar";
import Card from "@/components/utilities/Card";
import { getAnimeResponse } from "@/libs/api";
export default async function Home({params}) {
    try {
        const { keywoard } = params
        const decodeKeywoard = decodeURIComponent(keywoard)
        
        const Anime = await getAnimeResponse("anime", `q=${keywoard}`);
        
        let keterangan;
        Anime.length !== 0 ? keterangan = `Kamu lagi suka ${decodeKeywoard} ya🤩` : keterangan = 'Yah anime nya gak ada😥'

        return (
            <main className="flex flex-col justify-center items-center">
                <Navbar />
                <Card api={Anime} NameOfSection={keterangan} />
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
