
import React, { useEffect, useRef, useState } from 'react'
import { CgArrowsExchangeAltV } from "react-icons/cg"





export default function Input(props) {

    const { culc, scoin } = props;

    const [currencies, setCurrencies] = useState([]);
    const [conversion, setConversion] = useState();

    const [fromCurrency, setFromCurrency] = useState("ILS");
    const [toCurrency, setToCurrency] = useState("USD");

    const [currentFromAmount, setFromAmount] = useState(1);
    const [currentToAmount, setToAmount] = useState(1);

    const refInput1 = useRef();
    const refInput2 = useRef();

    const refcoin1 = useRef();
    const refcoin2 = useRef();

    const [swiched, setSwich] = useState(true);

    const coin1 = currencies.find(item => item.currency === fromCurrency);
    const coin2 = currencies.find(item => item.currency === toCurrency);



    useEffect(() => {
        doApi();
    }, [])

    useEffect(() => {
        if (currencies.length) {
            exchange();
        }
    }, [currencies,swiched])







    const exchange = () => {


        console.log("true");
        const conversion = (coin2.value / coin1.value) * refInput1.current.value;
        culc(conversion.toFixed(2));
        setToAmount(conversion);

        setConversion(conversion);
        const ref1= refInput1.current.value;
        const ref2= refInput2.current.value;

        scoin({ coin1: coin1.currency, coin2: coin2.currency, val1: ref1, val2: ref2 })
    }







    const doApi = async () => {
        try {
            let url = "https://api.currencyapi.com/v3/latest?apikey=AiCaR8kgVRBnYut5Y2gMtf4DobR2cAurnjKZnd47";
            let resp = await fetch(url);
            let data = await resp.json();
            console.log(data.data)
            let res = data.data;
            let temp_ar = [];
            for (let key in res) {

                temp_ar.push({ currency: key, value: res[key].value });
            }
            setCurrencies(temp_ar);
            // console.log("setCurrencies - done");

        }

        catch (err) {
            console.log(err);
            alert("Problem connection, please try again later");
            return err;
        }
    }



    const onChangeIn1 = (e) => {
        setFromAmount(e.target.value)
        exchange()
    }
    const onChangeSelect1 = (e) => {
        setFromCurrency(e.currentTarget.value)
        exchange()
    }
    const onChangeIn2 = (e) => {
        setToAmount(e.target.value)
        exchange()
    }
    const onChangeSelect2 = (e) => {
        setToCurrency(e.currentTarget.value)
        exchange()
    }






    const switchCurrencies = () => {
        console.log("swiched")
        setSwich(!swiched)
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromAmount(currentToAmount);
        setToAmount(currentFromAmount);

        console.log(swiched)
        exchange()
    }


    return (
        <div className='text-center mx-md-auto mt-5'>
            <div className='d-md-black mx-md-auto'>

                <div className='d-flex mx-md-auto justify-content-center'>

                    <input
                        ref={refInput1}
                        min={0}
                        onChange={(e) => { onChangeIn1(e) }}
                        value={currentFromAmount}
                        className='w-md-50 form-control shadow'
                        type="number"
                        placeholder='Enter coin value'
                    />
                    <select
                        ref={refcoin1}
                        onChange={(e) => { onChangeSelect1(e) }}
                        className=' mx-2 form-select  shadow'
                        value={fromCurrency}
                    >
                        {
                            currencies.map((item) => {
                                return (
                                    <option
                                        key={item.value}
                                        defaultValue={item.value === fromCurrency}
                                    >
                                        {
                                            item.currency
                                        }
                                    </option>
                                )
                            })}
                    </select>
                </div>

                <CgArrowsExchangeAltV onClick={switchCurrencies} className='my-5 text-danger swich' size={60} />


                <div className='d-flex justify-content-center'>

                    <input
                        ref={refInput2}
                        min={1}
                        onChange={(e) => { onChangeIn2(e) }}
                        defaultValue={1}
                        value={currentToAmount}
                        className='shadow w-md-50 form-control '
                        type="number"
                        placeholder='Enter coin value'
                    />

                    <select
                        ref={refcoin2}
                        onChange={(e) => { onChangeSelect2(e) }}
                        className=' mx-2 w-md-25 form-select dropdown-toggle shadow'
                        value={toCurrency}
                    >
                        {
                            currencies.map((item) => {
                                return (
                                    <option
                                        key={item.value}
                                        defaultValue={item.value === toCurrency}
                                    >
                                        {
                                            item.currency
                                        }
                                    </option>
                                )
                            })

                        }
                    </select>

                </div>

            </div>

        </div>
    )
}




