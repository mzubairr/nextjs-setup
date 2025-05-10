import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className='bg-gray-500 p-5'>
                <header className='text-gray-100 text-xl'>
                    <nav className='flex justify-between flex-wrap'>
                        <Link href={'/'} >My App</Link>
                        <div className='flex gap-4 flex-wrap'>
                            <Link href={'/services'} >Services</Link>
                            <Link href={'/about'} >About</Link>
                            <Link href={'/contact'} >Contact</Link>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Navbar