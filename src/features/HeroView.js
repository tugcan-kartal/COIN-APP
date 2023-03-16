import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from './heroSlice';

const HeroView = () => {

  const dispatch=useDispatch();
  let coinData=useSelector((state)=>state.heroReducer);
  console.log(coinData.coins);

  useEffect(()=>{
    dispatch(fetchCoins());
  },[])

  return (
    <div>
      
    </div>
  )
}

export default HeroView