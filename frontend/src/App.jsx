import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; 
import './App.css'
import { useLocation, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/landingPage/TopNavbar';
import Navbar from './components/landingPage/Navbar';
import Home from './components/landingPage/Home';
import About from './components/landingPage/About';
import Services from './components/landingPage/Services';
import Property from './components/landingPage/Property';
import UserRegister from './components/landingPage/UserRegister';
import Footer from './components/landingPage/Footer';
import Login from './components/landingPage/Login';
import AddProperty from './components/admin/AddProperty';
import SoldProperty from './components/admin/SoldProperty';
import UserList from './components/admin/UserList';
import AdminProfile from './components/admin/AdminProfile';
import ContactUsInfo from './components/admin/ContactUsInfo';
import AdminLogout from './components/admin/AdminLogout';
import PropertyList from './components/admin/PropertyList';
import BoughtList from './components/user/BoughtList';
import EditProfile from './components/user/EditProfile';
import ContactUs from './components/landingPage/ContactUs'
import Aos from 'aos';
import NotFound from './NotFound';
import {useEffect,useState} from 'react';
import 'aos/dist/aos.css'

function App() {
  const location= useLocation()
  const [userData,setUserData]=useState(null);
  useEffect(()=>{
  const user=JSON.parse(localStorage.getItem('userInfo'));
  setUserData(user);
  },[location]);
 
  
  useEffect(()=>{
   Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
},[])



  return (
    <>
      <TopNavbar />
      <Routes>
          {/* landing page router */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/property' element={<Property />} />
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<Login />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          {/* admin Section  */}
         {userData?.userType=="admin" && <>
          <Route path='/admin-add' element={<AddProperty />} />
          <Route path='/admin-list' element={<PropertyList/>}/>
          <Route path='/admin-sold' element={<SoldProperty />} />
          <Route path='/admin-user' element={<UserList />} />
          <Route path='/admin-profile' element={<AdminProfile />} />
          <Route path='/admin-contact' element={<ContactUsInfo />} />

         </>}
          
          {/* User Route */}
          {userData?.userType=="user" && <>
          <Route path='/user-property' element={<Property />} />
          <Route path='/user-bought' element={<BoughtList/>} />
          <Route path='/user-profile' element={<EditProfile/>} />
            <Route path='/ContactUs' element={<ContactUs />} />
          </>}
         <Route path='*' element={<NotFound/>} />
        </Routes>
      
      <Footer/>
    </>
  )
}

export default App