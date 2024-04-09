"use client"
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

function OrderPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {data:session} = useSession();
    if(session) redirect("/");


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name || !email|| !phone) {
            setError("Please complete all inputs");
            return;
        }

        try {

            const resCheckEmail = await fetch("http://localhost:3000/api/checkOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email})
            })

            const resCheckPhone = await fetch("http://localhost:3000/api/checkPhone", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({phone})
            })

            const {order} = await resCheckEmail.json();
            const {orderp} = await resCheckPhone.json();
            if(order) {
                setError("Email already exists!");
                return;
            }
            if(orderp) {
                setError("This number already exists!");
                return;
            }

            const res = await fetch("http://localhost:3000/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone
                })
            })

            if (res.ok) {
                const form = e.target;
                setError("");
                setSuccess("Thank you for your order! We will contact you back soon.")
                form.reset();
                redirect("/");
            }
            else {
                console.log("Order failed.")
            }

        } catch(error) {
            console.log("Error during Order: ", error);
        }
    }

  return (
    <div>
      <Navbar/>
      <div className='container mx-auto py-5 px-10 bg-blue-50 p-5'> 
        <h3 className='text-2xl font-semibold'>Order Product</h3>
        <hr className='my-3' />
        <form onSubmit={handleSubmit}>

            {error && (
                <div className='w-fit text-base font-bold text-red-500 py-1 px-3 rounded-md mt-2'>
                    {error}
                </div>
            )}
            {success && (
                <div className='w-fit text-2xl font-bold text-green-500 py-1 px-3 rounded-md mt-2'>
                    {success}
                </div>
            )}
            <h2>Name:</h2>
            <input onChange={(e) => setName(e.target.value)} className='block bg-white p-2 my-2 rounded-md' type="text" placeholder='Enter Your Name' />
            <h2>E-mail:</h2>
            <input onChange={(e) => setEmail(e.target.value)} className='block bg-white p-2 my-2 rounded-md' type="email" placeholder='abc@gmail.com' />
            <h2>Phone number:</h2>
            <input onChange={(e) => setPhone(e.target.value)} className='block bg-white p-2 my-2 rounded-md' type="tel" pattern="[0-9]{10}" placeholder='0123456789' />
            <button type='submit' className='bg-green-500 p-2 my-3 rounded-md text-white'>Order</button>
        </form>
        <hr className='my-3' />
        <p><Link className='text-blue-500 hover:underline text-xl' href="/">Back</Link></p>
        <div className='my-10'>
            <h1 className='text-2xl font-semibold'>Contact</h1>
            <h2 className='text-xl my-2'>Facebook: Door For Cat</h2>
            <h2 className='text-xl my-2'>Phone: 099-8876543</h2>
        </div>
      </div>
    </div>
  )
}

export default OrderPage