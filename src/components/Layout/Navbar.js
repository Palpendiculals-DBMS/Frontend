import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../Assets/YangLOGO.svg'



function User(props) {
    return (
        <>
            <div className={props.className}>
                <div className='flex flex-col justify-end items-end'>
                    <p className='text-sm'>{props.user.name}</p>
                    <button 
                        className='text-sm border-b-2 hover:border-gray-600 transition-all'
                        onClick={props.SignOut}
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </>
    )
}

function Navbar() {

    const auth = useSelector(state => state.auth);

    console.log(auth)

    return (
        <>
            <header class="text-gray-600 font-body">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className={`flex-grow`}>
                        <Link to={'/form/dashboard'}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <button className='hover:bg-slate-200 p-3 rounded-lg transition-all'>
                        Dashboard
                    </button>


                </div>
            </header>
        </>
    )
}

export default Navbar