import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

const Hero = () => {
    return (
        <>

            <div className='py-5 '>
                <div className='flex justify-center '>
                    <div className='p-5 flex flex-col items-center bg-gray-200 w-3/4 shadow-lg'>
                        <h1 className='text-center mb-4 text-3xl font-bold'>
                            MERN Authentication
                        </h1>
                        <p className='text-center mb-4'>
                            This is a boilerplate for MERN authentication that stores a JWT in
                            an HTTP-Only cookie. It also uses Redux Toolkit and the React
                            Bootstrap library
                        </p>
                        <div className='flex gap-4'>
                            <Link to='/login'>
                                <button className='bg-white text-[#252525] px-4 py-2 rounded-md'>
                                    Sign In
                                </button>
                            </Link>
                            <Link to='/register'>
                                <button className='bg-[#252525] text-white px-4 py-2 rounded-md mr-3'>
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

          </>
    );
};

export default Hero;
