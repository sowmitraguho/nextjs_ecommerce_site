"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, redirect } from "next/navigation";

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    price: "",
    price_sign: "",
    currency: "",
    image_link: "",
    product_link: "",
    website_link: "",
    description: "",
    rating: "",
    category: "",
    product_type: "",
    tag_list: "",
    product_colors: "",
  });

  if (!session) {
    redirect("/auth/signin"); // protect route
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      tag_list: formData.tag_list.split(",").map((tag) => tag.trim()),
      product_colors: formData.product_colors.split(",").map((color) => ({
        hex_value: color.split("|")[0]?.trim(),
        colour_name: color.split("|")[1]?.trim(),
      })),
    };

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Product added successfully!");
      router.push("/products");
    } else {
      alert("Failed to add product.");
    }
  };

  // Custom placeholders
  const placeholders = {
    brand: "e.g. Maybelline",
    name: "e.g. SuperStay Matte Ink",
    price: "e.g. 15.99",
    price_sign: "e.g. $",
    currency: "e.g. USD",
    image_link: "Paste product image URL",
    product_link: "Paste product detail link",
    website_link: "Paste brand website",
    description: "Short description of the product",
    rating: "e.g. 4.5",
    category: "e.g. Lipstick",
    product_type: "e.g. Makeup",
    tag_list: "Comma separated tags (e.g. vegan, cruelty-free)",
    product_colors: "Format: #HEX | Name, e.g. #FF5733|Red, #000000|Black",
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8"
      >
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label
              htmlFor={key}
              className="capitalize font-medium mb-1 text-gray-700 dark:text-gray-300"
            >
              {key.replace("_", " ")}:
            </label>
            {key === "description" ? (
              <textarea
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={placeholders[key]}
                className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                rows="4"
              />
            ) : (
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={placeholders[key]}
                className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            )}
          </div>
        ))}

        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
