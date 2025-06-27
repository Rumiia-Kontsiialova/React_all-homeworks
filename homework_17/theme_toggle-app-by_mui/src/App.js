import { ThemeProvider, createTheme, Typography, CssBaseline, Button } from "@mui/material";
import { useState } from "react";


// createTheme ожидает строго определённую структуру объекта
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#1b0dba', // указывать только в таком формате или rgb
    },
    background: {
      default: '#ffffff',
    }
  }
})

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#99cbf0',
    },
    background: {
      default: '#000000'
    }
    
  }
})

function App() {
  // состояние, которое хранит текущее состояние темы
const [ isDarkTheme, setIsDarkTheme ] = useState(false);

//функция для переключения темы
const toggleTheme = () => {
  setIsDarkTheme(!isDarkTheme); // заменя true на false
}

// выбор темы в зависимости от состояния
const currentThema = isDarkTheme ? darkTheme : lightTheme;
// Если включён тёмный режим (statusTheme равно true), то использовать тему darkTheme, а если выключен — использовать lightTheme.

  return (
    <ThemeProvider theme={currentThema}>
      {/* CssBaseline сбрасывает стили браузера и применяет тему */}
    <CssBaseline />
    <div className="App">
      <Typography variant="h3">
        { isDarkTheme ? 'Dark Mode' : 'Light Mode' }
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
      Toggle Theme
      </Button>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
