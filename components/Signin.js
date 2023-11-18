import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

export default async function Signin() {
  const user = await authUserSession()

  return (
    <Link href={"/api/auth/signin"} className="absolute top-3 right-2">
      <button disabled={!!user} className="bg-gray-800 px-6 py-1 md:px-12 md:py-2 md:text-xl capitalize rounded-xl disabled:bg-blue-500 disabled:text-gray-800 disabled:font-extrabold">{ !!user ? user.name: 'Login'}</button>
    </Link>
  )
}
