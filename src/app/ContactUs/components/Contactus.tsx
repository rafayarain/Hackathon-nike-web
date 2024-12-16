"use client";

const PaymentOptions = () => {
  return (
    <div className="bg-white text-black font-sans">
      {/* Container */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h1>
          <p className="mb-4">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Visa, Mastercard, Diners Club, Discover, Daraz pk</li>
            <li>Visa Electron, Maestro</li>
            <li>
              PayTM or a local credit or debit card (when PAN information is
              entered)
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-4">
            <a href="#" className="text-blue-600 underline">
              Nike Members
            </a>{" "}
            can store multiple debit or credit cards in their profile for faster
            checkout. If you’re not already a Member,{" "}
            <a href="#" className="text-blue-600 underline">
              join us
            </a>{" "}
            today.
          </p>
          <div className="flex gap-4 mb-6">
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              JOIN US
            </button>
            <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300">
              SHOP NIKE
            </button>
          </div>

          {/* FAQs Section */}
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Does my card need international purchases enabled?</h3>
              <p>
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Can I pay for my order with multiple methods?</h3>
              <p>
                No, payment for Nike orders can’t be split between multiple
                payment methods.
              </p>
            </div>
            <div>
              <h3 className="font-bold">What payment method is accepted for SNKRS orders?</h3>
              <p>
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Why don’t I see Apple Pay as an option?</h3>
              <p>
                To see Apple Pay as an option, you’ll need to use a compatible
                Apple device running the latest OS, sign in to your iCloud
                account, and use Safari to access Nike.com.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Sidebar */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 border-l border-gray-200 pl-6">
          <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-bold">0300002500</p>
                <p className="text-gray-600 text-sm">
                  Products & Orders: 24 hours a day, 7 days a week
                </p>
                <p className="text-gray-600 text-sm">
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>
            </div>
            {/* Chat */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-bold">24 hours a day</p>
                <p className="text-gray-600 text-sm">7 days a week</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-gray-600 text-sm">
                  We'll reply within five business days
                </p>
              </div>
            </div>
            {/* Store Locator */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-bold">STORE LOCATOR</p>
                <p className="text-gray-600 text-sm">
                  Find Nike retail stores near you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
