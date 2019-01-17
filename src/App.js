//Librerias externas
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card'
import {indigo400,redA400,lightBlue400,amberA400} from 'material-ui/styles/colors';

//Mis componentes
import Title from './components/Title';

//Mis hojas de estilo
import './App.css';


class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{"width":"80%", "margin":"0 auto"}}>
          <div className="Header-main">
              <Title></Title>
              <RaisedButton label="Crear cuenta gratuita" primary={true} />
              <img className="Header-illustration" src={'/images/imagen0.png'}></img>
          </div>       
          </div>
        </div>
            <div style={{'backgroundColor': indigo400, 'padding': '50px'}}>
              <ul>
                <Card className="Header-Benefit">
                  <CardText style={{'backgroundColor': redA400}}>
                    <img src={'/images/imagen0.png'}></img>
                    <h3>Califcaciones con emociones</h3>
                    <p>Califica tus lugares con experiencias, no con números</p>
                  </CardText>
                </Card>
                <Card className="Header-Benefit">
                  <CardText style={{'backgroundColor': redA400}}>
                    <img src={'/images/imagen1.png'}></img>
                    <h3>¿Sin internet? sin problemas</h3>
                    <p>Places funciona sin interner o en conexiones lentas</p>
                  </CardText>
                </Card>
                <Card className="Header-Benefit">
                  <CardText style={{'backgroundColor': redA400}}>
                    <img src={'/images/imagen2.png'}></img>
                    <h3>Tus lugares favoritos</h3>
                    <p>Define la lista de tus sitios favoritos</p>
                  </CardText>
                </Card>
              </ul> 
            </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
