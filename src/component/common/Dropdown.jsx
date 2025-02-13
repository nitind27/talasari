import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    return (
        <div
            className="relative inline-block text-left"
            ref={dropdownRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Main Button */}
            <button
                type="button"
                className="inline-flex items-center uppercase gap-x-2 text-sm  text-gray-900"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {label}
                {items == "" ? "" : isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg "
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                    >
                        <div className="py-1" role="none">
                            {items.map((item, index) => {
                                return (
                                    <DropdownItem key={index} item={item} />
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const DropdownItem = ({ item }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    return (
        <div className="relative group"
            onMouseEnter={() => {
                if (item.submenu) {
                    setIsSubmenuOpen(true);
                }
            }}
            onMouseLeave={() => {
                setIsSubmenuOpen(false);
            }}>
            {/* Item with Submenu */}
            <a
                href={item.href || "#"}
                className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                role="menuitem"
            >
                {item.label}
                {item.submenu && <ChevronRight size={16} />}
            </a>

            {/* Submenu */}
            {item.submenu && (
                <AnimatePresence>
                    {isSubmenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute right-full top-0 mt-0 w-56 rounded-md bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <div className="py-1">
                                {item.submenu.map((subItem, subIndex) => (
                                    <a
                                        key={subIndex}
                                        href={subItem.href}
                                        target={subItem.target}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        {subItem.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    )
}

export default Dropdown;
