import React from "react";
import { CiWarning } from "react-icons/ci";

const AccessDenied = () => {
    return (
        <>
            <div className="flex justify-center text-center space-y-4 flex-col w-full h-screen items-center bg-slate-200 text-gray-700">
                <CiWarning color="red" size={70} />
                <div>
                    <p className="text-xl font-medium"> Error! </p>
                    <p className="text-md"> Access Denied. Sorry you don't have enough permission to access this page</p>
                </div>

            </div>

        </>
    );
}

export default AccessDenied;
