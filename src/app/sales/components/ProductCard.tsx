import React from "react";

const ProductCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/product16.png" // image
            alt="Nike Air Force 1 PLT.AF.ORM"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 p-6 bg-white text-black">
          <h2 className="text-3xl font-extrabold mb-2">Nike Air Force 1</h2>
          <h3 className="text-2xl font-semibold mb-4">PLT.AF.ORM</h3>

          <p className="text-sm text-black leading-relaxed mb-6">
            Turn style on its head with this crafted take on the Air Jordan I
            Mid. Its "Inside out"-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials, and aged midsole aesthetic give this release
            an artisan finish.
          </p>

          {/* Price */}
          <div className="text-3xl font-bold mb-6">₨ 24,000</div>

          {/* Add to Cart Button */}
          <button className="flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
            <span className="mr-2">🛒</span> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
