import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNote, updateNote } from "../features/notes/notesSlice";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const AddNote = ({ editingNote, setEditingNote }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("Medium");
  const [color, setColor] = useState("#E0F2FE");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
      setCategory(editingNote.category);
      setPriority(editingNote.priority);
      setColor(editingNote.color);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    if (editingNote) {
      dispatch(
        updateNote({
          ...editingNote,
          title,
          description,
          category,
          priority,
          color,
        })
      );

      toast.success("Note Updated Successfully");
      setEditingNote(null);
    } else {
      dispatch(
        addNote({
          id: uuidv4(),
          title,
          description,
          category,
          priority,
          color,
          favorite: false,
          completed: false,
          pinned: false,
          createdAt: new Date().toLocaleString(),
        })
      );

      toast.success("Note Added Successfully");
    }

    setTitle("");
    setDescription("");
    setCategory("Study");
    setPriority("Medium");
    setColor("#E0F2FE");
  };

  return (
    <div
      id="add-note"
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8 transition-all duration-300" >
      <h2 className="text-2xl font-bold mb-5 text-indigo-600 dark:text-indigo-400">
        {editingNote ? "Update Note" : "Create New Note"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Note Title"
          className="w-full border p-3 rounded-lg mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
           className="w-full p-3  border-gray-600 border rounded-lg bg-white dark:bg-gray-400 dark:text-white  dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-300"
        />
<div className="h-3" />
        <textarea
          rows="4"
          placeholder="Write your note..."
          className="w-full border p-3 rounded-lg mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
           className="w-full p-3  border-gray-600     border rounded-lg bg-white dark:bg-gray-400 dark:text-white"
        />
<div className="h-3" />
        <div className="grid md:grid-cols-3   gap-4">
          <select
            className="w-full p-3   rounded-lg border border-gray-300
             bg-white text-gray-900
             dark:bg-gray-400  border-gray-300 dark:text-white dark:border-gray-600
             focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Study</option>
            <option>Work</option>
            <option>Personal</option>
            <option>Ideas</option>
          </select>

          <select
            className="border w-full p-3   border-gray-600   border rounded-lg bg-white dark:bg-gray-400 dark:text-white p-3 rounded-lg"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          {/* <input
            type="color"
            value={color}
            className="h-12   w-full cursor-pointer"
            // onChange={(e) => setColor(e.target.value)}
          /> */}
        </div>

        <button
          type="submit"
          className="mt-6 w-full  border-gray-600  dark:bg-gray-400 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition"
        >
          {editingNote ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
};

export default AddNote;