// src/ScrollToTop.js

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            style={{ background: 'linear-gradient(to right, #2ab998 0%, #2989d8 30%, #428dcb 33%, #c2579b 67%, #c2579b 67%, #c2579b 75%, #ec7026 100%)', }}
            className={`fixed cursor-pointer bottom-5 right-0  text-white rounded-full p-4 shadow-lg transition-all duration-300 transform flex items-center justify-center w-12 h-12 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp />
        </button>
    );
};

export default ScrollToTop;
