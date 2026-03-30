import "./App.css";
import Banner from "./Components/Banner/Banner";
import Stats from "./Components/Banner/Stats";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ThreeSteps from "./Components/ThreeSteps/ThreeSteps";
import Workflow from "./Components/Workflow/Workflow";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Stats />
        <ThreeSteps />
        <Workflow />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
