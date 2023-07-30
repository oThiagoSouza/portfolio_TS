import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corFundoBotao};
  padding: 8px;
  font-size: 14px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
