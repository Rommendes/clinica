import styled from "styled-components";
import Atividades from "./Atividades";
import Banner from "./Banner";
import Pesquisa from "./Pesquisa/index";
import Depoimentos from "./Depoimentos";

const Container = styled.div `
 display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--fundo-pagina);
`
function PaginaInicial (){
    return(
        <>
        
        <Container>
            <Banner/>
            <Pesquisa/>
            <Atividades/>
            <Depoimentos/>
        </Container>
            
        </>
        
    )

    
}
export default PaginaInicial;