import React from 'react';
import {FaWallet,FaPencilRuler,FaSatelliteDish,FaChessKnight} from "react-icons/fa";
import {AiFillThunderbolt} from "react-icons/ai";
import {HiCollection} from "react-icons/hi";
import BitcoinIcon from "../static/undraw_bitcoin_re_urgq.svg";

const WhyChooseUs = () => {
  return (
    <div className='bg-purple-800 pt-[5vh]'>

        <div className='text-white text-center text-4xl font-bold mb-[5vw]'>
            <span>WHY</span>
            <span className='text-indigo-500 mx-[1vw]'>CHOOSE US</span>
        </div>

        <div className='flex justify-between text-white mx-[1vw]'>

            <div className='flex flex-col gap-y-[5vh]'> 

                <div className='flex bg-purple-700 h-[20vh] border-2 border-gray-500 rounded-3xl gap-x-[2vw]'>
                    <div className='bg-indigo-500 my-auto ml-[1vw] h-[10vh] p-5 rounded-full text-4xl'><FaWallet /></div>
                    <div className='my-auto'>
                        <div className='text-xl font-bold mt-[1vh] mb-[1vh]'>CONNECT YOUR WALLET</div>
                        <div className='text-lg font-medium'>Use Trust Wallet, Metamask or to connect to the app.</div>
                    </div>
                </div>

                <div className='flex bg-purple-700 h-[20vh] border-2 border-gray-500 rounded-3xl gap-x-[2vw]'>
                    <div className='bg-indigo-500 my-auto ml-[1vw] h-[10vh] p-5 rounded-full text-4xl'><FaPencilRuler /></div>
                    <div className='my-auto'>
                        <div className='text-xl font-bold mt-[1vh] mb-[1vh]'>SELECT YOUR QUANTITY</div>
                        <div className='text-lg font-medium'>Upload your crypto and set a title, description and price.</div>
                    </div>
                </div>

                <div className='flex bg-purple-700 h-[20vh] border-2 border-gray-500 rounded-3xl gap-x-[2vw]'>
                    <div className='bg-indigo-500 my-auto ml-[1vw] h-[10vh] p-5 rounded-full text-4xl'><AiFillThunderbolt /></div>
                    <div className='my-auto'>
                        <div className='text-xl font-bold mt-[1vh] mb-[1vh]'>CONFIRM TRANSACTION</div>
                        <div className='text-lg font-medium'>Earn by selling your crypto on our marketplace.</div>
                    </div>
                </div>

            </div>

            <div>
                <img className='w-[40vw] h-[60vh] my-auto' src={BitcoinIcon} alt="not found" />
            </div>

            <div className='flex flex-col gap-y-[5vh]'>
                
                <div className='flex bg-purple-700 h-[20vh] border-2 border-gray-500 rounded-3xl gap-x-[2vw]'>
                    <div className='bg-indigo-500 my-auto ml-[1vw] h-[10vh] p-5 rounded-full text-4xl'><FaSatelliteDish /></div>
                    <div className='my-auto'>
                        <div className='text-xl font-bold mt-[1vh] mb-[1vh]'>CONNECT YOUR WALLET</div>
                        <div className='text-lg font-medium'>Use Trust Wallet, Metamask or to connect to the app.</div>
                    </div>
                </div>

                <div className='flex bg-purple-700 h-[20vh] border-2 border-gray-500 rounded-3xl gap-x-[2vw]'>
                    <div className='bg-indigo-500 my-auto ml-[1vw] h-[10vh] p-5 rounded-full text-4xl'><FaChessKnight /></div>
                    <div className='my-auto'>
                        <div className='text-xl font-bold mt-[1vh] mb-[1vh]'>CONNECT YOUR WALLET</div>
                        <div className='text-lg font-medium'>Use Trust Wallet, Metamask or to connect to the app.</div>
                    </div>
                </div>

                <div className='flex bg-purple-700 h-[20vh] border-2 border-gray-500 rounded-3xl gap-x-[2vw]'>
                    <div className='bg-indigo-500 my-auto ml-[1vw] h-[10vh] p-5 rounded-full text-4xl'><HiCollection /></div>
                    <div className='my-auto'>
                        <div className='text-xl font-bold mt-[1vh] mb-[1vh]'>CONNECT YOUR WALLET</div>
                        <div className='text-lg font-medium'>Use Trust Wallet, Metamask or to connect to the app.</div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default WhyChooseUs