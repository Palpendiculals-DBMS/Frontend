import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeAuthData } from '../../redux/auth/authSlice'
import { Link, useHistory } from 'react-router-dom'

import logo from '../../Assets/YangLOGO.svg'



function User(props) {
    return (
        <>
            <div className={props.className}>
                <div className='flex flex-col justify-end items-end  '>
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
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(auth);

    const SignOut = () => {
        dispatch(removeAuthData());
        history.push('/');
    }

    return (
        <>
            <header class="text-gray-600 font-body shadow-lg">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className={`flex-grow`}>
                        <Link to={'/form/dashboard'}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <button className='hover:bg-slate-200 p-3 rounded-lg transition-all mr-10'>
                        Dashboard
                    </button>

                    {auth.isAuthenticated ? <User user={auth.user} SignOut={SignOut} /> : null}

                </div>
            </header>
        </>
    )
}

export default Navbar