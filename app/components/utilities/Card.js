import Image from "next/image";
import Link from "next/link";

export default function Card({ api, title }) {
    return (
        <div className="lg:max-w-6xl md:w-auto md:max-w-3xl w-[300px] mt-28 -mb-28 md:-mb-8">
            <h1 className="md:text-4xl md:pl-10 lg:pl-6 mb-4 md:mb-8 font-bold underline text-gray-700">{title}</h1>
            <div className="w-full z-20 flex flex-wrap gap-8 justify-center">
                {api.map((data) => {
                    return (
                        <div key={`${data.mal_id}/${title}`} className="h-48 w-[74px] md:h-96 md:w-52 lg:w-64 pb-16 hover:scale-[102%]">
                            <Link href={`/anime/${data.mal_id}`}>
                                <Image className="h-full w-auto object-cover rounded-xl hover:shadow-inner" src={data.images.webp.image_url} alt="" width={600} height={800} />
                                <p className="text-xs md:text-md lg:text-xl text-gray-700 hover:underline text-center">{data.title}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
