import Link from "next/link";
import Input from "./Input";

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
];

export default function Navbar() {
    return (
        <>
            <nav className="w-full absolute top-0 flex flex-col md:flex-row items-center justify-between z-30 bg-transparent h-20 px-4 md:px-28 lg:px-40">
                <div className="text-orange-400 cursor-pointer text-xl font-bold">
                    <Link href={"/"}>Anime WebGen</Link>
                </div>
                <Input />
            </nav>
        </>
    );
}
