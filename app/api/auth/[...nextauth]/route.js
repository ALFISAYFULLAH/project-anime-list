import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"

export const authOption = {
    providers: [
        githubAuth({
            clientId: "4ee8b3f60c2e44e35c9f",
            clientSecret: "44bb99a7a7f1eecab74421b11792bd2b5fafccd9",
        })
    ],
    secret: "secret",
}

const handler = NextAuth(authOption)
export {handler as GET, handler as POST}