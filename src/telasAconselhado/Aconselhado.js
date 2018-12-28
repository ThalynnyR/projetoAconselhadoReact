import React, { Component } from 'react';
// import TestAvatar from './telasAconselhado/TestAvatar'
import Perfil from './Perfil';
import Menu from './Menu';
import Inicio from './Inicio'

class Aconselhado extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Menu />
                </header>
                     <Inicio />
                <div>
                    <Perfil />
                </div>
            </div>

        );
    }
}

export default Aconselhado;
