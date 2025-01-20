import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ emailOrUsername: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with credentials:', credentials);
    // Simulate login success
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 to-green-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-green-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="emailOrUsername"
              className="block text-green-700 font-semibold mb-2"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="emailOrUsername"
              name="emailOrUsername"
              value={credentials.emailOrUsername}
              onChange={handleChange}
              className="input input-bordered w-full border-green-400 focus:ring focus:ring-green-200"
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-green-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="input input-bordered w-full border-green-400 focus:ring focus:ring-green-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-green-700 mt-4">
          Don’t have an account? <a href="/register" className="text-yellow-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
