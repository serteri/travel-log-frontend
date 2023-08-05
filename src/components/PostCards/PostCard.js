export default function PostCard({ post }) {



    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (

        <div className="post-card">
            <h3> Location: {post.location}</h3>
            <p>Date:  {formattedDate}</p>
            <p>Cost : {post.cost}</p>
            <p>Comments: {post.post}</p>

        </div>
    );
}