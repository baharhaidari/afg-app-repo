import "./PlacesSearch.css";

export default function PlacesSearch() {
  return (
    <p className="grid grid-cols-2 gap-4 place-content-start place-items-center">
      <label htmlFor="seacrh" className="">
        Search by Province Name:
      </label>

      <input
        class=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="e.g Herat"
        type="text"
        name="search"
        id="seacrh"
      />
    </p>
  );
}
