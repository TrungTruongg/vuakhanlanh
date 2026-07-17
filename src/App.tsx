import { Route, BrowserRouter, Routes } from "react-router-dom";
import "@/App.css";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Manufacture from "@/components/Manufacture";
import ProductLayout from "@/components/product/ProductLayout";
import ScrollToTop from "@/components/ScrollToTop";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/san-pham" element={<ProductLayout />} />
        <Route path="/quy-trinh" element={<Manufacture />} />
        <Route path="/cong-ty" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/lien-he" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
