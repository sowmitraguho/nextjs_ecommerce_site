// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "@/lib/mongodb";
// import bcrypt from "bcryptjs";

// export const authOptions = {
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const client = await clientPromise;
//         const usersCollection = client.db().collection("users");

//         const user = await usersCollection.findOne({ email: credentials.email });
//         if (!user) throw new Error("No user found");

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) throw new Error("Invalid password");

//         return user;
//       },
//     }),
//   ],
//   session: { strategy: "jwt" },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: { signIn: "/auth/signin" },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

