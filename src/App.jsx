import "./App.css";
import Banner from "./Components/Banner/Banner";
import Stats from "./Components/Banner/Stats";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Stats />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
