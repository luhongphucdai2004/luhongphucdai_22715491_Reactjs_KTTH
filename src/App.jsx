import "./App.css";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import SidebarMenu from "./components/MenuLeft";
import Navigation from "./components/Navigation";
import NewsSection from "./components/Section";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className="w-full">
      <TopBar className="w-full" />
      <div className="max-w-7xl mx-auto flex flex-col">
        <Header />
        <Navigation />
        <Banner />
        <div className="flex gap-5 my-5">
          <SidebarMenu />
          <NewsSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
