import React, { useEffect, useState } from 'react'
import userProfileCss from './user-profile.module.css'
import ContainerH90px from '../Containers/ContainerH90px/ContainerH90px'
import CartContainer from '../Containers/CartContainer/CartContainer'
import AddressContainer from '../Containers/AddressContainer/AddressContainer'
import { addToCart,removeFromCart } from '../../Redux/cart'
import {useDispatch, useSelector} from 'react-redux'
import { removeFromWishlist } from '../../Redux/wishlist'
import { useNavigate } from 'react-router-dom'

export default function UserProfile() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state=>(state.cart.cart))
  console.log(cart);
  const wishlist = useSelector(state=>(state.wishlist.wishlist))
  const[showCart,setShowCart]=useState(false)
  const[showWishlist,setShowWishlist]=useState(false)
  const[showOrders,setShowOrders]=useState(false)
  const[showAccount,setShowAccount]=useState(true)
  const[search,setSearch]=useState(window.location.search)
  const[searchQuery,setSearchQuery]=useState(new URLSearchParams(window.location.search))
  
  useEffect(()=>{
    const searchKey = searchQuery.get('show')
    console.log(searchKey);
    setSearch(searchKey)

  },[cart,wishlist])

console.log(searchQuery);

  //handle explore
  const handleExplore = (content)=>{

    if(content==='orders'){
    //  searchQuery.set('show','orders')
    nav('/profile?show=orders')
    }else if(content==='wishlist'){
      // setShowCart(false)
      // setShowOrders(false)
      // setShowWishlist(true)
      // setShowAccount(false)
      searchQuery.set('show','wishlist')
      setSearchQuery(new URLSearchParams(searchQuery.toString()));
      // nav('/profile?show=wishlist')
    }else if(content==='cart'){
      setShowCart(true)
      setShowOrders(false)
      setShowWishlist(false)
      setShowAccount(false)
    }else if(content=='account'){
      setShowCart(false)
      setShowOrders(false)
      setShowWishlist(false)
      setShowAccount(true)
    }
  }                                    
  return (
    <div className={userProfileCss.container}>

        {/* main container */}
        <div className={userProfileCss.main}>

            <ol className={userProfileCss.profile_nav + ' flex flex-col items-center justify-between'}>

                <li className={userProfileCss.profile_list}>
                    <ContainerH90px title={'Avatar'}
                                    img={'/icons/netflix.png'}
                                    style={' flex items-center justify-start'}
                                    styleImg={{padding:'5px',borderRadius:'50%',width:'45px',height:'45px'}}
                                    displayBtn={'none'}/>
                </li>
                <li className={userProfileCss.profile_list} onClick={()=>handleExplore('orders')}>
                    <ContainerH90px title={'My Orders'}
                                    img={'/icons/netflix.png'}
                                    style={' flex items-center justify-start'}
                                    styleImg={{padding:'5px',borderRadius:'50%',width:'45px',height:'45px'}}
                                    displayBtn={'none'}/> 
                </li>
                <li className={userProfileCss.profile_list} onClick={()=>handleExplore('cart')}>
                    <ContainerH90px title={'My Cart'}
                                    img={'/icons/netflix.png'}
                                    style={' flex items-center justify-start'}
                                    styleImg={{padding:'5px',borderRadius:'50%',width:'45px',height:'45px'}}
                                    displayBtn={'none'}/>
                </li>
                <li className={userProfileCss.profile_list} onClick={()=>handleExplore('wishlist')}>
                    <ContainerH90px title={'My Wishlist'}
                                    img={'/icons/netflix.png'}
                                    style={' flex items-center justify-start'}
                                    styleImg={{padding:'5px',borderRadius:'50%',width:'45px',height:'45px'}}
                                    displayBtn={'none'}/>
                </li>
                
                <li className={userProfileCss.profile_list} onClick={()=>handleExplore('account')}>
                    <ContainerH90px title={'My Account'}
                                    img={'/icons/netflix.png'}
                                    style={' flex items-center justify-start'}
                                    styleImg={{padding:'5px',borderRadius:'50%',width:'45px',height:'45px'}}
                                    displayBtn={'none'}/>
                </li>
            </ol>

            <div className={userProfileCss.explore}>
              {
                search==='orders' &&
                <CartContainer array={cart}
                  title={'My Orders'}
                  total={`total: ${599}`}
                  btnName={'Checkout'}
                  remove={()=>dispatch(removeFromCart('action'))}/>
              }

              {
                search==='wishlist' &&
                <CartContainer array={wishlist}
                  title={'Wishlist'}
                  total={`total: ${499}`}
                  btnName={'Add to cart'}
                  remove={removeFromWishlist}/> 
              }  

              {
                search==='cart' &&
                <CartContainer array={cart}
                  title={'Cart'}
                  total={`total: ${599}`}
                  btnName={'Checkout '}
                  remove={removeFromCart}/>
              }    
              
              {
                search==='account' &&
                <AddressContainer/>
              }
            </div>

        </div>
    </div>
  )
}
