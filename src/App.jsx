import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardList from "./Components/CardList";
import { EditCard } from "./Components/EditCard";
import AddCard from "./Components/AddCard";
import NewCard from "./Components/NewCard";
function App() {
  return (
    <div>
      <NewCard />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/edit/:id" element={<EditCard />} />
        <Route path="/newcard" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
