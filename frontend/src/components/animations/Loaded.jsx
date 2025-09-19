import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex">
        {/* Ping animation */}
        <div className="absolute inline-flex h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 animate-ping"></div>

        {/* Inner circle (stable core) */}
        <div className="relative inline-flex h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
      </div>
    </div>
  );
}

export default Loader;
