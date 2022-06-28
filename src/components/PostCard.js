import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard(props) {
    const post = props.post
    return (
        <div className="card">
            <div className="card-body">
        Link to={`/blog/${post.id}`}>
         <h3 className="card-title">{post.title}</h3>
     </Link>
        <h4 className="card-subtitle mb-2 text-muted">By: {post.id}</h4>
    </div>
    </div>
    )
}