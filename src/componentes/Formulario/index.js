import React, { Component } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      cargo: "",
      imagem: "",
      time: "Programação",
    };
  }

  aoSalvar = (evento) => {
    evento.preventDefault();
    this.props.aoColaboradorCadastrado({
      nome: this.state.nome,
      cargo: this.state.cargo,
      imagem: this.state.imagem,
      time: this.state.time,
    });

    this.setState({nome: "", cargo:"", imagem:"", time:"Programação"})
  };

  handleOnChangeNome = (evento) => this.setState({ nome: evento });

  handleOnChangeCargo = (evento) => this.setState({ cargo: evento });

  handleOnChangeImagem = (evento) => this.setState({ imagem: evento });

  handleOnChangeTime = (evento) => this.setState({ time: evento });


  render() {
    return (
      <section className="formulario">
        <form onSubmit={this.aoSalvar}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto
            obrigatorio={true}
            label="Nome"
            placeholder="Digite seu nome"
            valor={this.state.nome}
            aoAlterado={this.handleOnChangeNome}
          />
          <CampoTexto
            obrigatorio={true}
            label="Cargo"
            placeholder="Digite seu cargo"
            valor={this.state.cargo}
            aoAlterado={this.handleOnChangeCargo}
          />
          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            valor={this.state.imagem}
            aoAlterado={this.handleOnChangeImagem}
          />
          <ListaSuspensa
            obrigatorio={true}
            label="Time"
            itens={this.props.times}
            valor={this.state.time}
            aoAlterado={this.handleOnChangeTime}
          />
          <Botao>Criar Card</Botao>
        </form>
      </section>
    );
  }
}

export default Formulario;

// const Formulario = (props) => {

// const [nome, setNome] = useState('')
// const [cargo, setCargo] = useState('')
// const [imagem, setImagem] = useState('')
// const [time, setTime] = useState('')

// const aoSalvar = (evento) => {
//     evento.preventDefault()
//     props.aoColaboradorCadastrado({
//         nome,
//         cargo,
//         imagem,
//         time
//     })
//     setNome('')
//     setCargo('')
//     setImagem('')
//     setTime('')
// }

// return (
//     <section className="formulario">
//         <form onSubmit={aoSalvar}>
//             <h2>Preencha os dados para criar o card do colaborador</h2>
//             <CampoTexto
//                 obrigatorio={true}
//                 label="Nome"
//                 placeholder="Digite seu nome"
//                 valor={nome}
//                 aoAlterado={valor => setNome(valor)}
//             />
//             <CampoTexto
//                 obrigatorio={true}
//                 label="Cargo"
//                 placeholder="Digite seu cargo"
//                 valor={cargo}
//                 aoAlterado={valor => setCargo(valor)}
//             />
//             <CampoTexto
//                 label="Imagem"
//                 placeholder="Digite o endereço da imagem"
//                 valor={imagem}
//                 aoAlterado={valor => setImagem(valor)}
//             />
//             <ListaSuspensa
//                 obrigatorio={true}
//                 label="Time"
//                 itens={props.times}
//                 valor={time}
//                 aoAlterado={valor => setTime(valor)}
//             />
//             <Botao>
//                 Criar Card
//             </Botao>
//         </form>
//     </section>
// );
// }

// export default Formulario
