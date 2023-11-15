import Image from "next/image"
import Link from "next/link"

export default function Card({images, title, id}) {
  return (
    <Link href={`/anime/${id}`}>
      <Image className="h-full w-auto object-cover rounded-xl" src={images} alt="" width={600} height={800} />
      <h1 className="text-sm md:text-md lg:text-xl text-gray-100">{title}</h1>
    </Link>
  )
}