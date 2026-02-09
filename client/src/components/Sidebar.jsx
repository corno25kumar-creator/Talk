import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-56 min-h-[calc(100vh-56px)] bg-white border-r p-4">
      <ul className="space-y-3">
        <li>
          <Link to="/" className="text-gray-700 hover:text-black">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" className="text-gray-700 hover:text-black">
            Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
