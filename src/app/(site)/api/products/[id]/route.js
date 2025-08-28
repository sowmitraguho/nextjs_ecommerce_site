
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


// GET single product
export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("makeupshop"); 
    const { id } = params;
    let query = {};
    if (typeof id === "string") {
      
      query._id = new ObjectId(id);
    } else {
      query._id = id;
    }
    const singleProduct = await db.collection("products").findOne(query);

    return new Response(JSON.stringify({ singleProduct }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}


// UPDATE product
export async function PATCH(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("makeupshop");
    const { id } = params;

    const body = await req.json();

    // Build query
    let query = {};
    if (typeof id === "string") {
      
      query._id = new ObjectId(id);
    } else {
      query._id = id;
    }

    // Update document
    const updated = await db.collection("products").updateOne(query, {
      $set: {
        ...body, // directly spread the payload
        updatedAt: new Date(), // optional: track update time
      },
    });

    if (updated.matchedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Product not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Product updated successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to update product" }),
      { status: 500 }
    );
  }
}
