import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from './heroSlice';

const HeroView = () => {

  const dispatch=useDispatch();
  let coinData=useSelector((state)=>state.heroReducer).coins;
  console.log(coinData);

  useEffect(()=>{
    dispatch(fetchCoins());
  },[])

  return (
    
    <div className='h-[90vh]'>

      {coinData.loading && "fetching data"}
      {coinData.error && "fetching error"}
      {coinData.length>0 &&
      
        <div>

          <div>
            <p>TRACK AND TRADE</p>
            <p>CRYPTO CURRENCIES</p>
          </div>

          <div>
            <div> <img alt='not found' src={coinData[0].image}/> </div>
            <div>     
              <div>{coinData[0].name}</div>
              <div>{coinData[0].price_change_percentage_24h.toFixed(2)}%</div>
            </div>
            <div>${coinData[0].current_price}</div>
          </div>


        </div>

      }

    </div>
  )
}

export default HeroView