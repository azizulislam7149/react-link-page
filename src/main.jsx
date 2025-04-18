import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/Contact/Contact.jsx'
import Users from './assets/components/Users/Users.jsx'

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
            element : <Users></Users>
          }
      ]
      
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
