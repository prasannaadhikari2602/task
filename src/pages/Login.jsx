import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // later you can connect API here
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">

        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center">
          Login
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Welcome back! Please enter your details
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-xl bg-black border border-zinc-700 text-white focus:border-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-xl bg-black border border-zinc-700 text-white focus:border-blue-500 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-3 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        {/* Bottom text */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-500 cursor-pointer">
            Sign up
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;