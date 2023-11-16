import Navbar from "@/app/components/utilities/Navbar";
import Card from "@/app/components/utilities/Card";
export default async function Home({params}) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/anime?q=${params.keywoard}`);
    const Anime = await result.json();

    return (
        <main className="flex flex-col justify-center items-center">
            <Navbar />
            <Card api={Anime.data} title="Top Anime" />
        </main>
    );
}
