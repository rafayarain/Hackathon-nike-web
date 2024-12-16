// components/Carousel.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Nike Air Max Pulse',
    price: 'Rs. 15,999',
    category: "Women's Shoes",
    image: '/nikeairmax womens.png', //image
  },
  {
    id: 2,
    name: 'Nike Air Max Pulse',
    price: 'Rs. 17,995',
    category: "Men's Shoes",
    image: '/Nikeairmax mans.png', //image
  },
  {
    id: 3,
    name: 'Nike Air Max 97 SE',
    price: 'Rs. 16,995',
    category: "Men's Shoes",
    image: '/nikeairmax97.png', //image
  },
  {
    id: 4,
    name: 'Nike Air Max Plus',
    price: 'Rs. 14,995',
    category: "Women's Shoes",
    image: '/nikeairmax womens2.png', //image
  },
  {
    id: 5,
    name: 'Nike Air Max 90',
    price: 'Rs. 12,995',
    category: "Men's Shoes",
    image: '/nikeairmax90.png', //image
  },
  {
    id: 6,
    name: 'Nike Air Max 270',
    price: 'Rs. 15,995',
    category: "Women's Shoes",
    image: '/nikeairmax270w.png', //image
  },
  {
    id: 7,
    name: 'Nike Air Max Alpha',
    price: 'Rs. 11,995',
    category: "Men's Shoes",
    image: '/nikeairmaxalpha.png', //image
  },
  
];

const Carousel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4">Best of Air Max</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide h-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[300px] flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <p className="mt-2 font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button className="p-2 bg-gray-100 rounded-full">❮</button>
        <button className="p-2 bg-gray-100 rounded-full">❯</button>
      </div>
    </div>
  );
};

export default Carousel;