import "./NavBar.css";
import logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <p>NAVEGAÇÃO</p>
      <nav>
        <ul>
          <li><a href="#home">Dashboard</a></li>
          <li><a href="#cardapio">Alunos</a></li>
          <li><a href="#relatorio">Frequência</a></li>
          <li><a href="#relatorio">Cardápio</a></li>
          <li><a href="#relatorio">Relatórios</a></li>
        </ul>
      </nav>
    </div>
  );
}