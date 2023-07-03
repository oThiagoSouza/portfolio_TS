import Titulo from './Components/Title'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <div className="App">
      <>
        <EstiloGlobal />
        <Container>
          <Sidebar />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </>
    </div>
  )
}

export default App
