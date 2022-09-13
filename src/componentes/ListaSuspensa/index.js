import React, { Component } from 'react';
import './ListaSuspensa.css'

class ListaSuspensa extends Component {

    render() { 
        return (
            <div className='lista-suspensa'>
                <label>{this.props.label}</label>
                <select onChange={evento => this.props.aoAlterado(evento.target.value)} required={this.props.required} value={this.props.valor}>
                    {this.props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </div>
        );
    }
}
 
export default ListaSuspensa;

// const ListaSuspensa = (props) => {
//     return (
//         <div className='lista-suspensa'>
//             <label>{props.label}</label>
//             <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
//                 <option value=""></option>
//                 {props.itens.map(item => {
//                     return <option key={item}>{item}</option>
//                 })}
//             </select>
//         </div>
//     )
// }

// export default ListaSuspensa