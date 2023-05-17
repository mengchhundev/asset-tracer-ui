import './App.css'
import {Route, Routes,} from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'
import SignInComponent from './components/Authentication/SignInComponent'
import DashboadComponent from './components/Authentication/dashboadComponent'
import TestingComponent from './components/Authentication/TestingComponent'
import Testformik from './components/testformik'

function App() {

  return (
    <>
      <Routes>
        <Route path='/testformik' element={<Testformik/>} />
        <Route path='/testing' element={<TestingComponent/>} />
        <Route path='/signup' element={<SignUpComponent/>}/>
        <Route path='/signin' element={<SignInComponent/>}/> 
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashboadComponent/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
