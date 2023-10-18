import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { appContext } from '../store/context'
import { useNavigate, useParams } from "react-router-dom"
import { IProduct } from '../common/product';
import { addProducts, getProduct, updateProducts } from '../api/products';
const UpdateProductPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    const { dispatch } = useContext(appContext)
    const { id } = useParams()
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        if (id) {
            getProduct(id).then(({ data }) => setProduct(data))

        }
    },[id])
    const onSubmit = (data: any) => {
        console.log(data);
        updateProducts(id,data)
        dispatch({
            type: "UPDATE_PRODUCT",
            payload:data
        })
        navigate("/")
    }
    return (
        <div>AddProductPage
        {product && 
         <form onSubmit={handleSubmit(onSubmit)} method='POST'>
         <div className="mb-6">
             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
             <input defaultValue={product?.name} {...register("name", { required: true })} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
             {errors.name?.type === 'required' && <p role="alert" style={{ color: "#f12" }}>This name is required</p>}
         </div>
         <div className="mb-6">
             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
             <input defaultValue={product?.price}  {...register("price", { required: true })} type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
             {errors.price?.type === 'required' && <p role="alert" style={{ color: "#f12" }}>This price is required</p>}

         </div>
         <div className="mb-6">
             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
             <input defaultValue={product?.image} {...register("image", { required: true })} type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
             {errors.image?.type === 'required' && <p role="alert" style={{ color: "#f12" }}>This image is required</p>}

         </div>
         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
     </form>
        }
            
           <img width={200} src={product?.image} alt="" />
        </div>
    )
}

export default UpdateProductPage