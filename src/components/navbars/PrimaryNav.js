import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import SidebarNav from "./Sidebar";
import Dropdown from "../dropdowns/Dropdown";

const PrimaryNav = () => {
    const [searchValue, setSearchValue] = useState("");
    const [toggleSidebar, setToggleSidebar] = useState("");

    const toggleSidebarAction = () => setToggleSidebar(!toggleSidebar);

    return (
        <React.Fragment>
            <div className="md:mt-16 px-6 md:px-10 py-4 xl:px-60">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-between items-center w-full md:w-1/2">
                        <div className="flex flex-row">
                            <span className="text-[#0D0E43] text-2xl">Hekto</span>
                        </div>
                        <div className="block md:hidden flex flex-row items-center">
                            <Dropdown
                                head={<BsFillPersonFill className="cursor-pointer mx-4 text-xl text-[#7E33E0]" />}
                                style="right-0 mr-12"
                            >
                                <div className="flex flex-row items-center mb-1 cursor-pointer">
                                    <span className="text-[#0D0E43] ml-2 text-sm mr-1">Login</span>
                                    <BiPhoneCall className="text-[#0D0E43] text-xs" />
                                </div>
                                <div className="flex flex-row items-center mb-1 cursor-pointer">
                                    <span className="text-[#0D0E43] ml-2 text-sm mr-1">Wishlist</span>
                                    <AiOutlineMail className="text-[#0D0E43] text-xs" />
                                </div>
                                <div className="flex flex-row items-center mb-1 cursor-pointer">
                                    <span className="text-[#0D0E43] ml-2 text-sm mr-1">Cart</span>
                                    <AiOutlineShoppingCart className="text-[#0D0E43] text-xs" />
                                </div>
                            </Dropdown>
                            <GiHamburgerMenu
                                className="cursor-pointer text-xl text-[#7E33E0]"
                                onClick={() => toggleSidebarAction()}
                            />
                        </div>
                        <div className="flex flex-row md:block hidden">
                            <span className="text-[#0D0E43] mx-2 cursor-pointer hover:text-[#FB2E86] transition ease-out">
                                Home
                            </span>
                            <span className="text-[#0D0E43] mx-2 cursor-pointer hover:text-[#FB2E86] transition ease-out">
                                Pages
                            </span>
                            <span className="text-[#0D0E43] mx-2 cursor-pointer hover:text-[#FB2E86] transition ease-out">
                                Products
                            </span>
                            <span className="text-[#0D0E43] mx-2 cursor-pointer hover:text-[#FB2E86] transition ease-out">
                                Blog
                            </span>
                            <span className="text-[#0D0E43] mx-2 cursor-pointer hover:text-[#FB2E86] transition ease-out">
                                Shop
                            </span>
                            <span className="text-[#0D0E43] mx-2 cursor-pointer hover:text-[#FB2E86] transition ease-out">
                                Contact
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row md:block hidden">
                        <div className="flex flex-row">
                            <input
                                type="text"
                                className="rounded-l border-t-2 border-l-2 border-b-2 border-slate-300 w-60 outline-none px-2 focus:border-slate-500 transition ease-out"
                                onChange={(ev) => setSearchValue(ev.value)}
                                value={searchValue}
                            />
                            <button className="my-0 mx-auto p-2 bg-[#FB2E86] rounded-r">
                                <AiOutlineSearch className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {toggleSidebar && <SidebarNav />}
        </React.Fragment>
    );
};

export default PrimaryNav;
