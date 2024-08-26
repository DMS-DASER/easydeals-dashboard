import React, {useState, useEffect} from "react";

const AddProducts = () => {
    const [images,setImages] = useState<FileList | null>()
    return (
        <>
            <div className="w-full flex p-5 bg-slate-100">
                <div className="bg-white shadow-md rounded-lg w-full p-4 md:flex block">
                    <div className="space-y-4 w-full md:max-w-1/2 border-0 sm:border-r-slate-400 sm:border-r-2 p-2">
                        <div className="space-y-2">
                            <label htmlFor="productId" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Product Id</label>
                            <input
                                type="text"
                                name="productId"
                                placeholder="product id"
                                className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="productName" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                placeholder="product name"
                                className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="modelNo" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Item Code</label>
                            <input
                                type="text"
                                name="modelNo"
                                placeholder="model number"
                                className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="category" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="category"
                                className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="description" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Description</label>
                            <textarea
                                name="description"
                                className="w-full p-1 border rounded-md h-24 dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="specialdes" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Special Description</label>
                            <textarea
                                name="specialdes"
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
                                className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="specifications" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Specifications</label>
                            <textarea
                                name="specifications"
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
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                            </div>
                            <div className="sm:w-1/2 w-full">
                                <label htmlFor="discount" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Discount</label>
                                <input
                                    type="number"
                                    name="discount"
                                    placeholder="discount"
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                            </div>
                        </div>
                        <div className="block sm:flex w-full items-center gap-2">
                            <div className="sm:w-1/2 w-full">
                                <label htmlFor="stock" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">Stock</label>
                                <input
                                    type="number"
                                    name="stock"
                                    placeholder="stock"
                                    className="w-full p-1 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-sm dark:text-gray-800 focus:border-purple-600"
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="edPlans" className="block text-sm font-semibold text-gray-600 dark:text-gray-800">EasyDelas Plans</label>
                                <input
                                    type="checkbox"
                                    name="edPlans"
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
                                {[1, 2, 3, 4, 5].map((index) =>
                                    <div key={index} className="">
                                        <label
                                            htmlFor={`files`}
                                            className="flex cursor-pointer"
                                        >
                                            <div className="bg-gray-200 rounded-lg p-4 text-center sm:w-24 sm:h-24 w-12 h-12 flex justify-center items-center overflow-hidden relative">
                                                <span className="text-gray-500 font-semibold text-xs">
                                                    {index}
                                                </span>
                                            </div>
                                        </label>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="space-y-2">
                            <input
                                type="submit"
                                name="brand"
                                placeholder="Submit"
                                className="w-full rounded-md p-2 text-white shadow-md shadow-gray-400 bg-purple-600"
                            />
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
}

export default AddProducts;