
import "./App.css";
import Footer from "./components/Footer";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className="w-full">
      <TopBar className="w-full" />
      <div className="max-w-7xl mx-auto flex flex-col">
        <Footer />
      </div>
    </div>
  );
}

export default App;
