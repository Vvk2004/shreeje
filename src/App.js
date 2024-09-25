import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import OurProducts from './pages/OurProducts';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import OurPrdFruits from './pages/OurPrdFruits';
import OurPrdGrains from './pages/OurPrdGrains';
import OurPrdSpices from './pages/OurPrdSpices';
import Contact from './pages/Contact';
import BackHome from './pages/BackHome';

const App = () => {
  return (
    <>
      <BackHome />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourProducts" element={<OurProducts />} />
        <Route path="/ourPrdFruits" element={<OurPrdFruits />} />
        <Route path="/ourPrdGrains" element={<OurPrdGrains />} />
        <Route path="/ourPrdSpices" element={<OurPrdSpices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
