import './App.css'
import { Route, Routes, } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'
import SignInComponent from './components/Authentication/SignInComponent'
import TrackingComponent from './pages/tracking/TrackingComponent'
import ListComponent from './pages/superCategory/ListComponent'
import Forgotpassword from './components/Authentication/Forgotpassword'
import EmailsendingComponent from './components/Authentication/EmailsendingComponent'
import ResetpasswordComponent from './components/Authentication/ResetpasswordComponent'
import SuccessComponent from './components/Authentication/SuccessComponent'
import HomeComponent from './components/homepage/HomeComponent'
import AboutPageComponent from './components/homepage/AboutPageComponent'
import ContactUsComponent from './components/homepage/ContactUsComponent'
import ContactusComponent from './components/InsideComponent/ContactusComponent'
import MainComponent from './components/Layouts/MainComponent'
import OrganizationListComponent from './components/admin/organization/OrganizationListComponent'
import OrganzationCreateOrJoinComponent from './components/admin/organization/OrganzationCreateOrJoinComponent'
import SuperCategoryComponent from './components/admin/superCategory/SuperCategoryComponent'
import NormalCategoryComponent from './components/admin/normalCategory/NormalCategoryComponent'
import UsersAllComponent from './components/admin/user/UsersAllComponent'
import DashboardComponent from './components/admin/dashboard/DashboardComponent'
import AssetComponent from './components/admin/asset/AssetComponent'
import InvoiceComponent from './components/admin/invoice/InvoiceComponent'
import AboutpageComponent from './components/InsideComponent/AboutpageComponent'
import ProfileComponent from './components/admin/profile/ProfileComponent'
// import ProfileComponent from './components/homepage/ProfileComponent'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/about' element={<AboutpageComponent />} />
        <Route path='/contact' element={<ContactUsComponent />} />
        <Route path='/signup' element={<SignUpComponent />} />
        <Route path='/signin' element={<SignInComponent />} />
        <Route path='/forget-password' element={<Forgotpassword />} />
        <Route path='/email-sending' element={<EmailsendingComponent />} />
        <Route path='/reset-password' element={<ResetpasswordComponent />} />
        <Route path='/success' element={<SuccessComponent />} />
        {/* <Route path='/profile' element={<ProfileComponent/>}/> */}
        <Route element={<ProtectedRoute isLogged={true} />}>
          <Route path="/" element={<MainComponent />}>
            <Route path='/organization' element={<OrganizationListComponent />} />
            <Route path='/organization-create' element={<OrganzationCreateOrJoinComponent />} />
            <Route path='/dashboard' element={<DashboardComponent />} />
            <Route path='/super-category' element={<SuperCategoryComponent />} />
            <Route path='/normal-category' element={<NormalCategoryComponent />} />
            <Route path='/invoice' element={<InvoiceComponent />} />
            <Route path='/asset' element={<AssetComponent />}></Route>
            <Route path='/tracking' element={<TrackingComponent />}></Route>
            <Route path='/user' element={<UsersAllComponent />}></Route>
            <Route path='/profile' element={<ProfileComponent/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
