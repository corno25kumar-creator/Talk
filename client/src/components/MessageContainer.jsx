import { FiSend } from "react-icons/fi";
import Message from "./ui/Message";
import User from "./ui/User";

function MessageContainer() {
  return (
    <div className="flex flex-col h-dvh bg-gray-900 overflow-hidden font-sans antialiased relative text-gray-100">
      
      {/* 1. Header with Dark Glass Effect */}
      {/* Changed: bg-white -> bg-gray-900, border-gray-100 -> border-gray-800 */}
      <div className="sticky top-[-9] z-30 flex items-center bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-sm px-6 py-3">
        <User />
      </div>

      {/* 2. Messages Area */}
      {/* Changed: scrollbar colors to match dark theme */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <div className="flex flex-col space-y-4">
            <Message />
            <Message />
          
          
        </div>
      </div>

      {/* 3. Dark Input Area */}
      {/* Changed: bg-white -> bg-gray-900, border-gray-100 -> border-gray-800 */}
      <div className="sticky bottom-0 z-30 bg-gray-900 border-t border-gray-800 px-4 py-4 md:px-6 md:py-5">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
            {/* Input Changed: bg-gray-100 -> bg-gray-800, text-gray-800 -> text-white */}
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 text-white rounded-2xl border border-gray-700 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
            />
            
            <button className="group flex items-center justify-center p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white shadow-lg shadow-indigo-500/20 transition-all duration-200">
              <FiSend size={20} className="ml-0.5" /> 
            </button>
        </div>
      </div>

    </div>
  );
}

export default MessageContainer;