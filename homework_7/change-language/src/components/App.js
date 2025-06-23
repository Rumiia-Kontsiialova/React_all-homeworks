import React from "react";
import { LanguageProvider } from "./LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TextContent } from "./TextContent"


function App() {
  return (
        <LanguageProvider>
          <div className="App" style={{textAlign: 'center'}}> 
            <TextContent />
            <LanguageSwitcher />
          </div>
        </LanguageProvider>
  );
}

export default App;
