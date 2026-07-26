import { useSelector } from "react-redux";
import {
  FaStickyNote,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const Dashboard = () => {
  const notes = useSelector((state) => state.notes.notes);

  const totalNotes = notes.length;
  const favoriteNotes = notes.filter(
    (note) => note.favorite
  ).length;

  const completedNotes = notes.filter(
    (note) => note.completed
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">

      {/* Total */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-white p-6 shadow-lg">

        <FaStickyNote className="text-4xl mb-3" />

        <h2 className="text-lg">Total Notes</h2>

        <h1 className="text-4xl font-bold mt-2">
          {totalNotes}
        </h1>

      </div>

      {/* Favorite */}

      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl text-white p-6 shadow-lg">

        <FaStar className="text-4xl mb-3" />

        <h2 className="text-lg">Favorite Notes</h2>

        <h1 className="text-4xl font-bold mt-2">
          {favoriteNotes}
        </h1>

      </div>

      {/* Completed */}

      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white p-6 shadow-lg">

        <FaCheckCircle className="text-4xl mb-3" />

        <h2 className="text-lg">Completed Notes</h2>

        <h1 className="text-4xl font-bold mt-2">
          {completedNotes}
        </h1>

      </div>

    </div>
  );
};

export default Dashboard;