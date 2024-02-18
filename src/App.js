import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Payments from "./pages/Payments/Payments";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/payments" element={<Payments />} />
       </Routes>

    </div>
  );
}

export default App;
