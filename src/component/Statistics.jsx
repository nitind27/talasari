
import React from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

const Statistics = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-16 py-4 bg-white shadow-md  w-full max-w-full mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 ">
                <div>

                    <h2 className="text-[16px] font-semibold text-gray-700">{t("EmergencyContacts")}</h2>
                    <img src="https://www.mygov.in/sites/all/themes/mygov/images/statistic-arrow.png" alt="" />
                </div>

                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">1091 | 181</span> <br /> {t("WomenHelpline")}
                </div>
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">1098</span> <br />{t("childHelpline")}
                </div>
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">102 | 108 | 112 </span> <br /> {t("Ambulance")}
                </div>
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">1077</span> <br /> {t("RescueRelief")}
                </div>
                <div className="text-gray-700 text-sm">
                    <span className="font-semibold">1090</span> <br /> {t("CrimeStopper")}
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
