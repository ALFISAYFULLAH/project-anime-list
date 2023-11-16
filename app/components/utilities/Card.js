import Image from "next/image";
import Link from "next/link";

export default function Card({ api }) {
    return (
      <div
        className="w-full p-4 md:p-8 lg:p-16 -mt-[600px] z-20 flex flex-wrap gap-8 justify-center">
            {api.map((data) => {
                return (
                    <div key={data.mal_id} className="w-[130px] md:w-52 lg:w-64 pb-16 hover:scale-[102%]">
                        <Link href={`/anime/${data.mal_id}`}>
                            <Image className="h-full w-auto object-cover rounded-xl hover:shadow-inner" src={data.images.webp.image_url} alt="" width={600} height={800} />
                            <p className="text-sm md:text-md lg:text-xl text-orange-400 text-center">{data.title}</p>
                        </Link>
                    </div>
                );
            })}
      </div>
    );
}
