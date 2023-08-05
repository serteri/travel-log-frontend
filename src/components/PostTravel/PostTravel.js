import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostTravel.css';
import axios from 'axios';

export function PostTravel() {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://trevel-logapp-0ef19dc2f4ae.herokuapp.com';
    let { id } = useParams();
    const navigate = useNavigate();

    const navigateToNewPost = () => {
        navigate('/login');
    };
    const navigateToUser = (m)=>{

        navigate(`/user/:${m}`);

    }
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [cost, setCost] = useState('');
    const [post, setPost] = useState('');
    const [locationIsValid, setLocationIsValid] = useState(true);
    const [costIsValid, setCostIsValid] = useState(true);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const locationHandler = (e) => {
        setLocation(e.target.value);
    };

    const locationValidation = (e) => {
        setLocationIsValid(!/\d/.test(location));
    };

    const dateHandler = (e) => {
        setDate(e.target.value);
    };

    const costHandler = (e) => {
        setCost(e.target.value);
    };

    const postHandler = (e) => {
        setPost(e.target.value);
    };
    const formatDate = (date) => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };
    const postData = async () => {
        const postData = {
            post: post,
            location: location,
            cost: cost,
            date: formatDate(date),
            author: id // Pass the id directly as a string
        };

        try {
            await axios.post(`${backendUrl}/user/${id}/post`, postData).then( response => navigateToUser(id));
        } catch (error) {
            setError('Some error occurred');
        }
    };

    const submitPost = (e) => {
        e.preventDefault();
        postData();
        setCost('');
        setLocation('');
        setPost('');
        setDate('');

    };


    return(
<>
    <section className='posting'>

        <form className="login-form" onSubmit={submitPost} action='https://trevel-logapp-0ef19dc2f4ae.herokuapp.com/userid/post' >
            <h1 className='title'>Create  Post</h1>
            <div className="form_elements">
                <i className="fa-solid fa-location-dot icons"></i>
                <input className='inputs'  type='text' placeholder='Add Location' name='location' onChange={locationHandler} value={location} />
            </div>
            <p className={locationIsValid ? "valid" : "invalid"}>Please enter a valid location</p>
            <div className="form_elements">
                <i className="fa-solid fa-calendar-days icons"></i>
                <input className="inputs"  type='date' placeholder='Add date of visit' name='date' onChange={dateHandler}  value={date}/>
            </div>
            <div className="form_elements">
                <i className="fa-solid fa-money-check-dollar icons"></i>
                <input className="inputs"  type='number' placeholder='cost of visit' name='cost' onChange={costHandler}  value={cost}/>
            </div>
            <div className="form_elements">
                <textarea   placeholder='Post something' name='post' rows="4" cols="50" onChange={postHandler} value={post} />
            </div>
            <button className='button-submit' >Post It</button>
        </form>

    </section>


</>
)

}