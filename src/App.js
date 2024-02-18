import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Payments from "./pages/Payments/Payments";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pricing" element={<Payments />} />
       </Routes>
    <Footer/>
    </div>
  );
}

export default App;
