import React, { useState } from 'react';

const Card = ({ image, title, content, buttonText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full max-w-sm  relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href="#" className='relative'>
                <img className="rounded-lg w-full h-48 object-cover" src={image} alt={title} />
            </a>
            <div className="p-5">
                {/* <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {content}
                </p>
                <div className="absolute bottom-44 left-0 right-0 flex justify-center opacity-0 transition-opacity duration-300 ease-in-out" style={{ opacity: isHovered ? 1 : 0 }}>
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {buttonText}

                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
