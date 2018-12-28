import React, { Component } from 'react';
// import TestAvatar from './telasAconselhado/TestAvatar'
import MenuBP from './MenuBP';
import InicioBP from './InicioBP'
import PerfildoBP from './PerfildoBP';

class PerfilBP extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <MenuBP />
                </header>
                     <InicioBP />
                <div>
                    <PerfildoBP />
                    
                </div>
            </div>

        );
    }
}

export default PerfilBP;
