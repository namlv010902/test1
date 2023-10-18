
import {RouterProvider ,createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import UserLayout from './layout/UserLayout'
import { ProductsPage } from './pages/ProductsPage'
import AddProductPage from './pages/AddProductPage'
import UpdateProductPage from './pages/UpdateProductPage'

function App() {
  

  
  const router = createBrowserRouter([
    {path:"/", element:<UserLayout/>,children:[
      {path:'/',element:<HomePage/>},
      {path:'/products',element:<ProductsPage/>},
      {path:'/add',element:<AddProductPage/>},
      {path:'/edit/:id',element:<UpdateProductPage/>}
    ]}
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
