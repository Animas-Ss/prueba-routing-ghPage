import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Navigation } from "./components/Nabvar/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Routes>
        <Route path="/prueba-routing-ghPage/" element={<Home />} />
        <Route path="/prueba-routing-ghPage/about" element={<About />} />
        <Route path="/prueba-routing-ghPage/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;