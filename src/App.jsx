
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WelcomePage from './Pages/WelcomePage/WelcomePage'
import RedirectPage from './Pages/RedirectPage/RedirectPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import SignInPage from './Pages/SignInPage/SignInPage'
import HomePage from './Pages/HomePage/HomePage'
import NavBarMain from './Components/NavBarMain/NavBarMain'
import MoviePage from './Pages/MoviePage/MoviePage'
import UserProfile from './Components/UserProfile/UserProfile'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'


function App() {
  const pathName = window.location.pathname

  return (
    <>
    <BrowserRouter>
    {pathName !== '/in' && pathName !== '/signup' && pathName !== '/signin' && pathName !== '/' && <NavBarMain/>}
      {/* <NavBarMain/> */}
      <Routes>
        <Route path='/' element={<RedirectPage/>}/>
        <Route path='/in' element={<WelcomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/browse' element={<HomePage/>}/>
        <Route path='/movies/:name' element={<MoviePage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/test' element={<NavBarMain/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
