import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useContext(LanguageContext)

  return (
    <div>
        <button onClick={toggleLanguage} style={{background: ' rgb(210, 152, 235)', border: '2px solid rgb(22, 35, 222)', borderRadius: '8px', padding: '8px 16px'}}>
            {language === "en" ? 'Switch to Deutch' : 'Auf Englisch umschalten'}
        </button>
    </div>
  )
}
