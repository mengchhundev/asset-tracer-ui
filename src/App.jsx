import './App.css'
import { Route, Routes, useLocation, } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUpComponent from './components/Authentication/SignUpComponent'
import SignInComponent from './components/Authentication/SignInComponent'
import ForgotPasswordComponent from './components/Authentication/ForgotPasswordComponent'
import SuccessComponent from './components/Authentication/SuccessComponent'
import MainComponent from './components/Layouts/MainComponent'
import OrganizationListComponent from './components/admin/organization/OrganizationListComponent'
import OrganzationCreateOrJoinComponent from './components/admin/organization/OrganzationCreateOrJoinComponent'
import SuperCategoryComponent from './components/admin/superCategory/SuperCategoryComponent'
import NormalCategoryComponent from './components/admin/normalCategory/NormalCategoryComponent'
import UsersAllComponent from './components/admin/user/UsersAllComponent'
import DashboardComponent from './components/admin/dashboard/DashboardComponent'
import AssetComponent from './components/admin/asset/AssetComponent'
import InvoiceComponent from './components/admin/invoice/InvoiceComponent'
import ProfileComponent from './components/admin/profile/ProfileComponent'
import RoomListComponent from './components/admin/Room/RoomListComponent'
import HomeComponent from './components/homepage/HomeComponent'
import ContactComponent from './components/homepage/ContactComponent'
import AboutPageComponent from './components/homepage/AboutPageComponent'
import EmailSendingComponent from './components/Authentication/EmailSendingComponent'
import ResetPasswordComponent from './components/Authentication/ResetPasswordComponent'
import ViewInvoiceComponent from './components/admin/invoice/ViewInvoiceComponent'
import UpdateInvoiceComponent from './components/admin/invoice/UpdateInvoiceComponent'
import TrackingComponent from './components/admin/tracking/TrackingComponent'
import UserRequestComponent from './components/admin/user/UserRequestComponent'
import AssetAddComponent from './components/admin/asset/AssetAddComponent'
import AssetUpdate from './components/admin/asset/AssetUpdate'
import NotFoundPageComponent from './components/admin/notFoundPage/NotFoundPageComponent'
import NotificationComponent from './components/admin/notification/NotificationComponent'
import { useLayoutEffect } from 'react'

function App() {
   const {pathname}= useLocation();

   useLayoutEffect(()=>{
    window.scrollTo({top:0, behavior:"auto"});
   },[pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/contact' element={<ContactComponent />} />
        <Route path='/about' element={<AboutPageComponent />} />
        <Route path='/signup' element={<SignUpComponent />} />
        <Route path='/signin' element={<SignInComponent />} />
        <Route path='/forgot-password' element={<ForgotPasswordComponent />} />
        <Route path='/email-sending' element={<EmailSendingComponent />} />
        <Route path='/reset-password' element={<ResetPasswordComponent />} />
        <Route path='/success' element={<SuccessComponent />} />
        <Route path='*' element={<NotFoundPageComponent/>}/>
        <Route element={<ProtectedRoute isLogged={localStorage.getItem("token") ? true : false} />}>
          <Route path="/" element={<MainComponent />}>
            <Route path='/organization' element={<OrganizationListComponent />} />
            <Route path='/organization-create' element={<OrganzationCreateOrJoinComponent />} />
            <Route path='/dashboard' element={<DashboardComponent />} />
            <Route path='/super-category' element={<SuperCategoryComponent />} />
            <Route path='/normal-category' element={<NormalCategoryComponent />} />
            <Route path='/invoice' element={<InvoiceComponent />} />
            <Route path='/view-invoice' element={<ViewInvoiceComponent />} />
            <Route path='/update-invoice' element={<UpdateInvoiceComponent />} />

            {/* asset page */}
            <Route path='/asset' element={<AssetComponent />}></Route>
            <Route path='/asset/add' element={<AssetAddComponent/>}></Route>
            <Route path='/asset/update' element={<AssetUpdate />} />

            <Route path='/tracking' element={<TrackingComponent />}></Route>
            <Route path='/user' element={<UsersAllComponent />}></Route>
            <Route path='/request' element={<UserRequestComponent />}></Route>
            <Route path='/user-request' element={<UserRequestComponent />}></Route>
            <Route path='/profile' element={<ProfileComponent />} />
            <Route path='/room' element={<RoomListComponent />}></Route>
            
            <Route path='/notification' element={<NotificationComponent/>}/>
            
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
