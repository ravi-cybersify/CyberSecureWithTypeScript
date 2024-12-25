import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/lib/Navbar.tsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/lib/Footer.tsx';
import SimilarFooter from "./components/lib/SimilarFooter.tsx";
import { ToastContainer } from "react-toastify";
const Home = lazy(()=> import('./components/section/Home.tsx'))
const Services = lazy(()=> import('./components/section/Services.tsx'))
const About = lazy(()=> import('./components/section/About.tsx'))
const Contact = lazy(()=> import('./components/section/Contact.tsx'))
const Login = lazy(()=> import('./components/section/Login.tsx'))
const Signup = lazy(()=> import('./components/section/Signup.tsx'))

function App() {
  const location = useLocation();
  const endPath = location.pathname;
  return (
    <div className="">
        <Navbar />
        <Routes>
          <Route path='/' element={
             <Suspense fallback={<h1>loading....</h1>}>
               <Home />
             </Suspense>
            } />
          <Route path='/services' element={
             <Suspense fallback={<h1>loading....</h1>}>
               <Services />
             </Suspense>
            } />
          <Route path='/about' element={
             <Suspense fallback={<h1>loading....</h1>}>
               <About />
             </Suspense>
            } />
          <Route path='/contact' element={
             <Suspense fallback={<h1>loading....</h1>}>
               <Contact />
             </Suspense>
            } />
          <Route path='/login' element={
             <Suspense fallback={<h1>loading....</h1>}>
               <Login />
             </Suspense>
            } />
          <Route path='/register' element={
             <Suspense fallback={<h1>loading....</h1>}>
               <Signup />
             </Suspense>
            } />
        </Routes>
        {endPath !== '/' && endPath !== "/login" && endPath !== "/register" && <SimilarFooter />}

      {endPath !== "/login" && endPath !== "/register" && <Footer />}
      <ToastContainer />
    </div>
  );
}

export default App;
