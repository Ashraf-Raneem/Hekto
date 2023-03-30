import React from "react";
import { AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";

const SecondaryNav = () => {
    return (
        <div className="absolute top-0 right-0 left-0 bg-[#7E33E0] px-60 py-4">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center">
                        <AiOutlineMail size={18} className="text-[#f1f1f1]" />
                        <span className="text-[#f1f1f1] mr-2 ml-1">ashrafraneem@gmail.com</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <BiPhoneCall className="text-[#f1f1f1] mb-[2px]" />
                        <span className="text-[#f1f1f1] mr-2 ml-1">888-888-8888</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row">
                        <span className="text-[#f1f1f1] ml-2">English</span>
                        <BsArrowDown className="text-[#f1f1f1] mt-[0.8px]" />
                    </div>
                    <div className="flex flex-row">
                        <span className="text-[#f1f1f1] ml-2 mr-1">Login</span>
                        <BiPhoneCall className="text-[#f1f1f1] mt-[0.8px]" />
                    </div>
                    <div className="flex flex-row">
                        <span className="text-[#f1f1f1] ml-2 mr-1">Wishlist</span>
                        <AiOutlineMail className="text-[#f1f1f1] mt-[3px]" />
                    </div>
                    <div className="flex flex-row">
                        <AiOutlineShoppingCart size={22} className="text-[#f1f1f1] ml-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryNav;
