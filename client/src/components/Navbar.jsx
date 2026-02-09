import { Link } from "react-router-dom";
import { LuSun, LuMoon, LuLogIn } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      
      {/* Left section */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          Talks! 🗨️ 
        </Link>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        
        {/* Theme toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input type="checkbox" data-toggle-theme="dark,light" />

          {/* Sun */}
          <LuSun className="swap-on text-xl" />

          {/* Moon */}
          <LuMoon className="swap-off text-xl" />
        </label>

        {/* Login button */}
        <Link to="/login" className="btn btn-primary btn-sm gap-2">
          <LuLogIn className="text-lg" />
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
