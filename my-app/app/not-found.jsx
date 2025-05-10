import Link from 'next/link'
import React from 'react'

const Notfound = () => {
    return (
        <div className='flex justify-center items-center min-h-[80vh]'>
            <div className='flex flex-col gap-3 text-xl'>
                Page Not Found
                <Link href={'/'} className='text-gray-100 py-1 px-2 rounded-2xl border-2 bg-gray-500 hover:bg-gray-600'>Back to Home?</Link>
            </div>
        </div>
    )
}

export default Notfound