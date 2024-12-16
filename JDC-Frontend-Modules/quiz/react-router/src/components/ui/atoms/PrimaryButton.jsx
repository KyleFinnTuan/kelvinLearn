import React from 'react'

const PrimaryButton = ({children, onClick}) => {
  return (
    <button className='px-6 py-2 rounded-lg font-semibold bg-cyan-400 text-white hover:bg-cyan-300' onClick={onClick}>
      {children}
    </button>
  )
}

export default PrimaryButton
