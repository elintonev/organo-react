import React, { Component } from "react";
import "./CampoTexto.css";

class CampoTexto extends Component {

  aoDigitado = (evento) => {
    this.props.aoAlterado(evento.target.value);
  };
  
  render() {
    const placeholderModificada = `${this.props.placeholder}...`;
    return (
      <div className="campo-texto">
        <label>{this.props.label}</label>
        <input
          value={this.props.valor}
          onChange={this.aoDigitado}
          required={this.props.obrigatorio}
          placeholder={placeholderModificada}
        />
      </div>
    );
  }
}

export default CampoTexto;

// const CampoTexto = (props) => {

//     const placeholderModificada = `${props.placeholder}...`

//     const aoDigitado = (evento) => {
//         props.aoAlterado(evento.target.value)
//     }

//     return (
//         <div className="campo-texto">
//             <label>
//                 {props.label}
//             </label>
//             <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
//         </div>
//     )
// }

// export default CampoTexto
