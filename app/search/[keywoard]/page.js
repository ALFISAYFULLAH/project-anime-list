import Navbar from "@/app/components/utilities/Navbar";
import Card from "@/app/components/utilities/Card";
export default async function Home({params}) {
    try {
        const { keywoard } = params
        const decodeKeywoard = decodeURIComponent(keywoard)
        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/anime?q=${decodeKeywoard}`);
        const Anime = await result.json();
        let keterangan;

        Anime.data.length !== 0 ? keterangan = `Kamu lagi suka ${decodeKeywoard} ya🤩` : keterangan = 'Yah anime nya gak ada😥'

        return (
            <main className="flex flex-col justify-center items-center">
                <Navbar />
                <Card api={Anime.data} title={keterangan} />
            </main>
        );
    } catch (error) {
        return (
            <main className="flex flex-col justify-center items-center">
                <Navbar />
                <h1 className="text-2xl ">server lagi error nih sabar ya😥</h1>
            </main>
        );
    }
}
