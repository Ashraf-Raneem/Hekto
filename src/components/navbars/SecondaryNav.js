import React from "react";
import { AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const SecondaryNav = () => {
    return (
        <div className="absolute top-0 right-0 left-0 bg-[#7E33E0] px-32 py-4">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <div className="flex flex-row">
                        <AiOutlineMail />
                        <span>ashrafraneem@gmail.com</span>
                    </div>
                    <div className="flex flex-row">
                        <BiPhoneCall />
                        <span>888-888-8888</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row">
                        <AiOutlineMail />
                        <span>English</span>
                    </div>
                    <div className="flex flex-row">
                        <BiPhoneCall />
                        <span>Login</span>
                    </div>
                    <div className="flex flex-row">
                        <AiOutlineMail />
                        <span>Wishlist</span>
                    </div>
                    <div className="flex flex-row">
                        <AiOutlineShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryNav;
