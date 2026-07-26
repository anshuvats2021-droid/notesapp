const Filter = ({ category, setCategory }) => {
  return (
    <div className="my-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="
          w-64
          px-4
          py-3
          rounded-xl
          border
          border-gray-300
          bg-white
          text-gray-800
          shadow-md
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-600
        "
      >
        <option value="All">All Categories</option>
        <option value="Study">Study</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Ideas">Ideas</option>
      </select>
    </div>
  );
};

export default Filter;