import React, { Component } from 'react';

class App2 extends Component {
    constructor() {
        super();
        this.state = { 

         foods:[   
            'ice cream',
            'orange',
            'pineapple',
            'melon',
            'apple' 
           ] 
        }
    }
    render() 
    { 
        return( 
            <div>
            {this.state.foods.map((e,i)=>{return <h2 key={i} >{e}</h2>})}
            </div>
        );


    }
}
 
export default App2;