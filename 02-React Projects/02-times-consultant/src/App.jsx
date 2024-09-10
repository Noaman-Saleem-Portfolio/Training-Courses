import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import Test from "./components/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import "./app.css";
import "./styles/menubar.css";
import "./styles/hero.css";
import "./styles/destination.css";
import "./styles/services.css";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
