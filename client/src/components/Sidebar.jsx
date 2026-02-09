import User from "./ui/User";
import { useState } from "react";
import SearchInput from "./ui/SearchInput";

const Sidebar = () => {
  const [search, setSearch] = useState("");

  const users = [
    { name: "Chandan Kumar", avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Ankit Sharma", avatar: "https://i.pravatar.cc/150?img=13" },
    { name: "Riya Singh", avatar: "https://i.pravatar.cc/150?img=14" },
    { name: "Rahul Verma", avatar: "https://i.pravatar.cc/150?img=15" },
    { name: "Neha Gupta", avatar: "https://i.pravatar.cc/150?img=16" },
  ];

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Added: shadow-2xl and bg-zinc-900 (slightly lighter/warmer than gray-900)
    <aside className="w-80 h-screen bg-[#18181b] border-r border-white/5 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.3)] z-40">
      
      {/* Sticky Search Box with glass effect */}
      <div className="sticky top-0 z-10 bg-[#18181b]/95 backdrop-blur-md p-5 border-b border-white/5">
        <SearchInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search users..."
        />
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-zinc-700">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, idx) => (
            // Wrapped User in a div for hover interaction and spacing
            <div 
              key={idx} 
              className="px-3 py-1 transition-all duration-200 cursor-pointer hover:bg-white/5 active:bg-white/10 mx-2 rounded-xl mb-1"
            >
              <User user={user} />
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center mt-10 px-4 text-center">
            <p className="text-zinc-500 text-sm font-medium">No users found</p>
            <p className="text-zinc-600 text-xs mt-1">Try a different name</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;