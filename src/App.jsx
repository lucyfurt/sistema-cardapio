import './App.css'
import Header from './components/Header.jsx';
import Aluno from './components/Aluno.jsx';
import Cardapio from './components/Cardapio.jsx';
import Relatorio from './components/Relatorio.jsx';
const listaAlunos = ["Ana", "Bia", "Carlos", "Daniel", "Eduardo"];

export default function App() {

  return (
    <>
      <div>
        <Header />
        {listaAlunos.map((aluno) => (
          <Aluno key={aluno} nome={aluno} />
        ))}
      </div>
      <Cardapio />
      <Relatorio />
    </>
  )
}



