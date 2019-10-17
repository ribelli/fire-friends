import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {

    const { i18n } = useTranslation();

    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
    }
    return(
        <div>
            <button onClick={() => changeLanguage('ru')}>ru</button>
            <button onClick={() => changeLanguage('en')}>en</button>
        </div>
    )
};

export default LanguageSelect;
