import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <p className="text-blue-500 uppercase tracking-[0.3em] text-sm mb-4">
          Welcome to Tech Store
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Discover the Future of
          <span className="text-blue-500"> Technology</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Explore premium gadgets, powerful laptops, smartphones, and accessories
          designed for modern lifestyle and performance.
        </p>

        <div className="flex gap-5 mt-10">

          <Link
            to="/products"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-8 py-3 rounded-xl font-semibold"
          >
            Shop Now
          </Link>

          <Link
            to="/login"
            className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 px-8 py-3 rounded-xl font-semibold"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Features Section */}
      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500 transition">
            <h2 className="text-xl font-semibold mb-3">🚀 Fast Performance</h2>
            <p className="text-gray-400">
              High-quality products optimized for speed and efficiency.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500 transition">
            <h2 className="text-xl font-semibold mb-3">🔒 Secure Shopping</h2>
            <p className="text-gray-400">
              Safe and reliable platform with trusted transactions.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500 transition">
            <h2 className="text-xl font-semibold mb-3">💡 Modern Design</h2>
            <p className="text-gray-400">
              Clean and minimal UI built for great user experience.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;