import React, {useState} from 'react';
import {MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IntegrationAutosuggest from './IntegrationAutosuggest';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#85e1fa'
    }
  }
});

// const autoCompleteWords = [
//   'about',
//   'above',
//   'across',
//   'app',
//   'apple',
//   'appreciate',
//   'bad',
//   'ball',
//   'balloon',
//   'bell',
//   'cat',
// ];

const searchStyles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 200
  },
  button: {
    margin: theme.spacing(),
    marginTop: 27
  },
  input: {
    display: 'none',
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const Search = ({ classes, setImageUrl }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit()');
    if (searchTerm) {
      const endpoint = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`;

      fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(json => {
          // console.log('json:', json);
          const { data } = json;

          try {
            const imageData = data[0];

            // console.log('imageData:', imageData);
            const { url } = imageData.images.original;
            // console.log('url:', url);
            setImageUrl(url);
          } catch (e) {
            console.log('Whoops!', JSON.stringify(e, null, 2));
          }
        });
    }
  };

  const handleChange = event => {
    const { value } = event.target;

    setSearchTerm(value);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        {/*<TextField id="search"*/}
        {/*           className={classes.textField}*/}
        {/*           label="Search"*/}
        {/*           name="search"*/}
        {/*           type="text"*/}
        {/*           margin="normal"*/}
        {/*           variant="filled"*/}
        {/*           onChange={handleChange}*/}
        {/*           required={true}/>*/}
        <IntegrationAutosuggest setSearchTerm={setSearchTerm}/>
        <Button className={classes.button} type="submit">GO</Button>
      </form>
    </MuiThemeProvider>
  )
};


export default withStyles(searchStyles)(Search);
