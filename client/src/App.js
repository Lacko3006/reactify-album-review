import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Albums from "./components/Albums"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/album" element={<Albums />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
