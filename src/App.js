//Librerias externas
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card'
import {indigo400,redA400,lightBlue400,amberA400} from 'material-ui/styles/colors';

//Mis componentes
import Title from './components/Title';
import data from './requests/places';

//Mis hojas de estilo
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    console.log(data);
  }
    places(){
      return data.places.map(place=>{ //map transforma el arreglo en uno distinto
        return(
          <div className="col-xs-12 col-sm-4">
            <Card>
              <CardMedia>
                <img src={place.imageUrl}/>
              </CardMedia>
              <CardTitle title={place.title}></CardTitle>
              <CardText>{place.description}</CardText>
            </Card>
          </div>
        );
      })
    }
    

  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{"width":"80%", "margin":"0 auto"}}>
          <div className="Header-main">
              <Title></Title>
              <RaisedButton label="Crear cuenta gratuita" secondary={true} />
              <img className="Header-illustration" src={'/images/imagen0.png'}></img>
          </div>   

          <div>
          <ul>
                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{'backgroundColor': redA400}}>
                        <img src={'/images/imagen1.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>Califcaciones con emociones</h3>
                        <p>Califica tus lugares con experiencias, no con números</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
                
                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{'backgroundColor': lightBlue400}}>
                        <img src={'/images/imagen2.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>¿Sin internet? sin problemas</h3>
                        <p>Places funciona sin interner o en conexiones lentas</p>
                      </div>
                    </div>
                  </CardText>
                </Card>

                <Card className="Header-Benefit">
                  <CardText>
                    <div className="row">
                      <div className="Header-Benefit-image" style={{'backgroundColor': amberA400}}>
                        <img src={'/images/imagen3.png'}/>
                      </div>
                      <div className="Header-Benefit-content">
                        <h3>Tus lugares favoritos</h3>
                        <p>Define la lista de tus sitios favoritos</p>
                      </div>
                    </div>
                  </CardText>
                </Card>
              </ul>
          </div>




          </div>
        </div>
            <div style={{'backgroundColor': indigo400, 'padding': '50px', color: 'white'}}>
              <h3 style={{'fontSize': '30px'}}>Sitios populares</h3>
              <div className="row">
                {this.places()}
              </div> 
            </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
