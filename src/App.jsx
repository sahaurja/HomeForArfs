import { Provider } from 'react-redux'
import './App.css'
import Register from './Components/Register'
import { Routes, Route } from "react-router-dom"
import appStore from './utilis/appStore'
import Browse from './Components/Browse'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Header from './Components/Header'
import AllBreeds from './Components/AllBreeds'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <Provider store={appStore}>
    <Header/>    
    <Routes>      
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/browse" element={<Browse/>}/>        
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/allbreeds" element={<AllBreeds/>}/>
      
    </Routes>
    <ToastContainer/>
    <Footer/>
   </Provider>
  )
}

export default App
