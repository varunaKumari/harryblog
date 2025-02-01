export default function PricingSection() {
    const pricingTiers = [
      {
        name: "Basic",
        price: "$9/mo",
        features: ["1 User", "5GB Storage", "Email Support"],
        buttonText: "Get Started",
        mostPopular: false,
      },
      {
        name: "Pro",
        price: "$29/mo",
        features: ["5 Users", "50GB Storage", "Priority Support"],
        buttonText: "Upgrade Now",
        mostPopular: true,
      },
      {
        name: "Enterprise",
        price: "Contact Us",
        features: ["Unlimited Users", "1TB Storage", "Dedicated Support"],
        buttonText: "Contact Sales",
        mostPopular: false,
      },
    ];

    return (
        <div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Pricing Plans</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Choose the right plan for you.</p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`border rounded-3xl p-8 shadow-2xl bg-white dark:bg-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl ${tier.mostPopular ? "border-blue-600 ring-2 ring-blue-300 dark:border-blue-500" : "border-gray-300 dark:border-gray-600"} flex flex-col justify-between`}
            >
              {tier.mostPopular && (
                <div className="text-xs uppercase font-bold text-white bg-blue-600 rounded-full px-4 py-1 inline-block mb-4 shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{tier.name}</h3>
              <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white">{tier.price}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 flex items-center text-lg">
                    <span className="mr-3 text-green-500 text-xl">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-5 rounded-xl font-semibold text-white transition duration-300 ease-in-out transform ${tier.mostPopular ? "bg-blue-600 hover:bg-blue-700 shadow-lg" : "bg-gray-800 hover:bg-gray-900 shadow-md dark:bg-gray-600 dark:hover:bg-gray-700"}`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

</div>

    );
}