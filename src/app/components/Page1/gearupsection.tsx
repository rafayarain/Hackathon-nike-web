import React from 'react';

const GearUpSection: React.FC = () => {
  const items = [
    {
      image: '/nike tecknit.png', //image
      title: 'Nike Dri-FIT ADV TechKnit Ultra',
      price: 'Rs. 3 895',
      description: "Men's Short-Sleeve Running Top",
    },
    {
      image: '/nikedrishort2.png', //image
      title: 'Nike Dri-FIT Challenger',
      price: 'Rs. 2 495',
      description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    },
    {
      image: '/nikedrirt3.png', //image
      title: 'Nike Dri-FIT ADV Run Division',
      price: 'Rs. 5 295',
      description: "Women's Long-Sleeve Running Top",
    },
    {
      image: '/nikefast4.png', //image
      title: 'Nike Fast',
      price: 'Rs. 3 795',
      description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    },
  ];

  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">Gear Up</h2>

      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Shop Men's</h3>
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">◀</button>
          <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">▶</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h4 className="font-semibold text-base mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <span className="font-semibold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GearUpSection;
