import React from 'react';
import { useTranslation } from 'react-i18next';

import './LanguageSwitcherCss.css'
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='lang-btn-wrapper'>
      <button className='btn' onClick={() => changeLanguage('en_US')}>English</button>
      <button className='btn' onClick={() => changeLanguage('hi_IN')}>Hindi</button>
      <button className='btn' onClick={() => changeLanguage('ar_SA')}>Arabic</button>
      <button className='btn' onClick={() => changeLanguage('de_DE')}>German</button>
    </div>
  );
}
