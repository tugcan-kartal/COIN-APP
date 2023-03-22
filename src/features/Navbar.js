import React from 'react'

const Navbar = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.hash;
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='flex justify-around items-center gap-x-[20vw] h-[10vh] text-white bg-indigo-900 outline-none border-none'>
        <div className='font-bold text-2xl cursor-pointer'>COIN</div>
        <div className='flex gap-x-[4vw] font-semibold text-lg'>
            <div className='hover:text-purple-500 transition-colors duration-3000 cursor-pointer'>
              <a href='#home' onClick={handleLinkClick}>HOME</a>
            </div>
            <div className='hover:text-purple-500 transition-colors duration-3000 cursor-pointer'>
              <a href='#market' onClick={handleLinkClick}>MARKET</a>
            </div>
            <div className='hover:text-purple-500 transition-colors duration-3000 cursor-pointer'>
              <a href='#whychooseus' onClick={handleLinkClick}>CHOOSE US</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
