import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from './heroSlice';
import {AiOutlineDown} from "react-icons/ai";

const HeroView = () => {

  const dispatch=useDispatch();
  let coinData=useSelector((state)=>state.heroReducer).coins;

  useEffect(()=>{
    dispatch(fetchCoins());
  },[])

  return (
    
    <div id='home' className='h-[90vh] bg-gradient-to-b from-indigo-900 to-purple-800'>

      {coinData.loading && "fetching data"}
      {coinData.error && "fetching error"}
      {coinData.length>0 &&
      
        <div className='flex flex-col pt-[10vh]'>

          <div className='flex flex-col justify-center items-center text-center text-4xl md:text-8xl font-bold'>
            <p className='text-white mb-[1vh]'>TRACK AND TRADE</p>
            <p className='text-purple-500'>CRYPTO CURRENCIES</p>
          </div>

          <div className='flex invisible md:visible justify-center items-center gap-x-[10vw] pt-[15vh]'>

            <div className='text-center text-white font-semibold'>
              <div> <img alt='not found' className='w-[5vw] mx-auto' src={coinData[0].image}/> </div>
              <div>     
                <div> <span className='text-xl'>{coinData[0].name}</span>  <span className='text-green-300 text-2xl'>{coinData[0].price_change_percentage_24h.toFixed(2)}%</span></div>
              </div>
              <div className='text-2xl font-bold'>$ {coinData[0].current_price.toFixed(2)}</div>
            </div>

            <div className='text-center text-white font-semibold'>
              <div> <img alt='not found' className='w-[5vw] mx-auto' src={coinData[1].image}/> </div>
              <div>     
                <div> <span className='text-xl'>{coinData[1].name}</span>  <span className='text-green-300 text-2xl'>{coinData[1].price_change_percentage_24h.toFixed(2)}%</span></div>
              </div>
              <div className='text-2xl font-bold'>$ {coinData[1].current_price.toFixed(2)}</div>
            </div>

            <div className='text-center text-white font-semibold'>
              <div> <img alt='not found' className='w-[5vw] mx-auto' src={coinData[2].image}/> </div>
              <div>     
                <div> <span className='text-xl'>{coinData[2].name}</span>  <span className='text-green-300 text-2xl'>{coinData[2].price_change_percentage_24h.toFixed(2)}%</span></div>
              </div>
              <div className='text-2xl font-bold'>$ {coinData[2].current_price.toFixed(2)}</div>
            </div>

            <div className='text-center text-white font-semibold'>
              <div> <img alt='not found' className='w-[5vw] mx-auto' src={coinData[3].image}/> </div>
              <div>     
                <div> <span className='text-xl'>{coinData[3].name}</span>  <span className='text-green-300 text-2xl'>{coinData[3].price_change_percentage_24h.toFixed(2)}%</span></div>
              </div>
              <div className='text-2xl font-bold'>$ {coinData[3].current_price.toFixed(2)}</div>
            </div>

          </div>

          <div className='md:invisible visible mx-auto cursor-pointer z-50'>
            <div className='flex items-center gap-x-[2vw] bg-indigo-900 text-white text-xl px-6 py-4 rounded-full text-center'>
              <div>See Prices</div> 
              <div className='pt-[0.5vh]'><AiOutlineDown /></div>
            </div>
          </div>

        </div>

      }

    </div>
  )
}

export default HeroView