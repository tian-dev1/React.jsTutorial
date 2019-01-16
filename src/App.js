import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <section>
        <div>
          <div>
            <Title></Title>
            <button>Crear cuenta gratuita</button>
            <div>
              <ul>
                <li>
                  <h3>Califcaciones con emociones</h3>
                   <p>Califica tus lugares con experiencias, no con números</p>
                </li>
                <li>
                  <h3>¿Sin internet? sin problemas</h3>
                   <p>Places funciona sin interner o en conexiones lentas</p>
                </li>
                <li>
                  <h3>Tus lugares favoritos</h3>
                   <p>Define la lista de tus sitios favoritos</p>
                </li>
              </ul> 
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
