import React from "react";

const ProductPage: React.FC = () => {
  // Product List with individual products with image
  const products = [
    { id: 1, name: "Nike Air Max 90", price: 3500, img: "/images/product1.png" },
    { id: 2, name: "Nike Pegasus 39", price: 4200, img: "/images/product2.png" },
    { id: 3, name: "Nike Free Run 5.0", price: 3000, img: "/images/product3.png" },
    { id: 4, name: "Nike Revolution 6", price: 3700, img: "/images/product4.png" },
    { id: 5, name: "Nike ZoomX Vaporfly", price: 5800, img: "/images/product5.png" },
    { id: 6, name: "Nike Flex Runner", price: 3200, img: "/images/product6.png" },
    { id: 7, name: "Nike Blazer Mid '77", price: 4500, img: "/images/product7.png" },
    { id: 8, name: "Nike Court Vision", price: 2900, img: "/images/product8.png" },
    { id: 9, name: "Nike Air Force 1", price: 5200, img: "/images/product9.png" },
    { id: 10, name: "Nike Metcon 8", price: 4700, img: "/images/product10.png" },
    { id: 11, name: "Nike Air Monarch IV", price: 3100, img: "/images/product11.png" },
    { id: 12, name: "Nike LeBron Witness 6", price: 6000, img: "/images/product12.png" },
    { id: 13, name: "Nike Air Zoom Winflo 9", price: 3300, img: "/images/product13.png" },
    { id: 14, name: "Nike React Infinity Run", price: 5400, img: "/images/product14.png" },
    { id: 15, name: "Nike Wildhorse 7", price: 3900, img: "/images/product15.png" },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 border-r border-gray-300 p-4 hidden lg:block">
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Categories</h3>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:underline">Shoes</li>
            <li className="cursor-pointer hover:underline">Sports Bras</li>
            <li className="cursor-pointer hover:underline">Tops & T-Shirts</li>
            <li className="cursor-pointer hover:underline">
              Hoodies & Sweatshirts
            </li>
            <li className="cursor-pointer hover:underline">Jackets</li>
            <li className="cursor-pointer hover:underline">Trousers & Tights</li>
            <li className="cursor-pointer hover:underline">Shorts</li>
            <li className="cursor-pointer hover:underline">Tracksuits</li>
            <li className="cursor-pointer hover:underline">
              Jumpsuits & Rompers
            </li>
            <li className="cursor-pointer hover:underline">Skirts & Dresses</li>
            <li className="cursor-pointer hover:underline">Socks</li>
            <li className="cursor-pointer hover:underline">
              Accessories & Equipment
            </li>
          </ul>
        </div>

        {/* Gender Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Gender</h4>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Women</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Unisex</span>
            </label>
          </div>
        </div>

        {/* Kids Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Kids</h4>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Boys</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Girls</span>
            </label>
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Shop By Price</h4>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Under Rs. 2 500.00</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Rs. 2 501.00 - Rs. 5 000.00</span>
            </label>
          </div>
        </div>
      </aside>



      {/* Product Grid */}
      <main className="w-full lg:w-3/4 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-2 shadow hover:shadow-lg transition"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-2 text-center">
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-gray-600 text-xs">Rs. {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
