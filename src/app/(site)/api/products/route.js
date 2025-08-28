import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";


// GET all products
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("makeupshop"); 
    const products = await db.collection("products").find({}).toArray();
    const topProducts = await db.collection("topProducts").find({}).toArray();
    const featureProducts = await db.collection("featureProducts").find({}).toArray();
    
    return new Response(JSON.stringify({ products, topProducts, featureProducts }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}





export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("makeupshop");

    const product = {
      ...body,
      postedBy: session.user.email,
      createdAt: new Date(),
    };

    const result = await db.collection("products").insertOne(product); //posting new product
    
    return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
