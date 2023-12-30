import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import FormContainer from '../components/FormContainer';
import { useLoginMutation } from '../slices/UserApiSlice';
import { setCredentials } from '../slices/AuthSlice';
import { toast } from 'react-toastify';

const Login = ({ switchForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, { isLoading }] = useLoginMutation()
    const { userInfo } = useSelector((state) => state.auth)
    useEffect(() => {
        if (userInfo) {
            navigate("/")
        }
    }, [navigate, userInfo])



    const handleLogin = async () => {
        console.log('Logging in with:', email, password)
        try {
            const response = await login({ email, password }).unwrap()
            dispatch(setCredentials({ ...response }))
            navigate("/")

        } catch (error) {
            toast.error(`${error?.data.error}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            console.log(error);
            console.log(error?.error);
            console.log(error?.data);
            console.log(error?.data?.message);
            console.log(error?.message);


        }
    };

    return (
        <div className="bg-white text-[#252525] p-8 shadow-md rounded-md w-96 mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                className="w-full bg-blue-500 text-white p-2 rounded-md mb-4"
                onClick={handleLogin}
            >
                Login
            </button>
            <p className="text-sm text-center ">
                New Customer ?
                <Link to="/signup">
                    <button className="text-[#252525] underline ml-3"
                        onClick={() => switchForm('signup')}>
                        Sign Up </button>
                </Link>
            </p>
        </div>
    );
};

export default Login