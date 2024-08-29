import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import 'ldrs/ring'

import { cardio } from 'ldrs'

cardio.register()

const REACT_APP_SUPABASE_URL = "https://mtbscjslfmhebsizwcbx.supabase.co"
const REACT_APP_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10YnNjanNsZm1oZWJzaXp3Y2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMDU1MzYsImV4cCI6MjAzODU4MTUzNn0.lHhdyAUUndKRr-kta0M8qsADr28pLqJoE7pXuEPPo-g"

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);

const AddProducts = () => {
    const [images, setImages] = useState<FileList | null>()
    const [formErrors, setFormErrors] = useState<any>({});
    const [formData, setFormData] = useState({
        productId: "",
        productName: "",
        modelNo: "",
        category: "",
        description: "",
        specialdes: "",
        brand: "",
        specifications: "",
        price: "",
        discount: "",
        stock: "",
        edPlans: false
    });
    let imageurls: string[] = [];

    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setFormData({
            productId: "",
            productName: "",
            modelNo: "",
            category: "",
            description: "",
            specialdes: "",
            brand: "",
            specifications: "",
            price: "",
            discount: "",
            stock: "",
            edPlans: false
        });
        imageurls = [];
        setImages(null);
    }

    const validateForm = () => {
        let errors: any = {};

        if (!formData.productId) {
            errors.productId = "Product ID is required.";
        }

        if (!formData.productName) {
            errors.productName = "Product Name is required.";
        }

        if (!formData.modelNo) {
            errors.modelNo = "Item Code is required.";
        }

        if (!formData.category) {
            errors.category = "Category is required.";
        }

        if (!formData.description) {
            errors.description = "Description is required.";
        }

        if (!formData.price) {
            errors.price = "Price is required.";
        } else if (parseFloat(formData.price) <= 0) {
            errors.price = "Price must be greater than zero.";
        }

        if (parseFloat(formData.discount) < 0) {
            errors.discount = "Discount cannot be negative.";
        }

        if (!formData.stock) {
            errors.stock = "Stock is required.";
        } else if (parseInt(formData.stock) < 0) {
            errors.stock = "Stock cannot be negative.";
        }

        if (!images || images.length === 0) {
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
            const uploadPromises = Array.from(images).map(async (file) => {
                const { data, error } = await supabase.storage.from('products').upload(`${formData.category}/${formData.brand}/${formData.productId}/${file.name}`, file, {
                    upsert: true,
                    contentType: 'image/jpeg',
                });
                if (data) {
                    const { data } = supabase.storage.from('products').getPublicUrl(`${formData.category}/${formData.brand}/${formData.productId}/${file.name}`);
                    imageurls.push(data.publicUrl);
                } else if (error) {
                    console.log(error.message);
                }
            });
            await Promise.all(uploadPromises);
            return true;
        } else {
            return false;
        }

    }

    const insertData = async () => {
        const { data, error } = await supabase
            .from('product')
            .insert({
                product_id: formData.productId,
                product_name: formData.productName,
                model_no: formData.modelNo,
                category: formData.category.toLowerCase(),
                price: parseFloat(formData.price),
                easy_deals_plans: formData.edPlans,
                stock: parseInt(formData.stock),
                description: formData.description,
                specification: formData.specifications,
                special_description: formData.specialdes,
                images: imageurls,
                discount: parseFloat(formData.discount),
                brand: formData.brand
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

    const handleImageRendering = (i: number) => {
        if (images) {
            const urls = Array.from(images).map(file => URL.createObjectURL(file));
            return <img src={urls[i]} />
        }
    };

    return (
        <>
            <div className="w-full flex p-5 bg-slate-100">
                <div className="bg-white shadow-md rounded-lg w-full p-4 md:flex block">
                    <form onSubmit={handleSubmit} className="w-full sm:flex block" name="addProductForm">
                        <div className="space-y-4 w-full md:max-w-1/2 border-0 sm:border-r-slate-400 sm:border-r-2 p-2">
                            <div className="space-y-2">
                                <label htmlFor="productId" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Product Id</label>
                                <input
                                    type="text"
                                    name="productId"
                                    placeholder="product id"
                                    value={formData.productId}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                                {formErrors.productId && <span className="text-red-500 text-xs">{formErrors.productId}</span>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="productName" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Product Name</label>
                                <input
                                    type="text"
                                    name="productName"
                                    placeholder="product name"
                                    value={formData.productName}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                                {formErrors.productName && <span className="text-red-500 text-xs">{formErrors.productName}</span>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="modelNo" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Item Code</label>
                                <input
                                    type="text"
                                    name="modelNo"
                                    placeholder="model number"
                                    value={formData.modelNo}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                                {formErrors.modelNo && <span className="text-red-500 text-xs">{formErrors.modelNo}</span>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="category" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                                {formErrors.category && <span className="text-red-500 text-xs">{formErrors.category}</span>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="description" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md h-24 dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                                {formErrors.description && <span className="text-red-500 text-xs">{formErrors.description}</span>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="specialdes" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Special Description</label>
                                <textarea
                                    name="specialdes"
                                    value={formData.specialdes}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md h-16 dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                            </div>

                        </div>
                        <div className="space-y-4 w-full md:max-w-1/2 p-2">
                            <div className="space-y-2">
                                <label htmlFor="brand" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Brand</label>
                                <input
                                    type="text"
                                    name="brand"
                                    placeholder="brand"
                                    value={formData.brand}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />

                            </div>
                            <div className="space-y-2">
                                <label htmlFor="specifications" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Specifications</label>
                                <textarea
                                    name="specifications"
                                    value={formData.specifications}
                                    onChange={handleInputChange}
                                    className="w-full p-1 border rounded-md h-24 dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                            </div>
                            <div className="block sm:flex w-full items-center gap-2">
                                <div className="sm:w-1/2 w-full">
                                    <label htmlFor="price" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                    />
                                    {formErrors.price && <span className="text-red-500 text-xs">{formErrors.price}</span>}
                                </div>
                                <div className="sm:w-1/2 w-full">
                                    <label htmlFor="discount" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Discount</label>
                                    <input
                                        type="number"
                                        name="discount"
                                        placeholder="discount"
                                        value={formData.discount}
                                        onChange={handleInputChange}
                                        className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                    />
                                    {formErrors.discount && <span className="text-red-500 text-xs">{formErrors.discount}</span>}
                                </div>
                            </div>
                            <div className="block sm:flex w-full items-center gap-2">
                                <div className="sm:w-1/2 w-full">
                                    <label htmlFor="stock" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Stock</label>
                                    <input
                                        type="number"
                                        name="stock"
                                        placeholder="stock"
                                        value={formData.stock}
                                        onChange={handleInputChange}
                                        className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                    />
                                    {formErrors.stock && <span className="text-red-500 text-xs">{formErrors.stock}</span>}
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="edPlans" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">EasyDeals Plans</label>
                                    <input
                                        type="checkbox"
                                        name="edPlans"
                                        checked={formData.edPlans}
                                        onChange={handleInputChange}
                                        className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <label htmlFor="images" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Images</label>
                                <div className="flex gap-2 my-2 justify-between w-full">
                                    <input
                                        type="file"
                                        className="hidden"
                                        id='files'
                                        onChange={(e) => {
                                            setImages(e.target.files)
                                        }}
                                        multiple
                                    />
                                    {[0, 1, 2, 3, 4].map((index) =>
                                        <div key={index} className="">
                                            <label
                                                htmlFor={`files`}
                                                className="flex cursor-pointer"
                                            >
                                                <div className="bg-gray-200 rounded-lg p-4 text-center sm:w-24 sm:h-24 w-12 h-12 flex justify-center items-center overflow-hidden relative">
                                                    <span className="text-gray-500 font-semibold text-xs">
                                                        {handleImageRendering(index)}
                                                    </span>
                                                </div>
                                            </label>
                                        </div>)
                                    }
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

export default AddProducts;