import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Header.css';
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
      <header class="header" id="home">
        <img src={Logo} alt="Logo da Empresa" class="logo-image" />
        <nav class="nav">
          <ul class="nav-list">
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="tips" smooth={true} duration={500}>Dicas</Link></li>
            <li><Link to="how-it-work-section" smooth={true} duration={500}>Como Funciona</Link></li>
            <li><Link to="about-us-section" smooth={true} duration={500}>Sobre Nós</Link></li>
            <li><Link to="faq-section" smooth={true} duration={500}>FAQ</Link></li>
            <li><RouterLink to="/login" class="login-button">Login</RouterLink></li>
            <li><RouterLink to="/register" class="register-button">Cadastre-se</RouterLink></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;

