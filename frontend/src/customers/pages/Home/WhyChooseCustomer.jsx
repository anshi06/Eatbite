export default function WhyChooseCustomer() {
  return (
    <section className="py-9 bg-gray-300 mt-3">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-700">
          Why Choose Us ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-black p-3 rounded-full shadow-lg mb-3">
              <svg
                className="w-9 h-9 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl text-gray-700 font-semibold mb-2">
              Wide Selection
            </h3>
            <p className="text-gray-600 text-center">
              Explore a diverse range of cuisines and dishes from our extensive
              menu options.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black p-3 rounded-full shadow-lg mb-3">
              <svg
                className="w-9 h-9 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl text-gray-700 font-semibold mb-2">
              Convenient Ordering
            </h3>
            <p className="text-gray-600 text-center">
              Enjoy hassle-free ordering with our user-friendly interface and
              quick delivery options.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black p-3 rounded-full shadow-lg mb-3">
              <svg
                className="w-9 h-9 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl text-gray-700 font-semibold mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-600 text-center">
              Rest assured with our commitment to delivering fresh, high-quality
              meals prepared with care.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black p-3 rounded-full shadow-lg mb-3">
              <svg
                className="w-9 h-9 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4m16 0l-4-4m4 4l-4 4"
                />
              </svg>
            </div>
            <h3 className="text-xl text-gray-700 font-semibold mb-2">
              Secure Transactions
            </h3>
            <p className="text-gray-600 text-center">
              Shop confidently with our secure payment options and encrypted
              transactions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black p-3 rounded-full shadow-lg mb-3">
              <svg
                className="w-9 h-9 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 18v-6a9 9 0 0 1 18 0v6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"
                />
              </svg>
            </div>
            <h3 className="text-xl text-gray-700 font-semibold mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-center">
              Experience speedy delivery services to enjoy your favorite meals
              right at your doorstep.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black p-3 rounded-full shadow-lg mb-3">
              <svg
                className="w-9 h-9 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0zm-7 4a4 4 0 0 1-4 4m4-18v4m0 10v4m6-8h-4m-10 0H3"
                />
              </svg>
            </div>
            <h3 className="text-xl text-gray-700 font-semibold mb-2">
              Customer Support
            </h3>
            <p className="text-gray-600 text-center">
              Get assistance and resolve any queries with our dedicated customer
              support team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
