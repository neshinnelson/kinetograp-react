import React, { useState } from 'react'
import './signup-page.css'
import batman_img from '/images/batman.jpeg'
import site_icon from '/kinetograph.png'
import WarningPara from '../../Components/WarningPara/WarningPara'
import Loading from '../../Components/Loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { userReg} from '../../Redux/users'
import { useDispatch } from 'react-redux'

export default function SignUpPage() {
    const nav = useNavigate()
    const[user,setUser]=useState({
        firstName:'',
        secondName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const dispatch = useDispatch()
    const[showWarning,setShowWarning]=useState(false)
    const[warning,setWarning]=useState({borderBottom:'2px solid red'})
    const[noMatch,setNoMatch]=useState(false)
    const[loading,setLoading]=useState(false)

    //handle user data
    const handleUser = async(event)=>{
        setUser({...user,
            [event.target.name] : event.target.value
        })
    }

    //handle submit
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true)

        if(!user.email || !user.password){
            setLoading(false)
            setShowWarning(true)
        }else if(user.email.length>10 || user.password.length>8){
            setShowWarning(false)

            if(user.password !== user.confirmPassword){
                setLoading(false)
                setNoMatch(true)
            }else{
                setNoMatch(false)
                delete user.confirmPassword
                dispatch(userReg(user))
                    setLoading(false)
                    nav('/signin')
            }
        }else{
            setLoading(false)
            setShowWarning(true)
        }
    }

  return (
    <div className='signup-page'
         style={{backgroundImage:`url(${batman_img})`}}>

        <div className="signup-page-container">

            {/* div displays site name */}
            <div className="signup-page-site-icon">
                <img src={site_icon} alt="site icon" />
            </div>

            {/* div displays registration form */}
            <div className="user-signup flex-center-column">

                <form className='flex flex-col gap-2' onSubmit={(e)=>handleSubmit(e)}>
                    <h2>Sign Up</h2>
                    <div className="label-input flex-start-column">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName' 
                               onChange={handleUser}
                               style={showWarning ? warning : {}}
                               value={user.firstName}
                               />
                    </div>

                    <div className="label-input flex-start-column">
                        <label htmlFor="secondName">Second Name</label>
                        <input type="text" name='secondName' 
                               onChange={handleUser}
                               style={showWarning ? warning : {}}
                               value={user.secondName}
                               />
                    </div>

                    <div className="label-input flex-start-column">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email'
                               onChange={handleUser}
                               style={showWarning ? warning : {}}
                               value={user.email}
                               />
                        {showWarning && <WarningPara content={'enter a valid email.'}/>}
                    </div>

                    <div className="label-input flex-start-column">
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password'
                               onChange={handleUser}
                               style={showWarning ? warning : {}}
                               value={user.password}
                               />
                        {showWarning && <WarningPara content={'password should contain 1 capital, 1 small, special charecter,numbers.'}/>}
                    </div>

                    <div className="label-input flex-start-column">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="text" name='confirmPassword' 
                               onChange={handleUser}
                               style={showWarning ? warning : {}}
                               value={user.confirmPassword}/>
                        {noMatch && <WarningPara content={"pasword doesn't match"}/>}
                    </div>

                    <button className="btn-offwhite width100">SignUp</button>
                    <p>Already have an account?  <Link to={'/signin'}>sign in</Link></p>
                </form>

            </div>
            {loading && <Loading/>}
            <Footer/>
        </div>
    </div>
  )
}
