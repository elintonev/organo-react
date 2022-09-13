import React, { Component } from 'react';
import './Botao.css'

class Botao extends Component {
    render() { 
        return (
        <button className='botao'>
         {this.props.children}
    </button>
    );
    }
}

export default Botao;

// const Botao = (props) => {
//     return (<button className='botao'>
//         {props.children}
//     </button>)
// }

// export default Botao