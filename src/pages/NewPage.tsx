import React from 'react';

const NewPage = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  }

  return (
    <div className="w-full max-w-2xl h-full bg-gray-300 flex flex-col items-start">
      <div className="w-full h-full bg-gray-300"></div>
      <p className="mt-20 ml-4 text-sm text-blue-800">Welcome to the New Page</p>
      <button onClick={handleButtonClick} className="mt-8 ml-16 w-40 h-6 bg-red-700 text-white">Click Me</button>
    </div>
  )
}

export default NewPage;