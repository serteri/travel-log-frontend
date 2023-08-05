import React from 'react';
import {Routes,Route, useNavigate} from "react-router-dom";
import './HomePage.css';
import view from '../../images/nice_view.jpeg';
import mountain_view from '../../images/nice-view_mountain.jpeg';

export function  HomePage(){

    const navigate = useNavigate();

    const navigatetoLogin = ()=>{
        //navigate to /login
        navigate('/login');

    }

    return(
        <div>
            <div className='travel'>
                <h2 className='travel-title'>TravelLog</h2>
                <p className='travel-text'>Journey Beyond Boundaries: Connect, Inspire, Explore
                </p>
                <button className="button_login" onClick={navigatetoLogin}> Log In</button>

            </div>
            <div className='second-part'>
                <div ><p className='description'>Embark on a virtual adventure across the
                    globe through our vibrant and user-friendly travel log app, where you can explore
                    a captivating tapestry of travel experiences shared by fellow adventurers,
                    while adding your own journeys with multiple factors like location details,
                    stunning images, cost of travel, heritage insights, recommended places to visit,
                    community access, transportation ease, and safety ratings, connecting with a
                    passionate community of like-minded explorers, and igniting your wanderlust
                    through inspiring stories, breathtaking visuals, and invaluable tips, all at your fingertips.
                    </p> </div>
                <div className='image-div'>
                    <img className='image' src={view} alt="image"/>
                    <img className='image' src={mountain_view} alt="image"/>
                </div>

            </div>

            <div className='social'>
                <p className='join'>Join Us</p>
                <div>
                    <button className='button' type='button'><i className="fa-brands fa-apple"></i>App Store</button>
                    <button className='button' type='button'><i className="fa-brands fa-google-play"></i>Google Play</button>
                </div>


            </div>

        </div>

    )

}

