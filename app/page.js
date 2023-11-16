import Card from "./components/utilities/Card";
import Navbar from "./components/utilities/Navbar";
import Hero from "./components/utilities/Hero";
export default async function Home() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?limit=8`);
  const TopAnime = await result.json()

  return (
      <main className="flex flex-col justify-center items-center">
          <Navbar/>
          <Hero/>
          <Card api={TopAnime.data}/>
      </main>
  );
}