import React, { Component } from 'react';

import 'whatwg-fetch'

var ES6Promise = require("es6-promise");

ES6Promise.polyfill();

 

class ApiRender extends Component {

 

    constructor(props) {

        super(props);

        this.state = {

            elements: [],

            error: false,

            isLoaded: false

        };

    }

 

    componentDidMount() {

        //fetch('http://localhost:52064/api/SampleData/WebElementsError')

        fetch('urlAqui', {mode: 'no-cors'})

            .then(response => response.json())

            .then(data => {

                this.setState({

                    elements: data

                    , isLoaded: true

                });

                // console.log(JSON.parse(data));

            })

            .catch(error => {

                this.setState({

                    isLoaded: false

                    , error: true

                });

                console.log(error.toString());

            })

    }

 

    render() {

        const { error, isLoaded, elements } = this.state;

        if (error) {

            return <div>Failed to fetch</div>;

        } else if (!isLoaded) {

            return <div>Loading...</div>;

        } else {

            return (

 

                <div key={12321}>

                 {/* {JSON.stringify(elements)}                                                      */}

                   <div key={elements.emP_NO}>{elements.emP_NO} {elements.emP_NAME} {elements.mypd}</div>

               

               <div>                                                   

                  {elements.employeeProfileList.map(i=> {

                     return <div>{i.idade}</div>

                  })}

 

                </div>  

                </div>

               

            );

 

        }

    }

}

 

export default ApiRender;