"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
// import Footerbar from '../components/Footer'

function ProfilePage() {

    const {data: session} = useSession();
    console.log(session)

    // if(!session) redirect("/login");

  return (
    <div>
      <Navbar session = {session} />
      <div className="container mx-auto bg-blue-200 p-5 py-20 pl-20">
        <h2 className='text-3xl my-3'>Profile</h2>
        <div className='bg-white rounded-full p-3 m-5 w-28'>
          <Image src="/user.png" width={100} height={100}/>
        </div>
        
        <h3 className='text-xl my-3'>Name: {session?.user?.name}</h3>
        <h3 className='text-xl my-3'>E-mail: {session?.user?.email}</h3>
        <Link href="/login" className='bg-green-500 m-3 p-2 rounded-md text-white'>Edit</Link>
        
      </div>
      
    </div>
  )
}

export default ProfilePage

