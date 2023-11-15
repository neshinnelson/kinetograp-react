import React, { useState } from 'react'
import addressFormCss from './AddressForm.module.css'

export default function AddressForm(props) {
    const[address,setAddress]=useState({})

    const generateAddress = (e)=>{
        setAddress({
            ...address,[e.target.name] : e.target.value
        })
    }

    // handle Submit
    const handleSubmmit = (e)=>{
        e.preventDefault()
        props.save(address)
    }
  return (
    <div className={addressFormCss.container}>

        <form onSubmit={handleSubmmit} className={addressFormCss.form}>
           <div className={addressFormCss.item}>
                <label htmlFor="firstName">First Name :</label>
                <input type="text" name="firstName" onChange={generateAddress}/>
           </div>

            <div className={addressFormCss.item}>
                <label htmlFor="secondName">second Name :</label>
                <input type="text" name="secondName" onChange={generateAddress}/>
            </div>

            <div className={addressFormCss.item}>
                <label htmlFor="email">email :</label>
                <input type="text" name="email" onChange={generateAddress}/>
            </div>

            <div className={addressFormCss.item}>
                <label htmlFor="phone">Phone :</label>
                <input type="text" name="phone" onChange={generateAddress}/>
            </div>

            <div className={addressFormCss.item}>
                <label htmlFor="address">Address :</label>
                <input type="text" name="address" onChange={generateAddress}/>
            </div>

            <button className='btn-bluegreen'>Save</button>
        </form>

    </div>
  )
}
