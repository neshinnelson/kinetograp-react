import React, { useState } from 'react'
import paymentCss from './Payment.module.css'
import { useNavigate } from 'react-router-dom'

export default function Payment(props) {
    const nav = useNavigate()
    const[modeOfPayment,setModeOfPayment]=useState('UPI')
    const[transactionId,setTransactionId]=useState('')

    // handle mode of payment
    const handleMode = (mode)=>{
        setModeOfPayment(mode)
    }

    //handle transaction
    const handleTransaction = (e)=>{
        setTransactionId(e.target.value)
    }

    //handle payment
    const handlePay = ()=>{
        console.log(transactionId);
        if(transactionId.length>5){
            alert('order confirmed will be delivered in 5 - 10 business days')
            nav('/browse')
        }
    }
  return (
    <div className={paymentCss.container + ' flex items-center justify-center'} >
        <img src="/icons/close.png" alt="close payment" onClick={props.close}/>

        <div className={paymentCss.main + ' flex flex-col items-center justify-between'}>
            <p>Select mode of Payment</p>

            {/* select modes of payment */}
            <div className={paymentCss.modes+ ' flex items-center justify-between'}>
                <ul className=' flex items-center justify-between p-2'>
                    <li onClick={()=>handleMode('UPI ID')}>UPI payment</li>
                    <li onClick={()=>handleMode('Debit Card Number')}>Debit Card</li>
                    <li onClick={()=>handleMode('Credit Card Number')}>Credit Card</li>
                </ul>
            </div>
            <div className={paymentCss.upi+' flex flex-col items-center justify-between gap-2 p-10'}>
                <p className={paymentCss.warning}>*Warning do not refresh the page </p>
                <div className={paymentCss.price_container+' flex items-center justify-between'}>
                    <p>Product Total :</p>
                    <p>{props.total}</p>
                </div>
                <div className={paymentCss.price_container+' flex items-center justify-between'}>
                    <p>Tax :</p>
                    <p>10</p>
                </div>
                <div className={paymentCss.price_container+' flex items-center justify-between'}>
                    <p>Subtotal :</p>
                    <p> {props.total+10}</p>
                </div>
                
                <div className={'flex flex-col items-center justify-between'}>
                    <label htmlFor="upiId">{modeOfPayment}</label>
                    <input type="text" name="upiId" onChange={(e)=>handleTransaction(e)}/>
                </div>
                <button className="btn-offwhite" onClick={handlePay}>Pay</button>
                
            </div>

        </div>

    </div>
  )
}
