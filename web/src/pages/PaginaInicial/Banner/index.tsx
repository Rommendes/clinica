
import styled from "styled-components";
import BgImg from '../Assets/banner.png'
import Doutor from "../Assets/Doutor 1.png";
import Doutora from "../Assets/Doutor2.png";


const BannerContainer = styled.section`
width: 100%;
height: 300px; /* Ajuste conforme necessário */
justify-content: space-between;
align-items: center;
padding: 2em;
background-color: var(--azul-claro);
background-image: url(${BgImg});
background-size: cover;
background-position: center;
color: white;
position: relative;
display: flex;

margin-left: 30px;


  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos no mobile */
    height: auto;
  }
  
`

const Titulo = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 0.5em
   font-weight: 700;
  
`;

const Subtitulo = styled.p`
  font-size: 1.2rem;
  margim: 1em 0
  color: white;
  margin-top: 0; /* Remove o espaço acima do subtítulo */
  margin-bottom: 0; /* Remove o espaço abaixo do subtítulo */
`;
const ImagemContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 0
  heigth: 100%;
  position: relative;
  padding-top: 29px;

  @media (max-width: 768px) {
    margin-top: 1em;
    
  }
`;
const TextoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
    margin-left: 40px;

`;


const Imagem = styled.img`
   height: 335px; /* Faz a imagem ocupar toda a altura do banner */
  width: 200px; /* Mantém a proporção */
  object-fit: cover; /* Ajusta o conteúdo */
  position: relative;
  
  &:nth-child(1) {
    z-index: 2; /* Garante que a primeira imagem fique por cima */
    margin-right: -20px; /* Sobreposição leve à direita */
  }

  &:nth-child(2) {
    z-index: 1; /* Segunda imagem por baixo */
    margin-left: -20px; /* Sobreposição leve à esquerda */
  }
`;
export default function Banner (){
    return(
        <>
        <BannerContainer>

            <TextoContainer>
                <Titulo>Encontre profissionais de diversas especialidades</Titulo>
            <Subtitulo>Agende sua consulta com facilidade!</Subtitulo>
            </TextoContainer>

            <ImagemContainer>
                <Imagem src= {Doutor} alt="Primeiro médico"/>
                < Imagem src= {Doutora} alt= "Segundo médico"/>
            </ImagemContainer>

        </BannerContainer>
        </>
    )
}