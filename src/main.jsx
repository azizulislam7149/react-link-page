import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/Contact/Contact.jsx'
import Users from './assets/components/Users/Users.jsx'
import Posts from './assets/components/Posts/Posts.jsx'
import PostDetails from './assets/components/PostDetails/PostDetails.jsx'

const router = createBrowserRouter([
  // {
  //   path : '/',
  //   element : <div>hello from react router</div>
  // },
  // {
  //   path : '/about',
  //   element : <div>I am in about page</div>
  // },
  // {
  //   path : '/home',
  //   element : <div>this is home page</div>
  // },
  
  // {
  //   path : '/contact',
  //   element : <div>call me on my phone number</div>
  // },
  {
      path : '/',
      element : <Home></Home>,
      children : [
        {
          path : '/about',
          element : <About></About>
        },
          {
            path : '/contact',
            element : <Contact></Contact>
          },
          {
            path : '/users',
            loader :()=> fetch('https://jsonplaceholder.typicode.com/photos'),
            element : <Users></Users>
          },
          {
            path : '/posts',
            loader : ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
            element : <Posts></Posts>
          },
          {
            path :'/post/:postId',

            loader :({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),

            element : <PostDetails></PostDetails>,

          }
      ]
      
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
