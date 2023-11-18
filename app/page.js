import Card from "./components/utilities/Card";
import Navbar from "./components/utilities/Navbar";
export default async function Home() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?limit=9`);
  const TopAnime = await result.json()

  return (
      <main className="flex flex-col justify-center items-center">
          <Navbar/>
          <Card api={TopAnime.data} title="Top Anime"/>
          <Card api={TopAnime.data} title="Recomendation"/>
          <Card api={TopAnime.data} title="List Anime"/>
      </main>
  );
}