import React from "react";
import { Link } from "react-router-dom"

function ProductCard(props){
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/Product/${props.Product.id}`}>
                <div style={{
                    'backgroundImage': `url('${props.Product.Images}')`
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-medium text-xl mb-3">
                        {props.Product.name}
                </h3>
                <Link 
                    to={`/Product/${props.Product.id}`}
                    className="bg-blue-500 text-white p-2 flex justify-center"
                >
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard