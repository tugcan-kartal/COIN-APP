import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchCoinList,changePage } from './marketSlice';


const MarketView = () => {

    const dispatch=useDispatch();
    let coinListData = useSelector((state) => state.marketRReducer);
    console.log("Buradaki data",coinListData);

    useEffect(()=>{
        dispatch(fetchCoinList());
    },[]);

  return (
    <div>
        {coinListData.loading && "fetching data"}
        {coinListData.error && "fetching error"}
        {coinListData.length>0 && 
            <div>
                
            </div>
        }
    </div>
  )
}

export default MarketView