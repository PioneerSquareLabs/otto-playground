import React from 'react';

const NewPage = () => {
  return (
    <div className="w-full max-w-2xl h-screen bg-gray-300 flex flex-col items-start p-4">
      <div className="w-full h-full bg-gray-300"></div>
      <p className="mt-20 text-sm text-blue-800">This is a header</p>
      <div className="mt-8 w-40 h-6 bg-red-700"></div>
    </div>
  )
}

export default NewPage;