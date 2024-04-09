"use client"
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const {data:session} = useSession();
    if(session) router.replace("/welcome");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await signIn("credentials", {
                email, password, redirect: false
            })
            if(!email || !password) {
                setError("Please complete all inputs");
                return;
            }
            if (res.error) {
                setError("Invalid email or password");
                return;
            }

            router.replace("welcome");

        } catch(error) {
            console.log(error)
        }
    }

  return (
    <div>
      <Navbar/>
      <div className='container mx-auto py-5 px-10'>
        <h3 className='text-xl font-semibold'>Login Page</h3>
        <hr className='my-3' />
        <form onSubmit={handleSubmit}>
            {error && (
                <div className='w-fit text-base font-bold text-red-500 py-1 px-3 rounded-md mt-2'>
                    {error}
                </div>
            )}
            <h1>E-mail:</h1>
            <input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter Your Email' />
            <h1>password:</h1>
            <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter Your Password' />
            <button type='submit' className='bg-green-500 p-2 my-2 rounded-md text-white'>Sign In</button>
        </form>
        <hr className='my-3' />
        <p>Do not have an account yet? go to <Link className='text-blue-500 hover:underline' href="/register">Sign Up</Link> Page</p>
      </div>
    </div>
  )
}

export default LoginPage
