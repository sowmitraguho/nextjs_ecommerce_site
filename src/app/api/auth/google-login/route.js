import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import clientPromise from "@/lib/mongodb";

const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export async function POST(req) {
  try {
    const { credential } = await req.json();

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { email, name, picture } = payload;

    // Save/find user in DB
    const mongo = await clientPromise;
    const db = mongo.db("makeupshop");
    const users = db.collection("users");

    let user = await users.findOne({ email });
    if (!user) {
      const newUser = {
        email,
        name,
        picture,
        createdAt: new Date(),
        provider: "google",
      };
      const result = await users.insertOne(newUser);
      user = { ...newUser, _id: result.insertedId };
    }

    // Create your own JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ message: "Login success", user });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Google login error:", err);
    return NextResponse.json({ error: "Google login failed" }, { status: 500 });
  }
}
