
 import styled from "styled-components";
 import logo from "./logo.png" 
 import { Step, StepLabel, Stepper } from "@mui/material";
 import React, { useState} from "react";
 import CampoDigitacao from "../../components/CampoDigitacao";
 import Botao from "../../components/Botao";
 import usePost from "../../usePost";
 import { useNavigate } from "react-router-dom";
import IClinica from "../../types/IClinica"


const Imagem = styled.img`
  padding: 2em 0;
`;

interface PropsCustomizadas {
    cor: string
}

const StepCustomizada = styled.div<PropsCustomizadas>`
    background-color: ${({cor}) => cor};
    width: 16px;
    height: 16px;
    border-radius: 50%;
`

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
`;

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between

`;


export default function Cadastro() {
    const [etapaAtiva, setEtapaAtiva] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [senhaVerificada, setSenhaVerificada] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [complemento, setComplemento] = useState('');
    const {cadastrarDados} = usePost();
    const navigate = useNavigate();

     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
         event.preventDefault(); // previne o envio padrão do formulário

      
        const clinica: IClinica = {
            email: email,
            nome: nome,
            senha: senha,
            endereco: {
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
                estado: estado
            }
        }

     if (etapaAtiva !== 0) {
            try {
                cadastrarDados({url: 'clinica', dados: clinica});
                navigate('/login');
            } catch (erro) {
                erro && alert('Erro ao cadastrar os dados')
            }
     }

   

        setEtapaAtiva(etapaAtiva + 1); // atualiza o estado da etapa para a próxima etapa
    }

    const avancarEtapa = ()=> {
      setEtapaAtiva((prevEtapa)=> prevEtapa + 1)
    }

    return (
        <>
        <Imagem src={logo} alt="Logo da Voll" />
        <Stepper activeStep={etapaAtiva}>
            <Step>
                <StepLabel 
                StepIconComponent={(props) => (
                    <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                )}
                />
            </Step>
            <Step>
            <StepLabel 
                StepIconComponent={(props) => (
                    <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                )}
                />
            </Step>
        </Stepper>

        {etapaAtiva === 0 ? (
                <>
                    <Titulo>Primeiro, alguns dados básicos:</Titulo>
                    <Formulario onSubmit={(e)=> {
                      e.preventDefault(); 
                      avancarEtapa();
                      }}>
                        <CampoDigitacao
                            tipo="text"
                            label="Nome"
                            valor={nome}
                            placeholder="Insira seu nome"
                            onChange={setNome}
                        />
                        <CampoDigitacao
                            tipo="text"
                            label="CNPJ"
                            valor={cnpj}
                            placeholder="Insira seu cnpj"
                            onChange={setCnpj}
                        />
                        <CampoDigitacao
                            tipo="email"
                            label="Email"
                            valor={email}
                            placeholder="Insira o endereço de e-mail para login"
                            onChange={setEmail}
                        />
                        <CampoDigitacao
                            tipo="password"
                            label="Senha"
                            valor={senha}
                            placeholder="Digite sua senha"
                            onChange={setSenha}
                        />
                        <CampoDigitacao
                            tipo="password"
                            label="Confirme a senha"
                            valor={senhaVerificada}
                            placeholder="Confirme sua senha"
                            onChange={setSenhaVerificada}
                        />
                        <BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
                    </Formulario>
                </>) : (
                <>
                     <Titulo>Agora, os dados técnicos:</Titulo>
    <Formulario onSubmit={handleSubmit}>
        <Container>
        <CampoDigitacao
            tipo="tel"
            label="Telefone" // Confirma que a label está correta
            valor={telefone}
            placeholder="(DDD) XXXXX-XXXX"
            onChange={setTelefone}
        />
        <CampoDigitacao
            tipo="number"
            label="CEP" // Corrige a label para "CEP"
            valor={cep}
            placeholder="Insira o CEP"
            onChange={setCep}
        />
        <CampoDigitacao
            tipo="text"
            label="Rua" // Corrige a label para "Rua"
            valor={rua}
            placeholder="Digite sua rua"
            onChange={setRua}
        />
        
            <CampoDigitacao
                tipo="number"
                label="Número" // Corrige a label para "Número"
                valor={numero}
                placeholder="Número"
                onChange={setNumero}
            />
            <CampoDigitacao
                tipo="text"
                label="Complemento" // Corrige a label para "Complemento"
                valor={complemento}
                placeholder="Complemento"
                onChange={setComplemento}
            />
            <CampoDigitacao
                tipo="text"
                label="Estado" // Corrige a label para "Estado"
                valor={estado}
                placeholder="Digite seu estado"
                onChange={setEstado}
            />
        </Container>
        <BotaoCustomizado type="submit">Cadastrar</BotaoCustomizado>
    </Formulario>
                </>
    )
    
} 
</> 
)
}