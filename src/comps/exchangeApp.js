import React, { useState } from 'react'
import Input from './input'
import Output from './output'
import Date from './date';
export default function ExchangeApp(props) {

  const [res, setRes] = useState(0);
  const [coins, setCoins] = useState({});



  return (
    <div className='container '>
      <div className='w-75 mx-auto text-center'>
        <h1 className='title mt-5'>exchange currency</h1>
        <Input culc={setRes} scoin={setCoins} />
        <Output result={res} gcoin={coins}/>
        <Date />
      </div>
    </div>
  )
}
