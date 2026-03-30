import React from "react";

const Workflow = () => {
  return (
    <div>
      <div className="hero  bg-linear-to-r from-[#4F39F6] to-[#9514FA] min-h-112.5">
        <div className="hero-content text-center text-white">
          <div className="">
            <h1 className="text-5xl font-bold">
              Ready to Transform Your Workflow?
            </h1>
            <p className="py-6 opacity-90">
              Join thousands of professionals who are already using Digitools to
              work smarter. <br /> Start your free trial today.
            </p>
            <div className="space-x-4">
              <button className="rounded-full btn">
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  Explore Products
                </span>
              </button>
              <button className="btn bg-transparent border border-white text-white rounded-full">
                View Pricing
              </button>
            </div>
            <p className="pt-4 opacity-80">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
