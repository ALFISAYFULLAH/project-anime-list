import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

export default async function Signin() {
  const user = await authUserSession()

  return (
    <div className="absolute top-3 right-2 flex items-center gap-4">
      <Link href={""} className={!!user ? "" : "hidden"}>
        <div className="w-12 h-12 rounded-full overflow-hidden"><Image className="w-full h-full object-cover" src={user?.image} width={300} height={300}/></div>
      </Link>
      <Link href={!!user ? '/api/auth/signout' : '/api/auth/signin'}>
        <button className="bg-gray-800 px-6 py-1 md:px-12 md:py-2 md:text-xl capitalize rounded-xl disabled:bg-blue-500 disabled:text-gray-800 disabled:font-extrabold">{!!user ? 'Logout' : 'Login'}</button>
      </Link>
    </div>
  )
}