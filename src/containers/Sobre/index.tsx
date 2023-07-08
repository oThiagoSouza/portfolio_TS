import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        quas voluptatibus voluptates repellendus, quo ducimus sit fugiat
        exercitationem ea harum nulla quae sed dolor? Incidunt nulla error eos
        alias iusto?
      </Paragrafo>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=oThiagoSouza&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oThiagoSouza&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </>
  </section>
)

export default Sobre
