"use client"
import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
<link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>"/>
function Navbar({session}) {
  return (
    <nav className='bg-[#ffffff] text-black p-5'>
      <div className="container mx-auto p-3 bg-[#ffffff]">
        <div className='flex justify-between items-center'>
            <div className='flex font-bold text-2xl'>
              <Link href="/"><Image src="/icon.ico" width={80} height={80} /></Link>
                <Link className='my-5 mx-5' href="/">DOOR FOR CAT</Link>
            </div>
            <ul className='flex'>
                {!session ? (
                    <>
                    <li className='mx-3 text-xl'><Link href="/login">Sign In</Link></li>
                    <li className='mx-3 text-xl'><Link href="/register">Sign Up</Link></li>
                    </>
                ) : (
                    <>
                    <li className='mx-3 text-xl'><a href='/' className='text-black py-2 px-3 rounded-md text-lg my-2 hover:text-blue-400'>Homepage</a></li>
                    <li className='mx-3 text-xl'><a href='/welcome' className='text-black py-2 px-3 rounded-md text-lg my-2 hover:text-blue-400'>Main</a></li>
                    <li className='mx-3 text-xl'><a href='/profile' className='text-black py-2 px-3 rounded-md text-lg my-2 hover:text-blue-400'>Profile</a></li>
                    <li className='mx-3 text-xl'><a onClick={() => signOut()} className='text-black font-bold py-2 px-3 rounded-md text-lg my-2 hover:text-red-600'>Log Out</a></li>
                    </>
                )}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
