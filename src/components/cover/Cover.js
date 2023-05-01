import React from "react";

const Cover = () => {
    return (
        <div className="h-80 bg-[#F2F0FF] flex justify-center items-center w-100">
            <div className="flex flex-col justify-start mx-16 text-center">
                <span className="text-xs text-[#FB2E86] my-2">Best new furniture for your castle</span>
                <span className="text-3xl">New furniture collection trends in 2023</span>
                <span className="text-xs text-[#8a8fb9] my-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in
                    justo.
                </span>
                <button className="p-1 bg-[#FB2E86] rounded-r my-[4px] mx-10 ">
                    <span className="my-0 mx-auto text-white text-xs">Shop Now</span>
                </button>
            </div>
        </div>
    );
};

export default Cover;
