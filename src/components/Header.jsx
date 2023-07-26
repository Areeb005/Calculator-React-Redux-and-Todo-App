import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [Active, setActive] = useState('active1')

    return <>


        <header>
            {/* HEADER START  */}
            <nav className={`bg-black max-lg:mb-12 fixed w-full z-10 top-0`}>
                <div className="container m-auto">
                    <div className="w-full flex flex-wrap items-center justify-between mx-auto py-4 px-20 max-md:p-2">
                        <a href="/" className="flex items-center">
                            <h1 className='text-2xl text-white font-bold'>My Projects</h1></a>
                        <div className="flex md:order-2">
                            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden" onClick={showMenu === false ? () => setShowMenu(true) : () => setShowMenu(false)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-12 h-8 max-md:text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                            </button>
                        </div>
                        <div className={`items-center justify-between w-full md:hidden md:w-auto md:order-1 bg-black/70 absolute top-14 left-0 ${showMenu === false ? 'not-show' : 'show'}`}>
                            <ul className="flex flex-col font-medium p-4 w-full md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                    <Link to={'/'} className={`block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 ${Active === "active1" ? 'text-cyan-400' : 'text-white'}`} onClick={() => setActive('active1')} aria-current="page">Calculator</Link>
                                </li>
                                <li>
                                    <Link to={'/todo'} className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${Active === "active2" ? 'text-cyan-400' : 'text-white'}`} onClick={() => setActive('active2')}>Todo</Link>
                                </li>
                                <li>
                                    <Link to={'/faqs'} className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${Active === "active3" ? 'text-cyan-400' : 'text-white'}`} onClick={() => setActive('active3')}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'} className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${Active === "active4" ? 'text-cyan-400' : 'text-white'}`} onClick={() => setActive('active4')}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 max-md:hidden`}>
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                    <Link to={'/'} className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${Active === "active1" ? 'text-cyan-400' : 'text-white'}`} onClick={() => setActive('active1')} aria-current="page">Calculator</Link>
                                </li>
                                <li>
                                    <Link to={'/todo'} className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${Active === "active2" ? 'text-cyan-400' : 'text-white'}`} onClick={() => setActive('active2')}>Todo</Link>
                                </li>
                                <li>
                                    <Link to={'/faqs'} className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${Active === "active3" ? 'text-cyan-400' : 'text-white'}`} onClick={() => setActive('active3')}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to={'/contact'} className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${Active === "active4" ? 'text-cyan-400' : 'text-white'}`} onClick={() => setActive('active4')}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* HEADER END */}
        </header>


    </>
}


export default Header