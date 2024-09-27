import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import 'ldrs/ring'

import { cardio } from 'ldrs'

cardio.register()

const REACT_APP_SUPABASE_URL = "https://mtbscjslfmhebsizwcbx.supabase.co"
const REACT_APP_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10YnNjanNsZm1oZWJzaXp3Y2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMDU1MzYsImV4cCI6MjAzODU4MTUzNn0.lHhdyAUUndKRr-kta0M8qsADr28pLqJoE7pXuEPPo-g"

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);

const Brand = () => {
    const [images, setImages] = useState<File>()
    const [formErrors, setFormErrors] = useState<any>({});
    const [formData, setFormData] = useState({
        brandName: "",
        imageURL: [],
    });
    let imageurls: string = '';

    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setFormData({
            brandName: "",
            imageURL: [] 
        });
        setImages(null);
    }

    const validateForm = () => {
        let errors: any = {};

        if (!formData.brandName) {
            errors.brandName = "Product Name is required.";
        }

        if (!images) {
            errors.images = "At least one image is required.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type} = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleImageUpload = async () => {
        if (images) {
            const uploadPromises = async () => {
                const uniqueName = images.name + new Date().toISOString;
                const { data, error } = await supabase.storage.from('brands').upload(uniqueName, images, {
                    upsert: true,
                    contentType: 'image/jpeg',
                });
                if (data) {
                    const { data } = supabase.storage.from('brands').getPublicUrl(uniqueName);
                    imageurls = data.publicUrl;
                } else if (error) {
                    console.log(error.message);
                }
            };
            await Promise.call(uploadPromises);
            return true;
        } else {
            return false;
        }

    }

    const insertData = async () => {
        const { data, error } = await supabase
            .from('brand')
            .insert({
                brand_name: formData.brandName,
                images: imageurls,
            }).select();
        if (data) {
            setLoading(false);
            alert("data inserted");
            resetForm();
        } else if (error) {
            alert(error.message);
            console.log(error.message);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            const UPLOAD_STATUS = await handleImageUpload();
            if (UPLOAD_STATUS) {
                insertData();
            }
            setLoading(true);   setTimeout(() => setLoading(false), 3000);
        } else {
            console.log("Form is invalid, please correct the errors and try again.");
        }
    };

    const handleImageRendering = () => {
        if (images) {
            const urls = URL.createObjectURL(images);
            return <img src={urls} />
        }
    };

    return (
        <>
            <div className="w-full flex p-5 bg-slate-100">
                <div className="bg-white h-fit shadow-md rounded-lg w-full p-4 md:flex block">
                    <form onSubmit={handleSubmit} className="w-full" name="addProductForm">
                        <div className="space-y-4 w-full border-0  sm:border-r-2 p-2">        
                            <div className="space-y-2">
                                <label htmlFor="brandName" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Product Name</label>
                                <input
                                    type="text"
                                    name="brandName"
                                    placeholder="Brand Name"
                                    value={formData.brandName}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                                {formErrors.brandName && <span className="text-red-500 text-xs">{formErrors.brandtName}</span>}
                            </div>
                            <div className="w-full">
                                <label htmlFor="images" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Images</label>
                                <div className="flex gap-2 my-2 justify-between w-full">
                                    <input
                                        type="file"
                                        className="hidden"
                                        id='files'
                                        onChange={(e) => {
                                            setImages(e.target.files[0])
                                        }}
                                    />
                                
                                        <div  className="">
                                            <label
                                                htmlFor={`files`}
                                                className="flex cursor-pointer"
                                            >
                                                <div className="bg-gray-200 rounded-lg p-4 text-center sm:w-24 sm:h-24 w-12 h-12 flex justify-center items-center overflow-hidden relative">
                                                    <span className="text-gray-500 font-semibold text-xs">
                                                        {handleImageRendering()}
                                                    </span>
                                                </div>
                                            </label>
                                        </div>
                                    
                                </div>
                                {formErrors.images && <span className="text-red-500 text-xs">{formErrors.images}</span>}
                            </div>
                            <div className="space-y-2">
                                <button
                                    type="submit"
                                    name="brand"
                                    className="w-full rounded-md p-2 text-white shadow-md shadow-gray-400 bg-purple-600"
                                    disabled={loading ? true : false}
                                >
                                    {loading ?
                                        <l-cardio
                                        size="32"
                                        stroke="4"
                                        speed="2" 
                                        color="white" 
                                      ></l-cardio> : 'Submit'}
                                </button>
                            </div>
                        </div>
                      
                    </form>
                </div>

            </div>
        </>
    );
}

export default Brand;