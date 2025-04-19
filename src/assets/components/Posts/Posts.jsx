import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './posts.css';

const Posts = () => {
    const posts = useLoaderData();

    return (
        <div className='posts'>
              {
                posts.map(post=> <Post post={post}></Post>)
            }
          
        </div>
    );
};

export default Posts;