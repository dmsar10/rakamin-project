import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Product(){
    const { id } = useParams()
    const url = `https://63946cb286829c49e81c389e.mockapi.io/Product/${id}`
    const [Product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })

        axios.get(url)
            .then((response) => {
                setProduct({
                   loading: false,
                   data: response.data,
                   error: false 
                })
        })

            .catch(error => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true 
                })
            })
    }, [url])

    if(Product.loading){
        content = <Loader></Loader>
    }

    if(Product.error){
        content = <p className="font-bold flex justify-center pt-20">
            Please refresh your menu!
        </p>
    }

    if(Product.data){
        return (
            <div>
                <h1 className='font-bold text-2xl pl-3 pt-3'>
                    Our Cats!
                </h1>

                    <div>
                        <h1 className='font-bold text-xl pl-3 pt-5 pb-2'>
                            {Product.data.name}
                        </h1>
                    </div>

                    <div>
                        <img
                            src={Product.data.Images}
                            alt={Product.data.name}
                        />
                    </div>

                    <div className='font-bold text-xl pl-3 pt-3'>
                            $ {Product.data.Price}
                    </div>

                    <div className='font-medium text-m pl-3 pt-3'>
                        {Product.data.Description}
                    </div>
            </div>

            
        )
    }

    return (
        <div>
            {content}
        </div>
    )

}

            // <div>
            //     <h1 className='font-bold text-2xl pl-3 pt-3'>
            //         Our Cats!
            //     </h1>
            // </div>
export default Product