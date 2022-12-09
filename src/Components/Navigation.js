import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu';

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(100%)'},
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(100%)'},
    })

    return ( 

        <nav className='relative' >
            <span className='text-xl'>
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}            
                />
            </span>

            {
                menuTransitions((styles, item) => 
                    item &&
                    <animated.div
                        style={styles}
                        className='fixed h-full w-48 bg-gray-300 top-0 right-0 pr-5 text-center '
                        onClick={() => setShowMenu(false)}
                    >
                        <NavigationMenu 
                            closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>
                )
            }
        </nav>

    )
}

export default Navigation