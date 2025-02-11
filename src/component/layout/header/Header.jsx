import React from 'react'
import Dropdown from '../../common/Dropdown'
import { CircleUser, Search } from 'lucide-react';

const Header = () => {
    const dropdownItems = [
        { label: 'Newsletter', href: '#' },
        { label: 'Purchases', href: '#' },
        { label: 'Downloads', href: '#' },
        { label: 'Team Account', href: '#' },
    ];
    const abouttalasari = [
        { label: 'Administrative Officer', href: '#' },
        {
            label: 'Administrative Setup', submenu: [
                { label: "Constituencies", href: "/settings/" },
                { label: "Villages", href: "/settings/security" },
                // { label: "Collectors Since it’s Formation", href: "/settings/security" },
            ],
        },
        { label: 'History', href: '#' },
        { label: 'Geographical Information', href: '#' },
        { label: 'Map of Talasari', href: '#' },

        { label: 'Constituencies', href: '#' },
    ];
    const Directory = [
        { label: 'Disaster Management', href: '#' },
        { label: 'Helpline', href: '#' },
        { label: 'Important Telephone Numbers', href: '#' },
        { label: 'STD & PIN Codes', href: '#' },
        { label: 'Public Utilities', href: '#' },

        // { label: 'Collectors Since it’s Formation', href: '#' },
    ];
    const Tourism = [
        { label: 'How to Reach', href: '#' },
        { label: 'Culture & Heritage', href: '#' },
        { label: 'Important Telephone Numbers', href: '#' },
        { label: 'Religious Places', href: '#' },
        { label: 'Tourist Places', href: '#' },

    ];

    const Notices = [
        {
            label: 'Events', submenu: [
                { label: "Har Ghar Tiranga", href: "/settings/" },
            ],
        },
        { label: 'Upcoming Events', href: '#' },
        { label: 'Notice', href: '#' },
        { label: 'Announcements', href: '#' },
        { label: 'Recruitment', href: '#' },
        { label: 'Tenders', href: '#' },
        { label: 'Welfare schemes', href: '#' },


    ];
    const More = [
        { label: 'Media Gallery', href: "#" },
        { label: 'Rti', href: '#' },
        { label: 'National Informatics Centre ', href: '#' },



    ];

    return (
        <div className='flex items-center justify-between p-4 '>
            <div className=''>
                <img
                    src="/Img/talasari logos.jpg"
                    alt="Mygov Logo"
                    className="h-20 bg-cover" // Adjust the height as needed
                />
            </div>
            <div className='flex items-center space-x-4 '>


                <div className=''>
                    <Dropdown label="Home" items={[]} />
                    {/* Home */}
                </div>
                <div>
                    <Dropdown label="About Talasari" items={abouttalasari} />
                </div>
                <div>
                    <Dropdown label="Directory" items={Directory} />
                </div>
                <div>
                    <Dropdown label="Tourism" items={Tourism} />
                </div>

                <div className='text-sm font-semibold text-gray-900 uppercase'>
                    {/* <Dropdown label="Forms" items={Forms} /> */}
                    Forms
                </div>
                <div>
                    <Dropdown label="Notices" items={Notices} />
                </div>
                <div className=''>
                    <Dropdown label="Schemes" items={[]} />
                    {/* Schemes */}
                </div>
                <div>
                    <Dropdown label="More" items={More} />
                </div>


                <div>
                    <Search className="h-8 w-8 text-gray-700 hover:text-gray-900" />
                </div>

            </div>
        </div>
    )
}

export default Header
