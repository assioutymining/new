import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="text-right p-2">
      <button
        onClick={() => i18n.changeLanguage('ar')}
        className="mx-1"
      >العربية</button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className="mx-1"
      >English</button>
    </div>
  );
}

export default LanguageSwitcher;
