'use client'
//react
import Link from 'next/link'
import React, { useState } from 'react'

//react-icons
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

//shadcn
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

//function
import createAccount from '../_componentes/create-users'

const Login = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <>
            <div className="mx-auto max-w-sm space-y-6 flex flex-col items-center justify-center h-screen">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Welcome</h1>
                    <p className="text-gray-500 dark:text-gray-400">Sign up to your account to continue</p>
                </div>
                <div className="space-y-4">
                    <Button className="w-full" variant="outline">
                        <FcGoogle className="mr-2 h-5 w-5" />
                        Sign up with Google
                    </Button>
                    <Button className="w-full" variant="outline">
                        <FaFacebook className="mr-2 h-5 w-5" />
                        Sign up with Facebook
                    </Button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400">Or sign up with</span>
                        </div>
                    </div>
                    <form action={()=>createAccount(name, email, password)} className='space-y-4' >
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="yourname" required type="name" onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="m@example.com" required type="email" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" onChange={(e)=>setPassword(e.target.value)}  />
                        </div>
                        <Button className="w-full" type="submit" >
                            Sign Up
                        </Button>
                    </form>
                    <div className="text-center text-sm">
                        have an account?
                        <Link className="underline" href="#">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login