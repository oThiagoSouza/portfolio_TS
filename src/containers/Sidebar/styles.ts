import styled from 'styled-components'
import { P } from '../../Components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
  text-align: center;
`

export const BotaoTema = styled.button`
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  border-radius: 16px;
  padding: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`
export const ContainerAside = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`
