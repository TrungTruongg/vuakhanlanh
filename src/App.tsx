import { Route, BrowserRouter, Routes } from "react-router-dom";
import "@/App.css";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Manufacture from "@/components/Manufacture";
import ProductLayout from "./components/product/ProductLayout";

function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/khan-lanh" element={<ProductLayout />} />
        <Route path="/san-xuat-khan-lanh" element={<Manufacture />} />
        <Route path="/cong-ty-khan-lanh" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
