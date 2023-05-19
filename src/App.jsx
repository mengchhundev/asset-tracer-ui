import './App.css'
import {Route, Routes,} from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'
import SignInComponent from './components/Authentication/SignInComponent'
import DashboardComponent from './components/DashboardComponent'
import MainComponent from './components/Layouts/MainComponent'
import HomeComponent from './pages/HomeComponent'
import CategoryComponent from './pages/category/CategoryComponent'
import TrackingComponent from './pages/tracking/TrackingComponent'
import ListComponent from './pages/superCategory/ListComponent'
import LandingComponent from './components/landingComponent/LandingComponent'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingComponent/>}/>
        <Route path='/signup' element={<SignUpComponent />} />
        <Route path='/signin' element={<SignInComponent />} />
        <Route path="/" element={<MainComponent />}>
            <Route path='/dashboard' element={<HomeComponent/>} />
            <Route path='/category' element={<CategoryComponent/>} />
            <Route path='/super-category' element={<ListComponent/>} />
            <Route path='/tracking' element={<TrackingComponent/>}></Route>
        </Route>
        <Route element={<ProtectedRoute isLogged={false} />}>

        </Route>
       
      </Routes>
    </>
  );
}

export default App;
