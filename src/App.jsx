import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomepageComponent from './components/HomepageComponent'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'
import SignInComponent from './components/Authentication/SignInComponent'
import Forgotpassword from './components/Authentication/Forgotpassword'
import Resetpassword from './components/Authentication/Resetpassword'
import Emailsending from './components/Authentication/Emailsending'
import Successfully from './components/Authentication/Successfully'


function App() {
  const [count, setCount] = useState(0)
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
     <Routes>
        <Route path='/signup' element={<SignUpComponent/>}/>
        <Route path='/signin' element={<SignInComponent/>}/>
        <Route element={<ProtectedRoute isLogged={false}/>}/>
        <Route path='/forgot' element={<Forgotpassword/>}/>
        <Route path='/reset' element={<Resetpassword/>}/>
        <Route path='/email' element={<Emailsending/>}/>
        <Route path='/success' element={<Successfully/>}/>
      </Routes>

    </>
  )
}

export default App
