import React from 'react';

const RedButtonPage = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="w-80 h-80 flex flex-col items-start bg-gray-300">
      <p className="mt-20 ml-3 text-sm text-blue-700">Header</p>
      <div onClick={handleClick} className="mt-10 ml-14 w-28 h-5 bg-red-700 cursor-pointer"></div>
    </div>
  );
};

export default RedButtonPage;