import React, { useEffect, useState } from "react";
import axios from "axios"
import Loader from "../Components/Loader";
import Product from "./Product";
import ProductCard from "../Components/ProductCard";

function Home(){
    const url = `https://63946cb286829c49e81c389e.mockapi.io/Product?page=1&limit=5`
    const [Products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })

        axios.get(url)
            .then((response) => {
                setProducts({
                   loading: false,
                   data: response.data,
                   error: false 
                })
        })

            .catch(error => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true 
                })
            })
    }, [url])

    let content = null

    if(Products.loading){
        content = <Loader></Loader>
    }

    if(Products.error){
        content = <p className="font-bold flex justify-center pt-20">
            Please refresh your menu!
        </p>
    }

    if(Products.data){
        content = 
        Products.data.map((Product) =>
            <div key={Product.id}>
                <ProductCard 
                    Product={Product}
                />
            </div>
        )
    }

    return (
        <div>
            <h1 className='font-bold text-2xl pl-3 pt-3'>
                Introducing our best cats!
            </h1>
            {content}
        </div>
    )
}

export default Home