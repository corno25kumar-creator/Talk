import React from 'react'

function Message() {
  return (
    <div className="space-y-4">
      {/* Incoming Message */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full border border-gray-700">
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div className="chat-header text-white/90 mb-1">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50 ml-2">12:45</time>
        </div>
        {/* Added bg-gray-700 and text-white */}
        <div className="chat-bubble bg-gray-700 text-white">
          You were the Chosen One!
        </div>
        <div className="chat-footer text-white/40 mt-1">
          Delivered
        </div>
      </div>

      {/* Outgoing Message */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full border border-gray-700">
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
            />
          </div>
        </div>
        <div className="chat-header text-white/90 mb-1">
          Anakin
          <time className="text-xs opacity-50 ml-2">12:46</time>
        </div>
        {/* Added bg-indigo-600 and text-white */}
        <div className="chat-bubble bg-indigo-600 text-white">
          I hate you!
        </div>
        <div className="chat-footer text-white/40 mt-1">
          Seen at 12:46
        </div>
      </div>
    </div>
  )
}

export default Message