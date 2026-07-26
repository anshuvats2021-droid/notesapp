import {
  FaTrash,
  FaStar,
  FaRegStar,
  FaCheckCircle,
  FaEdit,
} from "react-icons/fa";

const NoteCard = ({
  note,
  onDelete,
  onFavorite,
  onComplete,
  onEdit,
  onPin,
}) => {
  return (
    <div
      style={{ backgroundColor: note.color }}
      className="
        rounded-2xl
        shadow-xl
        hover:scale-105
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        border
        border-gray-200
        dark:border-gray-700
        p-5
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-black ">
          {note.title}
        </h2>

        <button onClick={() => onFavorite(note.id)}>
          {note.favorite ? (
            <FaStar className="text-yellow-500 text-2xl" />
          ) : (
            <FaRegStar className="text-gray-500 dark:text-gray-300 text-2xl" />
          )}
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 mt-3">
        {note.description}
      </p>

      {/* Category & Priority */}
      <div className="flex gap-3 mt-4 flex-wrap">
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          {note.category}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-white text-sm ${
            note.priority === "High"
              ? "bg-red-500"
              : note.priority === "Medium"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {note.priority}
        </span>
      </div>

      {/* Date */}
      <p className="text-xs text-gray-500 mt-4">
        {note.createdAt}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => onComplete(note.id)}
          className={`p-3 rounded-lg transition ${
            note.completed
              ? "bg-green-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white"
          }`}
        >
          <FaCheckCircle />
        </button>

        <button
          onClick={() => onEdit(note)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"
        >
          <FaEdit />
        </button>

        {onPin && (
          <button
            onClick={() => onPin(note.id)}
            className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg transition"
          >
            📌
          </button>
        )}

        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;