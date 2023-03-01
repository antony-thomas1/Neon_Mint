import { Web3Button, useAddress } from "@thirdweb-dev/react";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from 'next/head'

export default function Home() {

  const [amountToClaim, setAmountToClaim] = useState('');
  const address = useAddress();

  return (
    
    <div className="bg-[#022732]">
    <Head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/thunder.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Neon Mint</title>
    </Head>
      <nav className="relative bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10 ">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="flex">
                <span className="sr-only">Neon Mint</span>
                <img
                  src="/thunder.png"
                  className="h-8 w-auto sm:h-10"
                  alt="logo"
                />
                <span className=" text-white text-[22px] font-noto font-bold">NON Mint</span>
              </a>
            </div>

            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a 
              href="https://thirdweb.com/0xCcd15EB88c6a6eAbB0FBd9Dc418dCc9ad6d61A48/Contract/1.0.0"
              className="text-white text-[18px] font-noto font-bold ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-[10px] bg-[#5204BF] py-3 px-4">
                Token Contract
              </a>
            </div>

          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <img src='/thunder.png' height={180} width={180}/>
        <h1 className='font-noto font-bold text-white text-[100px]'>
          NEON Mint
        </h1>

        <p className='font-epilogue font-bold text-white text-[30px] pt-[20px]'>
          Mint your NON voting tokens!
        </p>

        <div className='flex p-10 gap-[20px]'>
        <input
          type="number"
          placeholder="Enter number of tokens"
          onChange={(e) => 
           setAmountToClaim(e.target.value)
          }
           className='font-noto font-normal text-[18px] bg-transparent p-[8px] border-[1px] rounded-[10px] placeholder:text-[#646464] text-white'
        />
        <Web3Button
          accentColor="#5204BF"
          colorMode="dark"
          contractAddress="0xF2d7e01272Aa8A11be7DD2bcC1fd479E8659b708"
          action={(contract) => contract.call("mintTo", address, amountToClaim)}
          onSuccess={() => alert("Success!")}
          onError={(err) => alert(err)}
        >
          Mint Tokens
        </Web3Button>
      </div>

      </main>

      <div className='w-full h-[200px] bg-transparent flex sm:flex-row flex-col justify-between  items-center px-10 mt-[10px] '>
        <div className='flex justify-center items-center bg-transparent'>
          <img src='/sign.png' alt='sign' className=' object-contain' width={200} height={190} />
        </div>

        <div className='flex flex-col justify-center items-center text-center'>
          <h4 className='font-noto font-normal text-white text-[20px]'>Contact:</h4>
          <h4 className='font-noto font-normal text-white text-[20px] '>antonythomas@tutanota.com</h4>
        </div>

        <div className='flex justify-center items-center text-center'>
          <h4 className='font-noto font-normal text-white text-[20px]'>All Rights Reserved</h4>
        </div>
      </div>

    </div>
  );
}
