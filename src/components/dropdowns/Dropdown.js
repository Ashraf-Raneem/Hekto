import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Dropdown = (props) => {
    const { children, head, style, options } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const ref = useRef();

    useEffect(() => {
        options && setSelected(options[0].name);
    }, []);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className="flex flex-col" onClick={() => setIsOpen(!isOpen)} ref={ref}>
            {head ? (
                head
            ) : (
                <div className="flex flex-row items-center cursor-pointer">
                    <span className="text-[#f1f1f1] ml-2">{selected}</span>
                    {isOpen ? (
                        <BsArrowUp className="text-xs ml-1 mr-2 text-white" />
                    ) : (
                        <BsArrowDown className="text-xs ml-1 mr-2 text-white" />
                    )}
                </div>
            )}

            {isOpen && (
                <div
                    className={`absolute ${style} mt-10 top-2 z-40 rounded-l border-2 border-slate-300 p-2 pr-4 bg-white`}
                >
                    <ul>
                        {!children
                            ? options.map((item) => (
                                  <div
                                      className="flex flex-row items-center cursor-pointer"
                                      onClick={() => setSelected(item.name)}
                                      key={item.id}
                                  >
                                      <li className="text-[#0D0E43] text-sm ml-2 mr-1 mb-2">{item.name}</li>
                                      {selected === item.name && (
                                          <AiOutlineCheck className="text-xs text-[#7E33E0] ml-2" />
                                      )}
                                  </div>
                              ))
                            : children}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
