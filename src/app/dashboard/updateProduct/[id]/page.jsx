"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, redirect, useParams } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

export default function Page() {
  const params = useParams();
  const id = params.id;
  const { data: session } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [updatedFormData, setUpdatedFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [updatedImageUrl, setUpdatedImageUrl] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setFormData(data.singleProduct);
        setUpdatedFormData(data.singleProduct); // initialize editable form state
        setMounted(true);
        console.log("Fetched product:", data.singleProduct);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) fetchProducts();
  }, [id]);

  if (!mounted) return null;

  if (!session) {
    redirect("/auth/signin"); // protect route
  }

  // image upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);

    const imgFormData = new FormData();
    imgFormData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        imgFormData
      );

      console.log("Image upload response:", response);

      if (response?.data?.data?.display_url) {
        setUpdatedImageUrl(response.data.data.display_url);
      } else {
        toast.error("Failed to get uploaded image URL");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };


  const handleChange = (e) => {
    setUpdatedFormData({ ...updatedFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...rest } = updatedFormData;
    const payload = {
      ...rest,
      image_link: updatedImageUrl ? updatedImageUrl : updatedFormData.image_link,
      tag_list: typeof updatedFormData.tag_list === "string"
        ? updatedFormData.tag_list.split(",").map((tag) => tag.trim())
        : updatedFormData.tag_list,
      product_colors: typeof updatedFormData.product_colors === "string"
        ? updatedFormData.product_colors.split(",").map((color) => ({
          hex_value: color.split("|")[0]?.trim(),
          colour_name: color.split("|")[1]?.trim(),
        }))
        : updatedFormData.product_colors,
    };
    console.log("Submitting product:", payload);

    const res = await fetch(`/api/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      toast.success("Product updated successfully!");
      router.push(`/dashboard/updateProduct`);
    } else {
      toast.error("Failed to update product.");
    }
    console.log("Response:", res);
  };

  // Custom placeholders
  const placeholders = {
    brand: "e.g. Maybelline",
    name: "e.g. SuperStay Matte Ink",
    price: "e.g. 15.99",
    price_sign: "e.g. $",
    currency: "e.g. USD",
    description: "Short description of the product",
    rating: "e.g. 4.5",
    category: "e.g. Lipstick",
    product_type: "e.g. Makeup",
    priority: "Featured | Top | General",
    tag_list: "Comma separated tags (e.g. vegan, cruelty-free)",
    product_colors: "Format: #HEX | Name, e.g. #FF5733|Red, #000000|Black",
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-pink-100 dark:bg-gray-900 rounded-sm">
      <h1 className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent text-4xl font-extrabold mb-10 text-center">
        Update Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8"
      >
        {Object.keys(updatedFormData).map((key) =>
          key === "_id" || key === "created_at" || key === "postedBy" ? null : (
            <div key={key} className="flex flex-col">
              <label
                htmlFor={key}
                className="capitalize font-medium mb-1 text-pink-500 dark:text-pink-300"
              >
                {key.replace("_", " ")}:
              </label>

              {key === "priority" ? (
                <select
                  id={key}
                  name={key}
                  value={updatedFormData[key] || ""}
                  onChange={handleChange}
                  placeholder={placeholders[key]}
                  className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="top">Top</option>
                  <option value="general">General</option>
                </select>
              ) : key === "description" ? (
                <textarea
                  id={key}
                  name={key}
                  value={
                    Array.isArray(updatedFormData[key])
                      ? updatedFormData[key].join(", ")
                      : updatedFormData[key] || ""
                  }
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
                  value={
                    key === "tag_list"
                      ? updatedFormData[key]?.join(", ") || ""
                      : key === "product_colors"
                        ? updatedFormData[key]
                          ?.map((c) => `${c.hex_value}|${c.colour_name}`)
                          .join(", ") || ""
                        : updatedFormData[key] || ""
                  }
                  onChange={handleChange}
                  placeholder={placeholders[key]}
                  className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                />
              )}
            </div>
          )
        )}


        {/* Image Upload */}
        <div>
          <label className="capitalize font-medium mb-1 text-pink-500 dark:text-pink-300">
            Upload Your Image
          </label>
          <input
            className="border border-gray-300 p-2 rounded-md w-full dark:border-gray-700 file:mr-4 file:py-2 file:px-4 file:border file:border-pink-500 file:rounded-l-md file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-violet-100"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition"
          >
            Update Product
          </button>
        </div>
      </form>
    </section>
  );
}