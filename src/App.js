import React, { Component } from 'react';
import './App.css';
// import TestAvatar from './telasAconselhado/TestAvatar'
import Aconselhado from './telasAconselhado/Aconselhado'
import PerfilBP from './telasBP/PerfilBP'
import { BrowserRouter, Route } from 'react-router-dom'
// import Avatar from '@material-ui/core/Avatar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/aconselhado' component={Aconselhado}></Route>
          <Route path='/perfil' component={PerfilBP}></Route>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
