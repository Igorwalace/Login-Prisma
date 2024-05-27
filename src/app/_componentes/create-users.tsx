'use server';
import bcrypt from 'bcrypt'

//react
import { redirect } from "next/navigation";

//prisma
import { prisma } from "@/prisma/prisma";


const createAccount = async (name:any, email:any, password:any) => {

    const hashPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
            },
        });
    } catch (error) {
        console.log(error)
    }

    redirect('/pages/');
}

export default createAccount