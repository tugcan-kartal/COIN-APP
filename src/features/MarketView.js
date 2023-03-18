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

              <div className='text-white text-4xl font-bold mb-[5vh]'>Market</div>

              <div className='flex justify-between text-white text-xl font-semibold py-[3vh] bg-gradient-to-r from-indigo-900 to-indigo-500 rounded-t-2xl'>
                <p>Coin</p>
                <p>Price</p>
                <p>24h Change</p>
                <p>Market Cap</p>
              </div>

              <div>
                {coinListData.map((coin,key)=>(
                  <div className='h-[15vh] flex items-center justify-between border-b-2 border-white text-xl text-white font-medium hover:opacity-50' key={key}>

                    <div className='flex items-center gap-x-[1vw] w-[5vw]'>
                      <img className='h-[10vh]' alt='not found' src={coin.image}/> 
                      <p>{coin.name}</p>
                    </div>
                    <div className='w-[10vw]'>
                      $ {coin.current_price.toFixed(2)}
                    </div>
                    <div className='text-indigo-300'>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div>
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