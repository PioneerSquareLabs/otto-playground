import React from 'react';

const NewFile002 = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  }

  return (
    <div className="w-full h-full p-0 flex items-center justify-center">
      <div className="w-64 h-64 bg-gray-300 flex flex-col items-start justify-start p-4">
        <p className="mt-8 text-sm text-blue-700">Header</p>
        <button onClick={handleButtonClick} className="mt-3 w-20 h-1 bg-red-700"></button>
      </div>
    </div>
  );
}

export default NewFile002;