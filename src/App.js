import React ,{useState}  from 'react';
import { BrowserRouter, Routes, Route, Outlet ,createBrowserRouter , RouterProvider} from 'react-router-dom';
import { NavBar } from './components/Navbar/Navbar';
import {HomePage} from './components/HomePage/HomePage'
import {Footer} from './components/Footer/Footer';
import {LoginForm} from './components/LoginForm/LoginForm';
import {About} from './components/About/AboutUs';
import {RegisterPage} from './components/Register/Register';
import "./App.css"
import {UserPage} from './components/UserPage/UserPage';

import Error from "./components/Error/Error";
import {PostTravel} from "./components/PostTravel/PostTravel";




function App() {


    return (

            // <RouterProvider router={router}/>
            <BrowserRouter>

                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/register" element={<RegisterPage />}/>
                    <Route path="/posts/:userID" element ={<UserPage />}/>
                    <Route path="/user/:id/newPost" element ={<PostTravel />}/>

                    <Route path='*' element={<Error />}/>

                    {/* {Route path="/login/userpage/newpost" element={NewPost />}/> */}

                    {/*<Route path="/about" element={<Outlet />}>*/}
                    {/*  <Route index element={<AboutPage />} />*/}
                    {/*  <Route path="contact" element={<ContactPage />} />*/}
                    {/*</Route>*/}
                </Routes>
                <Footer />
            </BrowserRouter>

    );
}

export default App;
// module.exports = App
