import React from 'react';
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GiSriLanka } from "react-icons/gi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#4b2e83] text-white p-5 flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-around w-full md:w-2/3">
                    <div className="flex flex-col items-center mb-5 md:mb-0">
                        <RiCustomerService2Fill className='text-5xl' />
                        <span className='text-lg'>Customer Support</span>
                    </div>
                    <div className="flex flex-col items-center mb-5 md:mb-0">
                        <TbTruckDelivery className='text-5xl' />
                        <span className='text-lg'>Express Delivery</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <GiSriLanka className='text-5xl' />
                        <span className='text-lg'>Islandwide Service Centers</span>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center items-center'>
                <div className="flex flex-col md:flex-row my-10 items-center justify-between w-full md:w-2/3 px-4 md:px-0">
                    <div className="flex flex-col items-start mb-5 md:mb-0 ">
                    <a href="/" className="flex items-center">
                        <span className="text-orange-500 font-bold text-4xl">easy</span>
                        <span className="font-bold text-4xl text-black">deals.lk</span>
                    </a>

                        {/* <img src="/easydeals_logo.png" alt="easy deals" className="w-40" /> */}
                        <p className="text-base mt-3 border-b border-black pb-1"> Your premier destination <br /> for wholesale products in Sri Lanka</p>
                        
                        <div className="flex mt-3 gap-3">
                            <a href="#" className="text-2xl"><FaFacebookF /></a>
                            <a href="#" className="text-2xl"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10 mt-5 md:mt-0">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">easydeals</h3>
                            <ul className="list-none mt-3 text-base space-y-1">
                                
                                <li><a href="/About" className="hover:underline">About easydeals.lk</a></li>
                                <li><a href="#" className="hover:underline">Stores</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">Help</h3>
                            <ul className="list-none mt-3 text-base space-y-1">
                                <li><a href="#" className="hover:underline">Frequently Asked Questions</a></li>
                                <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                                <li><a href="#" className="hover:underline">Warranty Information</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">Policies</h3>
                            <ul className="list-none mt-3 text-base space-y-1">
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='text-black my-5' />
            <p className="text-center text-xs">Copyright © 2013-2024 Wayamba Trading & Investment (Private) Limited. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;