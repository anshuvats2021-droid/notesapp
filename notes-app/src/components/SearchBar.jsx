const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="my-5">
      <input
        type="text"
        placeholder="🔍 Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl border shadow focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>
  );
};

export default SearchBar;