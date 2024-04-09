"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
// import clientPromise from "../../../../lib/mongodb";
// import { InferGetServerSidePropsType } from 'next'



function WelcomePage() {

    const {data: session} = useSession();
    console.log(session)

    if(!session) redirect("/login");


  return (
    <div className='bg-sky-100'>
      <Navbar session = {session} />
      <div className="container mx-auto px-10 py-10">
        <h3 className='text-3xl my-3'>Welcome {session?.user?.name}</h3>
        <h3 className='text-2xl my-3 mb-5'>This is your pet!</h3>
        
        <a href='/addCat' className='text-black bg-blue-200 py-2 px-3 rounded-md text-lg my-5 hover:text-blue-700'>Add Cat</a>
        {/* <h3 className='text-1xl my-3'>Hi {session?.user?.catname}</h3> */}
        <div className='border-4 border-sky-400 p-5 rounded-lg m-10 width-200'>
          <h1 className='text-2xl font-semibold'>Name's Cat</h1>
          <h1 className='text-xl'>Datetime: </h1>
          <h1 className='text-xl'>Lastest opened:</h1>
        </div>
        <div className='border-4 border-sky-400 p-5 rounded-lg m-10 width-200'>
          <h1 className='text-2xl font-semibold'>Name's Cat</h1>
          <h1 className='text-xl'>Datetime: </h1>
          <h1 className='text-xl'>Lastest opened:</h1>
        </div>
        <div className='border-4 border-sky-400 p-5 rounded-lg m-10 width-200'>
          <h1 className='text-2xl font-semibold'>Name's Cat</h1>
          <h1 className='text-xl'>Datetime: </h1>
          <h1 className='text-xl'>Lastest opened:</h1>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage

