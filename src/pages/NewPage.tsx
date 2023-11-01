import React from 'react'

const NewPage = () => {
  const handleClick = () => {
    console.log("Button clicked");
  }

  return (
    <div className="w-full max-w-2xl h-screen bg-gray-300 flex flex-col items-start p-4">
      <div className="w-full h-full bg-gray-300"></div>
      <h1 className="mt-20 text-lg text-blue-800">Header</h1>
      <button onClick={handleClick} className="mt-8 w-40 h-6 bg-red-700"></button>
    </div>
  )
}

export default NewPage