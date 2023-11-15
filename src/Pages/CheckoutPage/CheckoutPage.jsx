import React,{useEffect, useState} from 'react'
import CheckoutPageCss from './CheckoutPage.module.css'
import ContainerH90px from '../../Components/Containers/ContainerH90px/ContainerH90px'
import AddressForm from '../../Components/AddressForm/AddressForm'
import { useDispatch,useSelector } from 'react-redux'
import {updateAddress} from '../../Redux/users'
import { testFn } from '../../Redux/test'
import Payment from '../../Components/Payment/Payment'
import { useNavigate } from 'react-router-dom'

export default function CheckoutPage() {
    const dispatch = useDispatch()
    const checkout = useSelector((state)=>(state.checkout.checkout))
    const[checkoutTotal,setCheckoutTotal]=useState(0)
    const[address,setAddress]=useState('')
    const containerStyle = ' flex items-center justify-between '
    const[searchQuery,setSearchQuery]=useState(new URLSearchParams(window.location.search))
    const[searchKey,setSearchKey]=useState('')
    const nav =useNavigate()
    const[showPayment,setShowPayment]=useState(false)


    useEffect(()=>{
      const total = checkout.length>0 && checkout.reduce((val,mov)=>mov.price + val,0)
      setCheckoutTotal(total)
    },[])

    //handle address
    const handleAddress = (address)=>{
        const confirmAddress = window.confirm(`confirm address ${address}`)
        if(confirmAddress){
          alert('delivery address saved')
          setAddress(address)
        }
      dispatch(updateAddress(address))
    }
    //route to payment
    const handleRouteToPayment =()=>{
      console.log(address);
      if(address.length<1) return alert('no address found')
      if(checkout.length<1) return alert('please add movie to checkout')
      alert('working')
      nav('/checkout?show=payment')
      setShowPayment(!showPayment)
    }

  return (
    <div className={CheckoutPageCss.container}>

        <div className={CheckoutPageCss.main}>

            <h5 className='flex items-center pl-10'>Checkout</h5>
            <h5 className='flex items-center pl-10'>Address</h5>

            <div className={CheckoutPageCss.items}>
                {checkout.length > 0 ?
                 checkout.map(item=>(
                    <ContainerH90px 
                        key={item.id}
                        img={item.portraitImg}
                        title={item.name}
                        category={item.category}
                        price={item.price}
                        date={item.date}
                        style={containerStyle}/>
                 ))
                :
                <p>Add items to checkout</p>
                }
                
            </div>
            <div className={CheckoutPageCss.address}>
                <AddressForm save={handleAddress}/>
            </div>

            <div className={CheckoutPageCss.footer + ' flex items-center justify-end gap-5'}>
                <p>total:{checkoutTotal}</p>
                <button className='btn-bluegreen' onClick={handleRouteToPayment}>Buy</button>
            </div>

        </div>
        {window.location.search === '?show=payment' && <Payment total={checkoutTotal} mode={'UPI'} close={()=>nav('/checkout')}/>} 
        
    </div>
  )
}
