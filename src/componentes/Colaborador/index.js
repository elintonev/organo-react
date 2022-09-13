import React, { Component } from "react";
import "./Colaborador.css";

class Colaborador extends Component {
  render() {
    return (
      <div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: this.props.corDeFundo }}>
          <img src={this.props.imagem} alt={this.props.nome} />
        </div>
        <div className="rodape">
          <h4>{this.props.nome}</h4>
          <h5>{this.props.cargo}</h5>
        </div>
      </div>
    );
  }
}

export default Colaborador;

// const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
//     return (<div className='colaborador'>
//         <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
//             <img src={imagem} alt={nome}/>
//         </div>
//         <div className='rodape'>
//             <h4>{nome}</h4>
//             <h5>{cargo}</h5>
//         </div>
//     </div>)
// }

// export default Colaborador
