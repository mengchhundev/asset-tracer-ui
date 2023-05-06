import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomepageComponent from './components/HomepageComponent'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'
import SignInComponent from './components/Authentication/SignInComponent'

function App() {
  const [count, setCount] = useState(0)
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
     <Routes>
        <Route path='/signup' element={<SignUpComponent/>}/>
        <Route path='/signin' element={<SignInComponent/>}/>
        <Route element={<ProtectedRoute isLogged={false}/>}>

        </Route>
      </Routes>

    </>
  )
}

export default App
