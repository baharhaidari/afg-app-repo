import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between px-14 py-6 items-center navbar">
      <div>
        <a href="" className="text-4xl font-medium">
          Logo
        </a>
      </div>

      <ul className="flex justify-between gap-8 items-center">
        <li className="text-xl">Home</li>
        <li className="text-xl">About</li>
        <li className="text-xl">Popular Places</li>
        <li className="text-xl">Contact</li>
      </ul>

      <div className="flex gap-8 text-center items-center">
        <p className="text-xl">Theme</p>
        <select name="" id="" className="text-xl">
          <option value="">English</option>
          <option value="">Persian</option>
        </select>
      </div>
    </nav>
  );
}
