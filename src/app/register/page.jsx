"use client"
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
// import Footerbar from '../components/footer'

function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [catname, setCatName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {data:session} = useSession();
    if(session) redirect("/welcome");


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password != confirmPassword) {
            setError("Password do not match!");
            return;
        }
        if(!name || !email || !password || !confirmPassword) {
            setError("Please complete all inputs");
            return;
        }

        try {

            const resChechUser = await fetch("http://localhost:3000/api/checkUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email})
            })

            const {user} = await resChechUser.json();
            if(user) {
                setError("User already exists!");
                return;
            }

            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if (res.ok) {
                const form = e.target;
                setError("");
                setSuccess("Registration Successfully!")
                form.reset();
            }
            else {
                console.log("User registration failed.")
            }

        } catch(error) {
            console.log("Error during registration: ", error);
        }
    }

  return (
    <div>
      <Navbar/>
      <div className='container mx-auto py-5 px-10'>
        <h3 className='text-xl font-semibold'>Register Page</h3>
        <hr className='my-3' />
        <form onSubmit={handleSubmit}>

            {error && (
                <div className='w-fit text-base font-bold text-red-500 py-1 px-3 rounded-md mt-2'>
                    {error}
                </div>
            )}
            {success && (
                <div className='w-fit text-base font-bold text-green-500 py-1 px-3 rounded-md mt-2'>
                    {success}
                </div>
            )}
            <h1>Name:</h1>
            <input onChange={(e) => setName(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter Your Name' />
            <h1>E-mail:</h1>
            <input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter Your Email' />
            
            <h1>Password:</h1>
            <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter Your Password' />
            <h1>Confirm password:</h1>
            <input onChange={(e) => setConfirmPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Confirm Your Password' />
            <button type='submit' className='bg-green-500 p-2 my-2 rounded-md text-white'>Sign Up</button>
        </form>
        <hr className='my-3' />
        <p>Already have an account? go to <Link className='text-blue-500 hover:underline' href="/login">Sign In</Link> Page</p>
      </div>
    </div>
  )
}

export default RegisterPage
