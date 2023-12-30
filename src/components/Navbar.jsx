import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import Dropdown from './Dropdown'
import { useLogoutMutation } from '../slices/UserApiSlice';
import { logout } from '../slices/AuthSlice'
import { toast } from 'react-toastify';
const Navbar = () => {
    const [nav, setNav] = useState(true)
    const userInfo = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [logoutApiCall] = useLogoutMutation();
    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate("/login")
        } catch (error) {
            console.log(error)
            console.log(error.data)
            console.log(error.message)

        }
    }

    const handleNav = () => {
        setnav(!nav)
    }
    return (
        <div className='text-wite   p-8 text-2xl flex justify-between items-center h-24 w-5/6 mx-auto'>
            <h1 className='text-[#252525] md:text-3xl text-4xl p-4 shadow font-bold pr-3 border-b-gray-300 border-b'>React.</h1>
            <ul className='hidden md:flex flex-row'>
                {userInfo ? (
                    <>
                        <Link>
                            <Dropdown />
                            <button onClick={logoutHandler} className='text-[#252525] px-4 py-1.5'>logout</button>


                        </Link>
                    </>
                ) :
                    (<>
                        <Link to="/login">
                            <li className='p-4 rounded-lg shadow cursor-pointer  border-b-gray-300 mx-2 border-b'>Log In</li>
                        </Link>
                        <Link to="/signup">
                            <li className='p-3 rounded-lg  cursor-pointer  bg-[#252525] mx-2 border-b  text-white shadow-lg'>Sign Up</li>
                        </Link>
                    </>
                    )
                }
            </ul >
            <div onClick={handleNav} className='cursor-pointer text-[#252525] block md:hidden'>
                {
                    nav ? <AiOutlineMenu /> : <AiOutlineClose />
                }

            </div>
            <div className={!nav ? `fixed  bg-[#e4e4e4] left-0 top-0 w-[55%] border-r h-screen  border-r-[#a4a3a3] ease-out duration-500 right-[100]` : `  ease-out duration-1000 fixed left-[-100%] top-0 w-3/5 border-r h-full border-r-gray-900`}>
                <ul className=' p-4 uppercase'>
                    <h1 className='text-[#252525] text-3xl font-bold m-4 w-full'>React </h1>
                    <Link to="/login">
                        <li className='p-4 border-b border-gray-500'>Log in</li>
                    </Link>
                    <Link to="/signup">
                        <li className='p-4 border-b border-gray-500'>Sign Up</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar