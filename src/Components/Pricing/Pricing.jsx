import React from "react";

const Pricing = () => {
  return (
    <div className="mt-9">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center">
        Simple, Transparent Pricing
      </h2>
      <p className="text-center text-gray-400 py-8">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center pb-24 gap-6">
          <div className="rounded-2xl px-8 py-10 shadow-xl flex flex-col h-128 bg-gray-100 border border-gray-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="flex-1">
              <h2 className="text-3xl font-bold">Starter</h2>
              <p className="mb-6 text-gray-400">Perfect for getting started</p>

              <div className="mb-6">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-lg ml-1 text-gray-400">/Month</span>
              </div>

              <ul className="space-y-3 mb-8 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Access to all
                  premium tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Basic templates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Community support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> 1 project per month
                </li>
              </ul>
            </div>

            <button className="btn text-white font-bold rounded-3xl btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
              Get Started Free
            </button>
          </div>

          <div className="relative rounded-2xl px-8 py-10 shadow-xl flex flex-col h-128 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border border-gray-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-700 text-sm px-4 py-1 rounded-full shadow">
              Most Popular
            </div>

            <h2 className="text-3xl text-white font-bold">Pro</h2>
            <p className="mb-6 text-white">Best for professionals</p>

            <div className="mb-6">
              <span className="text-5xl text-white font-bold">$29</span>
              <span className="text-lg text-white ml-1 ">/Month</span>
            </div>

            <ul className="space-y-3 mb-8 text-white">
              <li className="flex items-center gap-2">
                <span className="text-white">✔</span> Access to all premium
                tools
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">✔</span> Unlimited templates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">✔</span> Priority support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">✔</span> Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">✔</span> Cloud sync
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">✔</span> Advanced analytics
              </li>
            </ul>

            <button className="btn  font-bold rounded-3xl btn-block  ">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Start Pro Trial
              </span>
            </button>
          </div>

          <div className="rounded-2xl px-8 py-10 shadow-xl flex flex-col h-128 bg-gray-100 border border-gray-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="flex-1">
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <p className="mb-6 text-gray-400">For teams and businesses</p>

              <div className="mb-6">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-lg ml-1 text-gray-400">/Month</span>
              </div>

              <ul className="space-y-3 mb-8 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Team collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Custom integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> SLA guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Custom branding
                </li>
              </ul>
            </div>

            <button className="btn text-white font-bold rounded-3xl btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
