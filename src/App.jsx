import "./App.css";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Navigation from "./components/Navigation";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className="w-full">
      <TopBar className="w-full" />
      <div className="max-w-7xl mx-auto flex flex-col">
        <Header />
        <Navigation/>
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default App;
