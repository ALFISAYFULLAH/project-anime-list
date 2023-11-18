"use client";
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
        <form>
            <input ref={SearchRef} className="w-full rounded-full px-4 py-1 md:py-3 md:text-xl text-gray-800" type="text" placeholder="Search Anime" />
            <button onClick={handleSearch} type="submit" className="hidden"></button>
        </form>
    );
}
