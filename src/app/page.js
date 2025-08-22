import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
     
      <h1 className="text-4xl font-bold">Welcome to Our E-commerce Site</h1>
      <p className="mt-4 text-lg">Find the best products at unbeatable prices!</p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Shop Now
      </button>
    </div>
    </>
  );
}
