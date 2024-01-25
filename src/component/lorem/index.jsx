// Lorem.js
import React from 'react';
import style from './style.module.css';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  hi: { nativeName: 'Hindi' }
};

function Lorem() {
  const { t, i18n } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>{t('description1')}</p>
      </div>
      <div className={style.description}>
        <h1>{t('description2.part1')}</h1>
        <p>{t('description2.part2')}</p>
      </div>
      <div className={style.description}>
        <h1>{t('description3.part1')}</h1>
        <p>{t('description3.part2')}</p>
      </div>
      <div className={`${style.languageSwitcher} ${style.description}`}>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            className={`${style.languageButton} ${i18n.resolvedLanguage === lng ? style.bold : ''}`}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Lorem;
