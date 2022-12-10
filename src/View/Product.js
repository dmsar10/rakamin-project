import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

function Product(){
    const { id } = useParams()
    const url = `https://63946cb286829c49e81c389e.mockapi.io/Product/${id}`
    const [Product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setProduct(response.data)
        })
    }, [url])

    if(Product){
        return (
            <div>
                <h1 className='font-bold text-2xl pl-3 pt-3'>
                    Our Cats!
                </h1>

                    <div>
                        <h1 className='font-bold text-xl pl-3 pt-3'>
                            {Product.name}
                        </h1>
                    </div>

                    <div>
                        <img
                            src={Product.Images}
                            alt={Product.name}
                        />
                    </div>

                    <div className='font-bold text-m pl-3 pt-3'>
                            $ {Product.Price}
                    </div>

                    <div>
                        {Product.Description}
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