import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
const{id,title,body} = post;
    return (
        <div className='post'>
            <h1>{id}</h1>
            <h2>{title}</h2>
          
          <Link to ={`/post/${id}`}>Post Details</Link>
          <Link to={(`/post/${id}`)}><button>SHOW DETAILS</button></Link>
        </div>
    );
};

export default Post;