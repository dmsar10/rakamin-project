import React from "react";
import {Link} from "react-router-dom";

function NavigationMenu(props){
    return (
        <div>
            <div className='font-bold text-xl pt-3 pb-3'>
                Main menu
            </div>
                <ul >
                    <li className='text-right pt-3 pb-3 border-t border-b block'>
                        <Link to="/"
                              onClick={props.closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='text-right pt-3 pb-3 border-t border-b block'>
                        <Link to="/about"
                              onClick={props.closeMenu}
                        >
                            About
                        </Link>
                    </li>
                </ul>
        </div>
    )
}

export default NavigationMenu