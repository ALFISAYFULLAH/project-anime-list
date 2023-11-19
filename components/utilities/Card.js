import Image from "next/image";
import Link from "next/link";

export default function Card({ api, NameOfSection }) {
    return (
        <div>
            <h1 className=" mt-12 md:text-2xl lg:text-3xl">{ NameOfSection }</h1>
            <div className="mt-4 w-full gap-2 grid
                            max-w-[350px] grid-cols-3
                            md:max-w-3xl md:gap-8
                            lg:max-w-6xl lg:grid-cols-5">
                {api?.map((Anime, Index) => {
                    return (
                        <CardList
                            key={`${Anime.mal_id}/${NameOfSection}`}
                            id={Anime.mal_id}
                            image_url={Anime.images.webp.image_url}
                            title_anime={Anime.title} />
                    )
                })}
            </div>
        </div>
    );
}

function CardList({ id, image_url, title_anime }) {

    return (
        <Link href={`/anime/${id}`} className="w-full h-44 md:h-80 rounded-xl overflow-hidden relative group">
            <div className="w-full h-full">
                <Image priority={true} className="w-full h-full object-cover" src={image_url} width={300} height={300} alt=""/>
            </div>
            <div className="bg-gradient-to-t from-blue-200 to-blue-500 w-full h-full bottom-[-100%] absolute opacity-0 group-hover:bottom-0 group-hover:opacity-20 transition-all duration-1000"></div>
            <h1 className="w-full absolute bottom-[-100%] text-center transition-all duration-1000 group-hover:bottom-16 text-red-500 lg:text-2xl lg:font-bold  ">{ title_anime } </h1>
        </Link>
    )
}