import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const logIn = async (credentials) => {
  const client = await clientPromise;
  const db = client.db("makeupshop");
  const users = db.collection("users");

  const user = await users.findOne({ email: credentials.email });
  if (!user) throw new Error("No user found");

  const isValid = await bcrypt.compare(credentials.password, user.password);
  if (!isValid) throw new Error("Invalid password");

  return { id: user._id.toString(), name: user.name, email: user.email };
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        return logIn(credentials);
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);