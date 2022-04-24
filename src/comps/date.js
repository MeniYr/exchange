import React, { useEffect, useState } from 'react'

export default function Dates(props) {
    const [date, setDate] = useState("5/4/22");
    const [time, setTime] = useState(`00:55:05`);
    const [seconds, setSeconds] = useState(0);
    const newDate = new Date()
    // .getMonth(); 
    // let createDate = 
    // console.log(createDate);
    //  setDate()
    // let dateObj = new Date();
    // let month = dateObj.getUTCMonth() + 1; //months from 1-12
    // let day = dateObj.getUTCDate();
    // let year = dateObj.getUTCFullYear();
    //  let a = Date();


    useEffect(() => {
        
        dates();
        
        const interval = setInterval(() => {
            setSeconds(newDate.getSeconds());
        }, 1000);
        return () => clearInterval(interval);
        
    }, [date, time,seconds])
    
    const dates = () => {
        // setDate(Date().getMonth().toLocaleString())
        // console.log(date)
        setDate(newDate.getDate() + " / " + (newDate.getMonth() + 1) + " / " + newDate.getFullYear());
        setTime(newDate.getHours() + ":" + newDate.getMinutes() + ":" + seconds);
    }



    return (
        <div className='mt-5 mx-auto'>
            <h1 className='text-danger'>{date}</h1>
            <h1 className='text-danger'> {time}</h1>

        </div>
    )
}
