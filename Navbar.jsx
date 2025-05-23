import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/"><img src="/logo.png" alt="Logo" className="w-10 h-10" /></Link>
      <ul className="flex space-x-4 rtl:space-x-reverse">
        <li><Link to="/">{t('menu')}</Link></li>
        <li><Link to="/about">{t('about')}</Link></li>
        <li><Link to="/contact">{t('contact')}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
