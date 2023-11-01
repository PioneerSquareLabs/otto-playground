import React from 'react'

const NewPage = () => {
  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <div className="flex flex-col items-start w-full max-w-2xl h-full bg-gray-300">
      <div className="w-full h-full bg-gray-300"></div>
      <p className="mt-20 ml-4 text-sm text-blue-800">Header</p>
      <div onClick={handleClick} className="mt-8 ml-16 w-40 h-6 bg-red-700 cursor-pointer"></div>
    </div>
  )
}

export default NewPage