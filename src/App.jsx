import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomepageComponent from './components/HomepageComponent'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'
import SignInComponent from './components/Authentication/SignInComponent'
import AboutpageComponent from './components/InsideComponent/AboutpageComponent'
import LandingComponent from './components/LandingComponent/LandingComponent'
import ContactusComponent from './components/InsideComponent/ContactusComponent'

function App() {
  const [count, setCount] = useState(0)
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
     <Routes>
        <Route path='/signup' element={<SignUpComponent/>}/>
        <Route path='/signin' element={<SignInComponent/>}/>
        <Route path='/about' element={<AboutpageComponent/>} />
        <Route path='/' element={<LandingComponent/>}/>
        <Route path='/contact' element={<ContactusComponent/>}/>
        <Route element={<ProtectedRoute isLogged={false}/>}>

        </Route>
       
      </Routes>

    </>
  )
}

export default App
