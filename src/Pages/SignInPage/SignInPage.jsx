import React, { useState } from 'react'
import './signin-page.css'
import batman_img from '/images/batman.jpeg'
import site_icon from '/kinetograph.png'
import WarningPara from '../../Components/WarningPara/WarningPara'
import { userLogin} from '.'
import Loading from '../../Components/Loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { loginUser } from '../../Redux/users'
import { useDispatch, useSelector } from 'react-redux'

export default function SignInPage() {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const isLogedIn = useSelector((state)=>state.users.isLogedIn)
    const[user,setUser]=useState({
        email:'',
        password:'',
    })
    const[showWarning,setShowWarning]=useState(false)
    const[warning,setWarning]=useState({borderBottom:'2px solid red'})
    const[loading,setLoading]=useState(false)

    //handle user data
    const handleUser = async(event)=>{
        setUser({...user,
            [event.target.name] : event.target.value
        })
    }
    // console.log(user);

    //handle submit
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true)

        if(!user.email || !user.password){
            setLoading(false)
            setShowWarning(true)
        }else if(!user.email.length>10 || !user.password.length>8){
            console.log('this');
            setLoading(false)
            setShowWarning(true)
        }else{
            setShowWarning(false)
            dispatch(loginUser(user))
            if(isLogedIn) {
                setLoading(false)
                nav('/browse')
                alert('user loged in')
            } 
            else{
                setShowWarning(true)
                alert('failed')
                setLoading(false)
            }
        }    
    }
  return (
    <div className='signin-page'
         style={{backgroundImage:`url(${batman_img})`}}>

        <div className="signin-page-container">

            {/* div displays site name */}
            <div className="signin-page-site-icon">
                <img src={site_icon} alt="site icon" />
            </div>

            {/* div displays registration form */}
            <div className="user-signin flex-center-column">

                <form className='flex-column-start-sp-between' onSubmit={(e)=>handleSubmit(e)}>
                    <h2>Sign In</h2>
                    <div className="label-input flex-start-column">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email'
                               onChange={(e)=>handleUser(e)}
                               style={showWarning ? warning :{}}
                               value={user.email}/>
                        {showWarning && <WarningPara content={'enter a valid email.'}/>}
                    </div>

                    <div className="label-input flex-start-column">
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password'
                               onChange={(e)=>handleUser(e)}
                               style={showWarning ? warning :{}}
                               value={user.password}/>
                        {showWarning && <WarningPara content={'wrong password.'}/>}
                    </div>

                    <button className="btn-offwhite">Sign In</button>

                    <p>Don't have an account? <Link to={'/signup'}>sign up</Link></p>
                </form>

            </div>
            {loading && <Loading/>}
            <Footer/>
        </div>
        
    </div>
  )
}
