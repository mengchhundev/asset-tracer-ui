import './App.css'
import {Route, Routes,} from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'
import SignInComponent from './components/Authentication/SignInComponent'
import DashboadComponent from './components/Authentication/dashboadComponent'

function App() {

  return (
    <>
      <Routes>
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
