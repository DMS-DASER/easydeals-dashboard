import React from 'react';
import AssetLogo from "../assets/images/AssetLogo.png";

const InvoicePage = () => {
  return (
    <div className="p-4 bg-white md:p-12">
      <div className="flex flex-col items-start justify-between pb-4 mb-6 border-b border-gray-300 md:flex-row">
        <div className="mb-4 md:mb-0">
          <img src={AssetLogo} alt="Logo" className="w-auto h-auto max-w-full" />
        </div>
        <div className="text-left md:text-right">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">INVOICE</h2>
          <p className="text-sm font-medium">Easydeals.lk</p>
          <p className="text-sm">www.easydeals.lk</p>
          <p className="text-sm">416-555-1212</p>
        </div>
      </div>

      <div className="flex flex-col justify-between mb-8 md:flex-row">
        <div className="mb-4 md:mb-0">
          <h3 className="mb-2 font-bold">BILL TO</h3>
          <h4 className="mb-2 font-medium">BILL TO</h4>
        </div>
        <div>
          <p className='font-medium'>Invoice Number: <span className='font-normal'>Invoice Number</span></p>
          <p className='font-medium'>Invoice Date: <span className='font-normal'>Invoice Date</span></p>
          <p className='font-medium'>Payment Due: <span className='font-normal'>Payment Due</span></p>
          <p className='font-medium'>Payment Status: <span className='font-normal'>Payment Status</span></p>
        </div>
      </div>

      <div className="flex flex-col justify-between mb-8 md:flex-row">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">www.easydeals.lk</p>
          <p className="text-sm">416-555-1212</p>
        </div>
        <div className="px-4 md:px-20 py-2 mb-4 text-white bg-[#45145a] w-full md:w-auto text-center md:text-left">
          <p>Amount Due (LKR): 2608.20</p>
        </div>
      </div>

      <div className="mb-8 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2 pr-2">Order ID</th>
              <th className="pb-2 pr-2">Product</th>
              <th className="pb-2 pr-2">Quantity</th>
              <th className="pb-2 pr-2">Price</th>
              <th className="pb-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((_, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 pr-2">001</td>
                <td className="py-2 pr-2">
                  <p className="font-bold">Platinum web hosting package</p>
                  <p className="text-sm text-gray-600">Platinum web hosting package</p>
                </td>
                <td className="py-2 pr-2">1</td>
                <td className="py-2 pr-2">60000.00</td>
                <td className="py-2">60000.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mb-8">
        <div className="w-full md:w-1/3">
          <div className="flex justify-between pb-4 mb-2 border-b border-gray-300 rounded-md">
            <span>Total:</span>
            <span>60000.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Amount Due (LKR):</span>
            <span>60000.00</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between mt-20 md:flex-row md:mt-40'>
        <p className="mb-4 text-sm text-center md:mb-0">This is an online generated invoice.</p>
        <button className="flex items-center justify-center px-8 py-1 text-white bg-[#45145a] w-full md:w-auto">
          Print
        </button>
      </div>
    </div>
  );
};

export default InvoicePage;