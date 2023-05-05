import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomepageComponent from './components/HomepageComponent'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'

function App() {
  const [count, setCount] = useState(0)
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
     <Routes>
        <Route path='/' element={<SignUpComponent/>}/>
        <Route element={<ProtectedRoute isLogged={false}/>}>

        </Route>
      </Routes>

    </>
  )
}

export default App
