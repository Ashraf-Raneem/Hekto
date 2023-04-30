import React from "react";

const SidebarNav = () => {
    return (
        <div className="absolute top-0 bottom-0 left-0 flex flex-col bg-[#7E33E0] py-4 px-12 h-full w-4/12">
            <div className="flex flex-col items-center">
                <span className="text-[#f1f1f1] cursor-pointer text-2xl">Hekto</span>
                <span className="text-[#f1f1f1] cursor-pointer my-2">Home</span>
                <span className="text-[#f1f1f1] cursor-pointer my-1">Pages</span>
                <span className="text-[#f1f1f1] cursor-pointer my-1">Products</span>
                <span className="text-[#f1f1f1] cursor-pointer my-1">Blog</span>
                <span className="text-[#f1f1f1] cursor-pointer my-1">Shop</span>
                <span className="text-[#f1f1f1] cursor-pointer my-1">Contact</span>
            </div>
        </div>
    );
};

export default SidebarNav;
