/* import 'bootstrap/dist/css/bootstrap.css'; */
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import Kids from "./pages/Kids";
import Contact from "./pages/Contact";
import { Route, Routes } from  "react-router-dom"
import './fonts/all/fonts.css'
import './fonts/all/fontsmon.css'
import { Navbar } from './js/components/Navbar'
import { Footer } from "./js/components/Footer";



function App() {
  
  return (
    
    <>
    <div className="container">
    <Navbar />
    </div>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes> 
    </div>
    <Footer />
    </>
  );
}

export default App;
