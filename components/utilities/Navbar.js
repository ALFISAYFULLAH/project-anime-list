import Link from "next/link";
import Input from "./Input";
import Signin from "../Signin";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center bg-red-500 pb-2">
            <div className="mx-4 w-full relative md:max-w-3xl lg:max-w-6xl">
                <div className="mt-3 mb-12 text-xl md:text-3xl"><Link href="/">Anime Web</Link></div>
                <Input />
                <Signin />
            </div>
        </nav>
    );
}
