import {getKeyEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

export default function PostCard(props) {



    const formattedDate = new Date(props.post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const deletePost = (e) =>{

    }

    return (

        <div className="post-card">
            <h2> Location: {props.post.location}</h2>
            <p>Date:  {formattedDate}</p>
            <p>Cost : {props.post.cost}</p>
            <p>Comments: {props.post.post}</p>
            <button className='button' onClick={deletePost}>Delete</button>
        </div>
    );
}