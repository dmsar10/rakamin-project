import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home(){
    const url = `https://63946cb286829c49e81c389e.mockapi.io/Product?page=1&limit=5`

    let Products = useAxiosGet(url)

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