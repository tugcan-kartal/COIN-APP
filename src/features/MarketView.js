import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchCoinList,changePage } from './marketSlice';


const MarketView = () => {

    const dispatch=useDispatch();
    let coinListData = useSelector((state) => state.marketRReducer).coins;
    console.log("Buradaki data",coinListData);


    useEffect(()=>{
        dispatch(fetchCoinList());
    },[]);

  return (
    <div className='bg-purple-800'>
        {coinListData.loading && "fetching data"}
        {coinListData.error && "fetching error"}
        {coinListData.length>0 && 
            <div className='w-[80vw] mx-auto'>

              <div id='market' className='text-white text-4xl font-bold mb-[5vh]'>Market</div>

              <div className='flex justify-between text-white text-xl font-semibold px-[2vw] py-[3vh] bg-gradient-to-r from-indigo-900 to-indigo-500 rounded-t-2xl'>
                <p>Coin</p>
                <p className='md:visible invisible'>Price</p>
                <p className='ml-[20vw] md:[0vw]'>24h Change</p>
                <p className='md:visible invisible'>Market Cap</p>
              </div>

              <div>
                {coinListData.map((coin,key)=>(
                  <div className='h-[15vh] flex items-center justify-between border-b-2 border-white text-xl text-white font-medium hover:opacity-50' key={key}>

                    <div className='flex items-center gap-x-[1vw] md:w-[5vw] w-[25vw]'>
                      <img className='h-[10vh]' alt='not found' src={coin.image}/> 
                      <p>{coin.name}</p>
                    </div>
                    <div className='w-[10vw] md:visible invisible'>
                      $ {coin.current_price.toFixed(2)}
                    </div>
                    <div className='text-indigo-300 md:pl-[0vw] pl-[25vw]'>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className='md:visible invisible'>
                      $ {coin.market_cap}
                    </div>

                  </div>
                ))}
              </div>

              <div className='flex gap-x-[2vw]'>
                <div className='cursor-pointer'>1</div>
                <div className='cursor-pointer'>2</div>
                <div className='cursor-pointer'>3</div>
                <div className='cursor-pointer'>4</div>
                <div className='cursor-pointer'>5</div>
              </div>

            </div>
        }
    </div>
  )
}

export default MarketView