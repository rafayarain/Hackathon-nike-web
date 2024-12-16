import React from "react";

const NavMenu = () => {
  const menuItems = [
    {
      category: "Icons",
      items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
    },
    {
      category: "Shoes",
      items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
    },
    {
      category: "Clothing",
      items: [
        "All Clothing",
        "Modest Wear",
        "Hoodies & Pullovers",
        "Shirts & Tops",
      ],
    },
    {
      category: "Kids'",
      items: [
        "Infant & Toddler Shoes",
        "Kids' Shoes",
        "Kids' Jordan Shoes",
        "Kids' Basketball Shoes",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-8 p-4 bg-gray-50 text-gray-800">
      {menuItems.map((menu) => (
        <div key={menu.category}>
          <h2 className="font-bold text-lg mb-2">{menu.category}</h2>
          <ul className="space-y-1">
            {menu.items.map((item) => (
              <li key={item} className="hover:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavMenu;
