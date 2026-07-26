import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [editingNote, setEditingNote] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-all duration-300">

      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <Dashboard />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filter
          category={category}
          setCategory={setCategory}
        />

        <AddNote
          editingNote={editingNote}
          setEditingNote={setEditingNote}
        />

        <NotesList
          search={search}
          category={category}
          setEditingNote={setEditingNote}
        />

      </div>

      <Footer />

    </div>
  );
}

export default App;