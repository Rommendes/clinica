import styled from 'styled-components';
import whatsapp from './assets/whatsapp.png';
import instagram from './assets/instagram.png';
import google from './assets/google.png';
import facebook from './assets/facebook.png';

const RodapeEstilizado = styled.footer`

color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`


const ListaEstilizada = styled.ul`
display: flex;
justify-content: center;
gap: 1.5em;
margin: 1em 0;
padding: 0
`


const ItemEstilizado = styled.li`
list-style-type: none;
a img {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`


function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={whatsapp} alt="logo do whatsapp" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={google} alt="logo do google" />
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#">
                        <img src={instagram} alt="logo do instagram" />
                    </a>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>Projeto fictício sem fins comerciais.</p>
        </RodapeEstilizado>
    )
}

export default Rodape;
