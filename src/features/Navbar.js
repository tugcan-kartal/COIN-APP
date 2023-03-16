import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center gap-x-[20vw] h-[10vh] text-white bg-indigo-900 outline-none border-none'>
        <div className='font-bold text-2xl cursor-pointer'>COIN</div>
        <div className='flex gap-x-[4vw] font-semibold text-lg'>
            <div className='hover:text-purple-500 transition-colors duration-3000 cursor-pointer'>HOME</div>
            <div className='hover:text-purple-500 transition-colors duration-3000 cursor-pointer'>MARKET</div>
            <div className='hover:text-purple-500 transition-colors duration-3000 cursor-pointer'>CHOOSE US</div>
        </div>
    </div>
  )
}

export default Navbar