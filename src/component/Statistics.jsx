
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Statistics = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-16 py-4 bg-white shadow-md  w-full max-w-full mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 ">
                <div>

                    <h2 className="text-[16px] font-semibold text-gray-700">Emergency Contacts</h2>
                    <img src="https://www.mygov.in/sites/all/themes/mygov/images/statistic-arrow.png" alt="" />
                </div>
                
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">1091 | 181</span> <br /> Women Helpline
                </div>
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">1098</span> <br /> child Helpline
                </div>
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">102 | 108 | 112 </span> <br /> Ambulance
                </div>
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">1077</span> <br /> Rescue & Relief
                </div>
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">1090</span> <br /> Crime Stopper
                </div>

            </div>
            {/* <div className="mt-4 md:mt-0">
                <a
                    href="#"

                >
                    <img src="https://www.mygov.in/sites/all/themes/mygov/images/whatsapp-channel.svg" alt="" className="h-20" />
                </a>
            </div> */}
        </div>
    );
};

export default Statistics;
