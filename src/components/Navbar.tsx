import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors duration-200 ${
      isActive
        ? "font-semibold text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black px-8 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center">
        <NavLink
          to="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight"
        >
          <span className="text-red-600">MOVIE</span>
          <span className="text-white">EXPLORER</span>
        </NavLink>

        <div className="ml-auto mr-32 flex items-center gap-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>

          <NavLink to="/search" className={navLinkClass}>
            Search
          </NavLink>

          <NavLink to="/favorites" className={navLinkClass}>
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;