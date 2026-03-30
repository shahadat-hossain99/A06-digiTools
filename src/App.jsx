import "./App.css";
import Banner from "./Components/Banner/Banner";
import Stats from "./Components/Banner/Stats";
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
      <footer></footer>
    </>
  );
}

export default App;
