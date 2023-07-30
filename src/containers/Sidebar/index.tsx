import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'

import { BotaoTema, Descricao, ContainerAside } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <ContainerAside>
      <Avatar />
      <Titulo fontSize={20}>Thiago Souza</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        oThiagoSouza
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Futuro desenvolvedor Full-stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </ContainerAside>
  </aside>
)

export default Sidebar
