import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import AllPlayers from "./components/AllPlayers";
import Nav from "./components/Nav";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
