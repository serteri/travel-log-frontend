
import React , {useState , useEffect} from 'react';
import axios from "axios";

import {useNavigate} from "react-router-dom";
import PostCard from '../PostCards/PostCard';



import './UserPage.css';
import '../PostCards/PostCard.css';

export function UserPage() {
    const navigate = useNavigate();

    const backendUrl = 'https://trevel-logapp-0ef19dc2f4ae.herokuapp.com';

    const [authenticated, setAuthenticated] = useState(null);
    const[name,setName] = useState('')
    const [posts, setPosts] = useState([]);
    const username = localStorage.getItem('name').charAt(0).toUpperCase() + localStorage.getItem('name').slice(1);
    const id = localStorage.getItem('id');
  
    useEffect(() => {
        const fetchData = async () => {
            const id = localStorage.getItem('id'); // Set the ID before making the API call
            if (!id) {
                // Redirect to login page if user is not logged in
                navigate('/login');
                return;
            }

            try {
                const id = localStorage.getItem('id'); // Make sure the ID is correct
                const response = await axios.get(`${backendUrl}/posts/:${id}`);
                console.log(response.data.postsArray)
                setPosts(response.data.postsArray);
            } catch (error) {
                console.error('Error retrieving posts:', error);
            }
        };

        fetchData();
    }, [id, navigate,posts]);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('authenticated');
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }

        setName(username);
    }, [username]);

    const createPost = () => {
        // Navigate to /new post page
        navigate(`/user/${id}/newPost`);
    };

    const handleLogout = () => {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        navigate('/login');
    };

    return(
        <div>
            <p className='name'>Welcome {username}</p>
            <button className='btn btn-secondary btn-outline-warning btn-lg logout' onClick={handleLogout} >Log out</button>
            <div className="posts-container">
                {posts.length >0 ? <h1 className='location-title'> My Travel Experience</h1> : <></> }
                {posts &&
                    posts.slice(0,2).map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
            </div>
            <div className="new-experience">
                <h2 className="new-experience-title">Enter a new experience</h2>
                <button className="button_create" onClick={createPost}>
                    New Post
                </button>

    </div>
        </div>
    )
}     