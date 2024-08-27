import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navigate = useNavigate();
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const dropdownContent = [
        'products', 'orders', 'invoices'
    ]
    
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isDrawerOpen]);

    return (
        <header className="bg-white text-black w-full">
            {/* Top Bar */}
            <div className="p-2 items-center justify-between bg-purple-900 w-full hidden lg:flex">
                <div className='items-center justify-between w-full lg:w-2/3 mx-auto flex'>
                    <div className="flex items-center space-x-4 text-sm">
                        <a href='tel:+94 000 000 000' className="font-bold text-white">HOT LINE +94 000 000 000</a>
                    </div>
                    <div className='space-x-4 text-sm'>
                        <a href="#" className="hover:text-orange-500 text-white">BRANCHES</a>
                        <a href="#" className="hover:text-orange-500 text-white">CAREERS</a>
                    </div>
                </div>
            </div>

            {/* Middle Bar */}
            <div className="py-4 flex items-center justify-between w-full lg:w-2/3 mx-auto px-4">
                <div className="flex-grow flex items-center justify-center space-x-4 lg:space-x-10">
                    <a href="/" className="flex items-center">
                        <span className="text-orange-500 font-bold text-2xl">easy</span>
                        <span className="font-bold text-2xl text-black">deals.lk</span>
                        <span className="font-bold text-sm text-slate-500 mx-1">Admin</span>
                    </a>
                    <div className="flex items-center space-x-4">
                        <a className="hover:text-orange-500 text-black hidden lg:inline" onClick={() => {navigate('/login')}}>Log in</a>
                        <button
                            onClick={toggleDrawer}
                            className={`lg:hidden transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0 z-50  ' : 'translate-x-0 z-20'}`}
                        >
                            {isDrawerOpen ? <MdClose className="text-3xl text-white" /> : <FiMenu className="text-2xl text-black" />}
                        </button>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <nav className="px-4 w-full mx-auto hidden lg:block">
                <div className="flex space-x-12 justify-center text-sm">
                    {dropdownContent.map((item) => (
                        <div key={item} className="relative group">
                            <button
                                className="text-gray-800 hover:text-orange-500 font-semibold flex items-center uppercase"
                                onClick={() => navigate(item)}
                            >
                                {item}
                            </button>
                            
                        </div>
                    ))}
                </div>
            </nav>

            {/* Navigation Drawer */}
            {isDrawerOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleDrawer}>
                    <div className={`fixed inset-y-0 left-0 w-64 bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${activeDropdown ? '-translate-x-32' : ''}`} onClick={(e) => e.stopPropagation()}>
                        {/* Logo Section */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <span className="text-orange-500 font-bold text-2xl">easy</span>
                                <span className="font-bold text-2xl text-black">deals.lk</span>
                            </div>
                        </div>
                        {/* Navigation Links */}
                        <nav className="space-y-4 mt-6">
                            <div className="relative">
                                <button
                                    className="block w-full py-2 px-4 text-gray-800 bg-gray-100 rounded-md shadow-md hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out flex justify-between"
                                    onClick={() => toggleDropdown('PRODUCTS')}
                                >
                                    <span className="font-semibold">PRODUCTS</span>
                                </button>
                                
                            </div>
                            <div className="relative">
                                <button
                                    className="w-full py-2 px-4 text-gray-800 bg-gray-100 rounded-md shadow-md hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out flex justify-between"
                                    onClick={() => toggleDropdown('BRANDS')}
                                >
                                    <span className="font-semibold">ORDERS</span>
                                    
                                </button>
                               
                            </div>
                            <div className="relative">
                                <button
                                    className="block w-full py-2 px-4 text-gray-800 bg-gray-100 rounded-md shadow-md hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out flex justify-between"
                                    onClick={() => toggleDropdown('ADDED SERVICES')}
                                >
                                    <span className="font-semibold">ADDED SERVICES</span>
                                </button>
                                
                            </div>
                            <a href="#" className="block py-2 px-4 text-gray-800 bg-gray-100 rounded-md shadow-md hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">OFFERS</a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
