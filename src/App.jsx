import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Stats from "./Components/Banner/Stats";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PremiumSection from "./Components/PremiumSection/PremiumSection";
import Pricing from "./Components/Pricing/Pricing";
import ThreeSteps from "./Components/ThreeSteps/ThreeSteps";
import Workflow from "./Components/Workflow/Workflow";
import { ToastContainer } from "react-toastify";

const fetchToolsData = async () => {
  const res = await fetch("/toolData.json");
  return res.json();
};

function App() {
  const toolsDataPromise = fetchToolsData();
  const [cart, setCart] = useState([]);

  return (
    <>
      <header>
        <Navbar cart={cart} />
        <Banner />
      </header>

      <main>
        <Stats />
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-90">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <PremiumSection
            cart={cart}
            setCart={setCart}
            toolsDataPromise={toolsDataPromise}
          />
        </Suspense>
        <ThreeSteps />
        <Pricing />
        <Workflow />
      </main>

      <footer>
        <Footer />
      </footer>

      <ToastContainer />
    </>
  );
}

export default App;
