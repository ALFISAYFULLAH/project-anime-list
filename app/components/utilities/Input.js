"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Input() {
    const SearchRef = useRef();
    const router = useRouter()
    
    function handleSearch(e) {
        e.preventDefault();
        if(SearchRef.current.value === '') return;
        router.push(`/search/${SearchRef.current.value}`)
    }

    return (
        <form className="w-2/3 flex justify-center h-12 relative">
            <input ref={SearchRef} className="w-full rounded-full px-8 focus:outline-none text-xl" type="text" placeholder="Search Anime" />
            <button type="submit" onClick={handleSearch} className="absolute right-4 top-2">
                <MagnifyingGlass size={32} />
            </button>
        </form>
    );
}
