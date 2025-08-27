import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";   // 👈 use your actual Home component
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />

      {/* 👇 This ensures every route change scrolls to top */}
      <ScrollToTop />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </>
  );
}
