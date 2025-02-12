import React from 'react';

import { PersonStanding, UserPlus } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../LanguageSelector';

const Navbar = () => {
    const { t } = useTranslation();

    const dropdownItems = [
        { label: 'Newsletter', href: '#' },
        { label: 'Purchases', href: '#' },
        { label: 'Downloads', href: '#' },
        { label: 'Team Account', href: '#' },
    ];
    return (
        <div>
            <div style={{
                background: 'linear-gradient(to right, #2ab998 0%, #2989d8 30%, #428dcb 33%, #c2579b 67%, #c2579b 67%, #c2579b 75%, #ec7026 100%)',
                height: '25px', //example
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'center',
                color: 'white'
            }}
                className='flex items-center justify-between p-4'>
                <div className='flex ml-5 gap-3'>
                    <div className=''>

                        <img src="https://static.mygov.in/innovateindia/images/flag.jpg" alt="GOVERNMENT OF INDIA logo" className='h-5 w-6 '></img>
                    </div>
                    <div className='text-[12px]'>

                        {t("title")}
                    </div>



                </div>
                <div className='flex  items-center space-x-4'>
                    <div className='text-[12px]'>
                    {t("contant")}
                    </div>
                    {/* <div>
                        <LanguageDropdown />
                    </div> */}
                    {/* <div className=''>
                        <Dropdown label="Actions" items={dropdownItems} />
                    </div> */}
                    <div className='flex items-center'> {/* Added items-center to vertically center the content */}
                        <div className='mr-2'>
                            <PersonStanding />
                        </div>
                        <div className='border-l h-10 '></div>
                    </div>

                    <div>
                        <UserPlus />
                    </div>
                    <div>
                        <LanguageSelector />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
