import React from 'react';
function PostOption({ icon, name, color }) {
  return (
    <div className="flex items-center cursor-pointer text-gray-400 font-semibold text-sm gap-4 py-3 px-2 rounded-md hover:bg-[#F5F5F5]">
      <div className={`text-2xl ${color}`}>{icon}</div>
      <p>{name}</p>
    </div>
  );
}

export default PostOption;
