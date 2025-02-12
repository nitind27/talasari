import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation("");

  useEffect(() => {
    i18n.changeLanguage('mr'); // Set default language to Marathi on component mount
  }, []); // Empty dependency array ensures this runs only once

  const changeLanguage = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div>
      <select onChange={changeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
