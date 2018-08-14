import React, { Component } from 'react';


class TextBox extends Component {
    constructor(){
        super();
        this.state={
            message: ''
        }
    }
    handleChange(value){
        this.setState({message:value })
    }
    render(){
        return(
            <div className='TextBox'>
            <input onChange={(e)=>this.handleChange(e.target.value)} type='text'/>
            <p> {this.state.message}</p>
            </div>

        );
    }
}

export default TextBox;





















// class TextBox extends Component {
//     constructor(){
//         super();

//         this.state={

//             message: ''
//         }
//     }
//     handleChange(value){
//         this.setState({message:value})
//     }
    
//     render() {
//         return(
//             <div className='TextBox'>
//             <input onChange={(e)=>this.handleChange(e.target.value)} type='text'/>
//             <p> {this.state.message} </p>



//             </div>
//         );
//     }
// }

// export default TextBox;



