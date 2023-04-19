import logo from './logo.svg';
import './App.css';
import './Footer.css';
import React,{Component} from 'react'
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import {Routes, Route, Router} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
//import PrivateRoute from './PrivateRoute';
import Logout from './components/Logout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


//import {BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const navigate =  useNavigate ()
  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);



  return (
    <>

        <Navbar auth={auth}/>
        
        
        <Routes>
          <Route  exact path="/" element={<Home/>} />
          <Route  exact path ="/about" element={<About/>}  />
          <Route  exact path ="/services" element={<Services/>}/>
          <Route  exact path ="/contacts" element={<Contacts/>}/>
          

          <Route  exact path ="/login" element={<Login/>} auth={auth}/>
          <Route  exact path ="/register" element={<Register/>} auth={auth}/>
          
          <Route  exact path ="/dashboard" element={<Dashboard/>} auth={auth1}/>
          <Route  exact path ="/logout" element={<Logout/>} auth={auth1}/>
          
        </Routes>
        <Footer/>

    </>
  );
}

export default App;