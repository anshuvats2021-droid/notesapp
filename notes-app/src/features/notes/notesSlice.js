import { createSlice } from "@reduxjs/toolkit";

const savedNotes =
  JSON.parse(localStorage.getItem("notes")) || [];

const initialState = {
  notes: savedNotes,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,

  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter(
        (note) => note.id !== action.payload
      );

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },

    updateNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );

      if (index !== -1) {
        state.notes[index] = action.payload;
      }

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },

    toggleFavorite: (state, action) => {
      const note = state.notes.find(
        (note) => note.id === action.payload
      );

      if (note) {
        note.favorite = !note.favorite;
      }

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },

    toggleCompleted: (state, action) => {
      const note = state.notes.find(
        (note) => note.id === action.payload
      );

      if (note) {
        note.completed = !note.completed;
      }

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },

    togglePin: (state, action) => {
      const note = state.notes.find(
        (note) => note.id === action.payload
      );

      if (note) {
        note.pinned = !note.pinned;
      }

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },
  },
});

export const {
  addNote,
  deleteNote,
  updateNote,
  toggleFavorite,
  toggleCompleted,
  togglePin,
} = notesSlice.actions;

export default notesSlice.reducer;