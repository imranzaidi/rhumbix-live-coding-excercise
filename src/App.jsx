import React, {useState, useEffect} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Search from './Search';
import './App.css';


const appTheme = createMuiTheme({
  palette: {
    type: 'dark',
    error: {
      contrastText: "#222222",
      dark: "#b2102f",
      light: "#ff4569",
      main: "#ff1744"
    },
    primary: {
      contrastText: "#ffffff",
      dark: "#171717",
      light: "#4e4e4e",
      main: "#222222"
    },
    secondary: {
      contrastText: "#000000",
      dark: "#4898ae",
      light: "#85e1fa",
      main: "#67daf9"
    }
  }
});


function App() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    console.log('New image:', imageUrl);
  }, [imageUrl]);

  return (
    <MuiThemeProvider theme={appTheme}>
    <div className="App">
      <header className="App-header">
        <Search setImageUrl={setImageUrl}/>
      </header>

      <div className="image-container">
        {imageUrl && <img src={imageUrl} alt="Giphy search result."/>}
      </div>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
