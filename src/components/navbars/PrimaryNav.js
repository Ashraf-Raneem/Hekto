import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const PrimaryNav = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="absolute top-0 right-0 left-0 bg-[#7E33E0] px-32 py-4">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <div className="flex flex-row">
                        <span>Hekto</span>
                    </div>
                    <div className="flex flex-row">
                        <span>Home</span>
                        <span>Pages</span>
                        <span>Products</span>
                        <span>Blog</span>
                        <span>Shop</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row">
                        <input type="text" onChange={(ev) => setSearchValue(ev.value)} value={searchValue} />
                        <button className="my-0 mx-auto p-2 bg-[#FB2E86] rounded">
                            <AiOutlineSearch />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimaryNav;
