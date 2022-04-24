import React from 'react'
import { FaExchangeAlt } from "react-icons/fa"
export default function Output(props) {

  const {result,gcoin} = props;
  console.log(gcoin)
  let val1=Number(gcoin.val1).toFixed(2);
  return (
    <div className='mt-5'>
      {

        <h1>   {val1} {gcoin.coin1} <FaExchangeAlt/> {gcoin.coin2} => {result}</h1>
             
      }

    </div>
  )
}
