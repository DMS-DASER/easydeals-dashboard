import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import AddProducts from "./AddProducts";
import { useClerk } from "@clerk/clerk-react";
import AccessDenied from "./AccessDenied";
import ViewProducts from "./ViewProducts";
import UpdateProducts from "./UpdateProducts";

const Products = () => {
    const {signOut} = useClerk();
    const navigate = useNavigate();
    const [active, setActive] = useState(0)
    const location = useLocation();
    useEffect( () => {
        const paths = location.pathname.split('/');
        switch(paths[paths.length-1]){
            case 'addproducts' : setActive(0); break;
            case 'viewproducts' : setActive(1); break;
            case 'editproducts' : setActive(2); break;
            default : setActive(0); break;
        }
    }, [location])
    return (
        <>
            <div className="block sm:flex w-full h-full">
                <div className="p-4 text-center w-full sm:w-1/6 bg-purple-900 text-white sm:text-start flex h-fit sm:h-full min-h-full sm:min-h-screen">
                    <ul className="space-y-12 w-full text-center sm:text-start">
                        <li className={`${active === 0 ? 'font-medium' : 'font-light'} cursor-pointer hover:font-medium duration-100`} onClick={() => navigate('addproducts')}>Add Products</li>
                        <li className={`${active === 1 ? 'font-medium' : 'font-light'} cursor-pointer hover:font-medium duration-100`} onClick={() => navigate('viewproducts')}>View Products</li>
                        <li className={`${active === 2 ? 'font-medium' : 'font-light'} cursor-pointer hover:font-medium duration-100`} onClick={() => navigate('editproducts')}>Edit Products</li>
                        <li className="cursor-pointer hover:font-medium duration-100" onClick={() => signOut({ redirectUrl: '/' })}>Log Out</li>
                    </ul>
                </div>
                <Routes>
                    <Route path='/' element={<AddProducts />} />
                    <Route path='/addproducts' element={<AddProducts />} />
                    <Route path='/*' element={<AccessDenied />} />
                    <Route path='/viewproducts' element={<ViewProducts />} />
                    <Route path='/editproducts' element={<UpdateProducts/>} />
                </Routes>
            </div>

        </>
    );
}

export default Products;