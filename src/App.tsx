import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [temaDarkAtivo, setTemaDarkAtivo] = useState(false)

  function trocaTema() {
    setTemaDarkAtivo(!temaDarkAtivo)
  }

  return (
    <ThemeProvider theme={temaDarkAtivo ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
