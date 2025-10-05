import { db } from '@/server/db'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { notFound, redirect } from 'next/navigation'


const SyncUser =  async () => {
    const {userId} = await auth()
    if (!userId) {
        throw new Error('User not found')
    }
