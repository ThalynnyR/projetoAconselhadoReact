import React, { Component } from 'react';
import './App.css';
import TestAvatar from './tela1/TestAvatar'
import Perfil from './tela1/Perfil';
import Menu from './tela1/Menu';
import Typography from '@material-ui/core/Typography';

// import Avatar from '@material-ui/core/Avatar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
          
            <Menu />
          </header>
          
          <p className="menu-lateral">
           <Typography variant="h6" align='left'>Resumo</Typography>
            {/* <TestAvatar /> */}
            
          </p>
          <div><Perfil /></div>
       
        
      </div>
      
    );
  }
}

export default App;
