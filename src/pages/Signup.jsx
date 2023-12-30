import React, { useState } from 'react';

const Signup = ({ switchForm }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSignup = () => {
        // Implement your signup logic here
        if (password === confirmPassword) {
            console.log('Signing up with:', name, email, password);
            // Continue with the signup logic
        } else {
            // Display an error or handle passwords not matching
            setPasswordsMatch(false);
        }
    };

    return (
        <div className="bg-white text-[#252525] p-8 shadow-md rounded-md w-96 mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
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
            <div className="mb-4">
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                    type="password"
                    className={`w-full border p-2 rounded-md ${!passwordsMatch ? 'border-red-500' : 'border-gray-300'
                        }`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!passwordsMatch && (
                    <p className="text-sm text-red-500 mt-1">Passwords do not match</p>
                )}
            </div>
            <button
                className="w-full bg-green-500 text-white p-2 rounded-md mb-4"
                onClick={handleSignup}
            >
                Sign Up
            </button>
            <p className="text-sm text-center">
                Already have an account?{' '}
                <button
                    className="text-green-500 underline"
                    onClick={() => switchForm('login')}
                >
                    Login
                </button>
            </p>
        </div>
    );
};

export default Signup;
