import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (credentials.username === "admin" && credentials.password === "admin") {
          return { id: "1", name: "admin" };
        }
        return null;
      },
    }),
  ],
});
