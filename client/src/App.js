import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
        <Sidebar />
        <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
