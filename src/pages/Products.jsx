import React from "react";

const productList = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "$1299",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    price: "$2499",
    image:
      "https://www.apple.com/v/macbook-pro/ax/images/overview/welcome/hero_endframe__fwev9ebh42mq_xlarge.jpg",
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: "$399",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Gaming Keyboard",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop",
  },
];

const Products = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">

        <p className="text-blue-500 uppercase tracking-[0.3em] text-sm mb-3">
          Our Collection
        </p>

        <h1 className="text-5xl font-bold">
          Featured Products
        </h1>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Explore premium gadgets with modern design and powerful performance.
        </p>

      </div>

      {/* Flex Cards */}
      <div className="flex flex-wrap justify-center gap-8">

        {productList.map((product) => {
          return (
            <div
              key={product.id}
              className="w-[320px] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 group"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h2 className="text-2xl font-semibold">
                  {product.name}
                </h2>

                <p className="text-blue-500 text-xl mt-3 font-medium">
                  {product.price}
                </p>

                <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-3 rounded-xl font-medium">
                  View Product
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Products;