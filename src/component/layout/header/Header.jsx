import React from 'react'
import Dropdown from '../../common/Dropdown'
import { CircleUser, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const Header = () => {
    const { t } = useTranslation();


    const abouttalasari = [
        { label: `${t("History")}`, href: '#' },

        { label: `${t("GeographicalInformation")}`, href: '#' },
        {
            label: `${t("AdministrativeSetup")}`, submenu: [
                { label: `${t("Constituencies")}`, href: "/settings/" },
                { label: `${t("Villages")}`, href: "/settings/security" },
                // { label: "Collectors Since it’s Formation", href: "/settings/security" },
            ],
        },
        { label: `${t("AdministrativeOfficer")}`, href: '#' },
        { label: `${t("MapofTalasari")}`, href: '#' },

        // { label: 'Constituencies', href: '#' },
    ];
    const Directory = [
        { label: `${t("DisasterManagement")}`, href: '#' },
        { label: `${t("Helpline")}`, href: '#' },
        { label: `${t("ImportantTelephoneNumbers")}`, href: '#' },
        { label: `${t("STDPINCodes")}`, href: '#' },
        { label: `${t("PublicUtilities")}`, href: '#' },

        // { label: 'Collectors Since it’s Formation', href: '#' },
    ];
    const Tourism = [
        { label: `${t("HowtoReach")}`, href: '#' },
        { label: `${t("CultureHeritage")}`, href: '#' },
        // { label: 'Important Telephone Numbers', href: '#' },
        { label: `${t("ReligiousPlaces")}`, href: '#' },
        { label: `${t("TouristPlaces")}`, href: '#' },

    ];

    const Notices = [
        {
            label: `${t("Events")}`, submenu: [
                { label: `${t("HarGharTiranga")}`, href: "/settings/" },
            ],
        },
        { label: `${t("UpcomingEvents")}`, href: '#' },
        { label: `${t("Notice")}`, href: '#' },
        { label: `${t("Announcements")}`, href: '#' },
        { label: `${t("Recruitment")}`, href: '#' },
        { label: `${t("Tenders")}`, href: '#' },
        { label: `${t("Welfare schemes")}`, href: '#' },


    ];
    const More = [
        { label: `${t("MediaGallery")}`, href: "#" },
        { label: `${t("Rti")}`, href: '#' },
        { label: `${t("NationalInformaticsCentre")}`, href: '#' },



    ];

    return (
        <div className='flex items-center justify-between p-2'>
            <div className=''>
                <img
                    src="/Img/talasari logos.jpg"
                    alt="Mygov Logo"
                    className="h-20 bg-cover" // Adjust the height as needed
                />
            </div>
            <div className='flex items-center space-x-4 '>


                <div className=''>
                    <Dropdown label={t("Home")} items={[]} />
                    {/* Home */}
                </div>
                <div>
                    <Dropdown label={t("AboutTalasari")} items={abouttalasari} />
                </div>
                <div>
                    <Dropdown label={t("Directory")} items={Directory} />
                </div>
                <div>
                    <Dropdown label={t("Tourism")} items={Tourism} />
                </div>

                <div className='text-sm font-semibold text-gray-900 uppercase'>
                    {/* <Dropdown label="Forms" items={Forms} /> */}
                    {t('Forms')}
                </div>
                <div>
                    <Dropdown label={t('Notices')} items={Notices} />
                </div>
                <div className=''>
                    <Dropdown label={t('Schemes')} items={[]} />
                    {/* Schemes */}
                </div>
                <div>
                    <Dropdown label={t('More')} items={More} />
                </div>


                <div>
                    <Search className="h-5 w-5 text-gray-700 hover:text-gray-900" />
                </div>

            </div>
        </div>
    )
}

export default Header
