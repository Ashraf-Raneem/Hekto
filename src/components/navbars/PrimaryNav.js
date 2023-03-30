import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const PrimaryNav = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="mt-16 px-60 py-4 ">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center w-1/2">
                    <div className="flex flex-row">
                        <span className="text-[#0D0E43] text-2xl">Hekto</span>
                    </div>
                    <div className="flex flex-row">
                        <span className="text-[#0D0E43] mx-2">Home</span>
                        <span className="text-[#0D0E43] mx-2">Pages</span>
                        <span className="text-[#0D0E43] mx-2">Products</span>
                        <span className="text-[#0D0E43] mx-2">Blog</span>
                        <span className="text-[#0D0E43] mx-2">Shop</span>
                        <span className="text-[#0D0E43] mx-2">Contact</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row">
                        <input
                            type="text"
                            className="rounded-l border-t-2 border-l-2 border-b-2 border-slate-300 w-60"
                            onChange={(ev) => setSearchValue(ev.value)}
                            value={searchValue}
                        />
                        <button className="my-0 mx-auto p-2 bg-[#FB2E86] rounded-r my-[1px]">
                            <AiOutlineSearch className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimaryNav;
