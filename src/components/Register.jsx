import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaGoogle } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"

const Register = () => {
  const [message, setMessage] = useState("")
  const { registerUser, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // 🔹 Temporary register handler (mock)
  const onSubmit = async (data) => {

    try {
      await registerUser(data.email, data.password);
      alert("User Registered Successfully!")
      navigate("/")
    } catch (error) {
      setMessage("Please provide a valid email and password")
      console.error(error)
    }
  }

  // 🔹 Temporary Google sign-in handler (mock)
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Google login successful!")
      navigate("/")
    } catch (error) {
      alert("Google sign in failed!")
      console.error(error)
    }
  }

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="shadow border rounded w-full py-2 px-3"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="shadow border rounded w-full py-2 px-3"
            />
          </div>

          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>

        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Register
