import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Layout from './layout/layout' 
import Timeline from './components/Timeline'
import Homepage from './components/Homepage'
import Stats from './components/Stats'
import FriendDetail from './components/FriendDetail' 
import Context from './components/Context/Context'  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,         
        element: <Homepage></Homepage>
      },
      {
        path: "/timeline",         
        element: <Timeline></Timeline>
      },
      {
        path:"/stats",
        element:<Stats></Stats>
      },
     {
    path: "friend/:id",
    element: <FriendDetail />
} 
     
    ],
    errorElement: <h2>404 NOT AVAILABLE</h2>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Context>           
      <RouterProvider router={router} />
    </Context> 
  </StrictMode>,
)