import Image from "next/image"
export default function Hero() {
  return (
      <div className="w-full h-auto flex justify-center z-0 relative">
          <Image
              className="w-full h-auto opacity-90 object-cover"
              src="https://images.unsplash.com/photo-1596547807467-0a24b84a329d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={1280}
              height={600}
          />
          <div className="absolute z-10 w-full flex justify-center h-12 top-1/3">
              <input className="w-6/12 rounded-full px-8 focus:outline-none text-xl" type="text" placeholder="Search Anime"/>
          </div>
      </div>
  );
}
