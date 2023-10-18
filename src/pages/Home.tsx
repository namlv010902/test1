import {useEffect, useState} from 'react'

import { IProduct } from '../common/product';
import { getProducts, removeProducts } from '../api/products';
import { Link } from 'react-router-dom';
import { useStore } from '../store/hooks';
const HomePage = () => {
    const {products, dispatch} = useStore()
    const [loading, setLoading] = useState(false);
    console.log(products);
    useEffect(()=>{
    const getData= async()=>{
       try {
        const {data} = await getProducts() 
        dispatch({
            type:"GET_PRODUCTS",
            payload:data
        })
       } catch (error) {
        console.log('Error fetching products:', error);
       } finally {
        setLoading(true);
      }
     }
     getData()
    },[])
    const handleRemove =(id:string)=>{
        console.log(id);
        const remove= async()=>{
            await removeProducts(id) 
            dispatch({
                type:"REMOVE_PRODUCT",  
                payload:id
            })
         }
         remove()
    }
  return (
    <div>
  {!loading ? ( <>
    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
        <p>Loading...</p></>
      ) :
<div className="relative overflow-x-auto shadow-md sm:rounded-lg" >
    <table className="w-full text-sm text-left text-green-100 dark:text-green-100" style={{width:"800px",margin:"auto"}}>
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {products?.map((item:IProduct)=>(
             <tr className="bg-blue-500 border-blue-40">
             <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                {item.name}
             </th>
             <td className="px-6 py-4">
                 <img src={item.image} alt="" />
             </td>
             <td className="px-6 py-4">
                ${item.price}
             </td>
             
             <td className="px-6 py-4">
             <button onClick={()=>handleRemove(item.id)} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Remove</button>
           <Link to={`/edit/${item.id}`}>  <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Update</button></Link>

             </td>
         </tr>
            ))}
            
        </tbody>
    </table>
</div>
}

    </div>
  )
}

export default HomePage