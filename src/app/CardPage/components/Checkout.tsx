import React from "react";

const CheckoutForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-4">
      {/* Left Side - Form */}
      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-xl font-semibold mb-4">
          How would you like to get your order?
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Customs regulation for India requires a copy of the recipient’s KYC.
          The address on this KYC needs to match the shipping address. Our
          courier will contact you via SMS/email to obtain a copy of your KYC.
          <a href="#" className="text-blue-500 underline ml-1">
            Learn More
          </a>
        </p>

        {/* Delivery Option */}
        <button className="w-full border border-gray-400 py-2 px-4 text-gray-700 rounded-md mb-4">
          Deliver it
        </button>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="Address Line 1"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Address Line 3"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Postal Code"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Locality"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select className="border border-gray-300 p-2 rounded-md">
              <option value="state">State/Territory</option>
            </select>
            <select className="border border-gray-300 p-2 rounded-md">
              <option value="india">India</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <h3 className="mt-6 font-semibold">What’s your contact information?</h3>
        <div className="space-y-4 mt-2">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>

        {/* PAN Input */}
        <h3 className="mt-6 font-semibold">What’s your PAN?</h3>
        <input
          type="text"
          placeholder="PAN"
          className="border border-gray-300 p-2 w-full rounded-md mt-2"
        />
        <div className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-600">
            Save PAN details to Nike Profile
          </label>
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-600">
            I have read and consent to Nike processing my information in
            accordance with the
            <a href="#" className="text-blue-500 underline ml-1">
              Privacy Statement
            </a>
            and
            <a href="#" className="text-blue-500 underline ml-1">
              Cookies Policy
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gray-200 text-gray-700 font-semibold py-2 mt-4 rounded-md">
          Continue
        </button>
      </div>

      {/* Right Side - Order Summary */}
      <div className="w-full md:w-1/3 p-4 bg-white border-l">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>Rs. 20 890.00</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Delivery/Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>Rs. 20 890.00</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            (The total reflects the price of your order, including all duties
            and taxes)
          </p>
        </div>

        {/* Product List */}
        <div className="mt-4">
          <h3 className="font-medium mb-2">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
          {/* Product 1 */}
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="/images/product7.png"
              alt="Nike Shirt"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="text-sm font-medium">Nike Dri-FIT ADV TechKnit</p>
              <p className="text-sm text-gray-600">Qty 1 | Size L</p>
              <p className="text-sm font-medium">Rs. 3 895.00</p>
            </div>
          </div>
          {/* Product 2 */}
          <div className="flex items-center space-x-4">
            <img
              src="/images/product1.png"
              alt="Nike Shoes"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="text-sm font-medium">Nike Air Max 97 SE Men’s Shoes</p>
              <p className="text-sm text-gray-600">Qty 1 | Size UK 8</p>
              <p className="text-sm font-medium">Rs. 16 995.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
