//Librerias externas
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Mis componentes
import data from './requests/places';
import Home from './pages/Home';

//Mis hojas de estilo
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    console.log(data);
  }
    
    

  render() {
    return (
      <MuiThemeProvider>
          <Home></Home>
      </MuiThemeProvider>
    );
  }
}

export default App;
