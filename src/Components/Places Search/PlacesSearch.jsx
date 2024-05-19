import "./PlacesSearch.css";

export default function PlacesSearch() {
  return (
    <p className="grid grid-cols-2 gap-4 place-content-start place-items-center">
      <label htmlFor="seacrh" className="">
        Search by Province Name:
      </label>

      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
      </span>

      <input
        class=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="e.g Herat"
        type="text"
        name="search"
        id="seacrh"
      />
    </p>
  );
}
