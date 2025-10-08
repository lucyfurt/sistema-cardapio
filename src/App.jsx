import './App.css'
import Header from './components/Header.jsx';
import Aluno from './components/Aluno.jsx';
import Cardapio from './components/Cardapio.jsx';
import Relatorio from './components/Relatorio.jsx';
import NavBar from './components/NavBar.jsx';
import CardRelatorio from './components/CardRelatorio.jsx';
const listaAlunos = ["Ana", "Bia", "Carlos", "Daniel", "Eduardo"];

export default function App() {

  return (
    <>
      <NavBar />
      <Header />
      <CardRelatorio aluno="Ana" presente={true} />
      <div className='card'>
        {listaAlunos.map((aluno) => (
          <Aluno key={aluno} nome={aluno} />
        ))}
      </div>
      <Cardapio />
      <Relatorio />
    </>
  )
}



