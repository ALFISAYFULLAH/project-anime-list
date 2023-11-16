import Link from "next/link"

const Navbarcontent = [
  {
    name: "Popular",
    link: "",
  },
  {
    name: "Tranding",
    link: "",
  },
  {
    name: "Characters",
    link: "",
  },
  {
    name: "Subscription",
    link: "",
  },
  {
    name: "Price",
    link: "",
  },
]

export default function Navbar() {
  return (
    <nav className='w-full absolute top-0 flex items-center justify-between z-30 bg-transparent h-20 px-20'>
      <div className="text-orange-400 cursor-pointer text-xl font-bold">
        <h1>Anime WebGen</h1>
      </div>
      <div className="flex gap-6">
        {Navbarcontent.map((data) => {
          return <Link className="hover:underline hover:text-orange-400 text-xl transition-all text-gray-100 shadow-2xl" href={data.link}>{data.name}</Link>;
        })}
      </div>
      <div className="flex gap-4">
        <button className="bg-orange-400 rounded-bl-2xl px-5 py-1 hover:underline transition-all">Sign Up</button>
        <button className="bg-orange-400 rounded-bl-2xl px-5 py-1 hover:underline transition-all">Sign In</button>
      </div>
    </nav>
  )
}
