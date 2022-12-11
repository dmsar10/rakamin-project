import React from 'react'
import Navigation from './Navigation'

function Header(){
    return (
        <header className="border-b-4 border-black p-4 flex justify-between items-center">
            <span className='font-bold text-2xl'>
            Meong^^ 🐈
            </span>

            <Navigation />
        </header>
    )
}

export default Header