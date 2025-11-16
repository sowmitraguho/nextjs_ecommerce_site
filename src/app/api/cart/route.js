import { authOptions } from "../auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const client = await clientPromise;
    const db = client.db("usercarts");
    let Cart = db.collection("carts");
    //await dbConnect();
    const { userEmail, productId, name, price, quantity } = await req.json();

    let cart = await Cart.findOne({ userEmail });

    if (!cart) {
        // create new cart
        cart = await Cart.create({
            userEmail,
            items: [{ productId, name, price, quantity }],
        });
    } else {
        // check if product exists
        const itemIndex = cart.items.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (itemIndex > -1) {
            // update quantity
            cart.items[itemIndex].quantity += quantity;
        } else {
            // add new product
            cart.items.push({ productId, name, price, quantity });
        }
        await cart.save();
    }

    return Response.json(cart);
}
export async function GET(req) {
    const client = await clientPromise;
    const db = client.db("usercarts");
    let Cart = db.collection("carts");
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const cart = await Cart.findOne({ userEmail: email });
    return Response.json(cart || { items: [] });
}
export async function PUT(req) {
    const client = await clientPromise;
    const db = client.db("usercarts");
    let Cart = db.collection("carts");
    const { userEmail, productId, quantity } = await req.json();

    const cart = await Cart.findOne({ userEmail });
    if (!cart) return Response.json({ error: "Cart not found" }, { status: 404 });

    const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
        cart.items[itemIndex].quantity = quantity;
        await cart.save();
    }

    return Response.json(cart);
}
