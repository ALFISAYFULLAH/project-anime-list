import Card from "./components/utilities/Card";
export default async function Home() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/top/anime`);
  const anime = await result.json()

  return (
      <main className="flex flex-col justify-center items-center">
          <div className="w-full p-4 md:p-8 lg:p-16 flex flex-wrap gap-8 justify-center">
              {anime.data.map((data) => {
                return (
                    <div key={data.mal_id} className="w-[130px] md:w-52 lg:w-64 pb-16 hover:scale-[102%]">
                        <Card images={data.images.jpg.image_url} title={data.title} id={data.mal_id} />
                    </div>
                );
              })}
          </div>
      </main>
  );
}