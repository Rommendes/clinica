//import './App.css';

import Titulo from "../../components/Titulo"
import Botao from "../../components/Botao"
import Tabela from "../../components/Tabela"
import Subtitulo from "../../components/Subtitulo"
import Grafico from "../../components/Grafico"
import Avaliacao from "../../components/Avaliacao"

import useDadosConsulta from "../../useDadosConsulta"
import useDadosProfissional from "../../useDadosProfissional"
import Container from "../../components/Container"

export default function Dashboard (){
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();
  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição");
  }
  
//CÓDIGO INACESSÍVEL COPIADO DO - ts(7027)
    return ( 
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/24</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
)
}