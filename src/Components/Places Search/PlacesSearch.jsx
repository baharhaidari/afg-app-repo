import "./PlacesSearch.css";

export default function PlacesSearch({ setSearchQuery, searchQuery }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex justify-start items-center gap-4 relative left-0">
      <label htmlFor="seacrh" className="">
        Search by Province Name:
      </label>

      <input
        className=" placeholder:text-slate-400 bg-white w-80 border border-slate-300 rounded-md py-2 p-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
        placeholder="e.g Herat"
        type="text"
        name="search"
        id="seacrh"
        onChange={handleSearchChange}
        value={searchQuery}
      />
    </div>
  );
}
