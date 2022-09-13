import React, { Component } from 'react';
import Colaborador from '../Colaborador'
import './Time.css'

class Time extends Component {
    render() { 
        return (
            (this.props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: this.props.corSecundaria}}>
                <h3 style={{ borderColor: this.props.corPrimaria }}>{this.props.nome}</h3>
                <div className='colaboradores'>
                    {this.props.colaboradores.map( colaborador => <Colaborador corDeFundo={this.props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
                </div>
            </section> 
        );
    }
}
 
export default Time;

// const Time = (props) => {
//     return (
//         (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corSecundaria}}>
//             <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
//             <div className='colaboradores'>
//                 {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
//             </div>
//         </section> 
//     )
// }

// export default Time