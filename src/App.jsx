import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/footer"; 
import ApiData from "./pages/ApiData";
import Contact from "./pages/Contact";  

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-data" element={<ApiData />} />
        <Route path="/contact" element={<Contact />} />  
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;

