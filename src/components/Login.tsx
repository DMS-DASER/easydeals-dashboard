import React, { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { isLoaded, signIn, setActive } = useSignIn();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [error, setError] = useState('');
    const login = async () => {
        if (!isLoaded) {
          return
        }
        try {
          const signInAttempt = await signIn.create({
            identifier: email,
            password,
          })
    
          if (signInAttempt.status === 'complete') {
            await setActive({ session: signInAttempt.createdSessionId })
            navigate('/products');
          } else {
            setError("invalid credentials");
          }
        } catch (err: any) {
          setError("invalid credentials");
        }
      }

    return (
        <div className="flex justify-center items-center py-10 bg-gray-100 my-4">
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl mx-auto justify-center">
                
                {/* Login Form */}
                <div className="w-full max-w-md p-8">
                    {/* Login Form */}
                    <form noValidate action="" className="space-y-8 ">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="text" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Email address</label>
                                <input
                                    type="text"
                                    name="text"
                                    id="email"
                                    placeholder="username"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:border-purple-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm font-semibold text-gray-600 dark:text-gray-800">Password</label>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="*****"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:border-purple-600"
                                />
                                {error && <span className="text-red-500 text-xs">{error}</span>}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="w-full px-8 py-3 font-semibold rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
                            onClick={login}
                        >
                            Sign in
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;