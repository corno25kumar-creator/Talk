const User = ({ user }) => {
  return (
    <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-white/10 rounded-lg transition-colors group">
      {/* Avatar */}
      {user?.avatar ? (
        <img
          src={user.avatar}
          alt="user"
          className="w-10 h-10 rounded-full object-cover border border-white/10"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white shadow-inner">
          {user?.name?.[0]?.toUpperCase() || "U"}
        </div>
      )}

      {/* Name - Changed to white text */}
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-medium text-white group-hover:text-white transition-colors truncate">
          {user?.name || "User"}
        </span>
        {/* Added a subtle status text for extra detail */}
        <span className="text-[11px] text-white/40 truncate">
          Online
        </span>
      </div>
    </div>
  );
};

export default User;