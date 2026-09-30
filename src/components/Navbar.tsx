import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold">
          Movie Explorer
        </NavLink>

        <div className="flex gap-6">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/movies">Movies</NavLink>

          <NavLink to="/search">Search</NavLink>

          <NavLink to="/favorites">Favorites</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;