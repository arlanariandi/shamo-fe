const Navbar = () => {
    return (
        <header>
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="hidden w-full text-gray-600 md:flex md:items-center">
                    </div>
                    <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                        Shamo
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <button
                            className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button>

                        <div className="flex sm:hidden">
                            <button
                                className="text-gray-600 hover:text-gray-500
                                focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path fillRule="evenodd"
                                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <nav
                    className="sm:flex sm:justify-center sm:items-center mt-4">
                    <div className="flex flex-col sm:flex-row">
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
                    </div>
                </nav>
                <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>

                    <input
                        className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Search"/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
