import React, { useState, useEffect } from "react";

const languages = [
    { code: "mr", name: "मराठी" },
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },

];

const LanguageDropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("mr");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedLanguageName, setSelectedLanguageName] = useState("मराठी");

    useEffect(() => {
        loadGoogleTranslate();
    }, []);

    const loadGoogleTranslate = () => {
        const script = document.createElement("script");
        script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: "mr", includedLanguages: languages.map((l) => l.code).join(",") },
                "google_translate_element"
            );

            setTimeout(() => {
                setDefaultLanguage("mr");
            }, 1000);
        };
    };

    const setDefaultLanguage = (langCode) => {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = langCode;
            select.dispatchEvent(new Event("change"));
        }
    };

    const changeLanguage = (langCode) => {
        setSelectedLanguage(langCode);
        const selectedLang = languages.find((lang) => lang.code === langCode);
        if (selectedLang) {
            setSelectedLanguageName(selectedLang.name);
        }
        setDefaultLanguage(langCode);
        setShowDropdown(false);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="px-4 py-2 rounded-md text-white flex items-center cursor-pointer border"
            >
                🌍 {selectedLanguageName}
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-[#BE599D] border border-gray-300 rounded-md shadow-lg z-50">
                    <div className="grid grid-cols-1 gap-2 p-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`px-3 py-2 cursor-pointer text-sm text-left rounded-md notranslate ${selectedLanguage === lang.code ? "bg-[#E26A42] text-white" : "hover:bg-[#e26a4286]"
                                    }`}
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div id="google_translate_element" className="hidden"></div>
        </div>
    );
};

export default LanguageDropdown;
