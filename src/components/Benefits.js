//Librerias externas 
import React from 'react';


import { Card, CardText} from 'material-ui/Card';
import {redA400,lightBlue400,amberA400} from 'material-ui/styles/colors';


export default class Benefit extends React.Component{
    render(){
        return(
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
        )
    }
}
