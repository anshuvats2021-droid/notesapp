import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  deleteNote,
  toggleFavorite,
  toggleCompleted,
} from "../features/notes/notesSlice";

import NoteCard from "./NoteCard";
import EmptyState from "./EmptyState";

const NotesList = ({
  search,
  category,
  setEditingNote,
}) => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const filteredNotes = notes
    .filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        note.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => (b.pinned || false) - (a.pinned || false));

  if (filteredNotes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={(id) => {
            const ok = window.confirm(
              "Are you sure you want to delete this note?"
            );

            if (ok) {
              dispatch(deleteNote(id));
              toast.success("Deleted Successfully");
            }
          }}
          onFavorite={(id) => dispatch(toggleFavorite(id))}
          onComplete={(id) => dispatch(toggleCompleted(id))}
          onEdit={setEditingNote}
        />
      ))}
    </div>
  );
};

export default NotesList;