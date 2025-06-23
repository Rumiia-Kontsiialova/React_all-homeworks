import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const translations = {
    en: {
        welcome: 'Welcome',
        descriptions: "Press the button and the language will change!"
    },
    de: {
        welcome: 'Willkommen',
        descriptions: 'Drücken Sie die Knopf und die Sprache ändert sich!'
    }
};

export const TextContent = () => {
    const { language } = useContext(LanguageContext)
    const texts = translations[language]

  return (
    <div style={{color: ' rgb(210, 152, 235)'}}>
        <h1>{texts.welcome}</h1>
        <p>{texts.descriptions}</p>
    </div>
  )
}

