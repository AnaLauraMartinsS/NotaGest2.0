import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.js';
import './Login.css'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    senha: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => { // Esta função é chamada sempre que o valor de um dos campos de entrada muda (quando o usuário digita).
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value }); // Atualiza o estado das credenciais. Utiliza a sintaxe de espalhamento (...credentials) para copiar o estado atual e, em seguida, atualiza o valor da propriedade correspondente ao name com o novo value. Isso garante que apenas o campo que foi alterado seja atualizado.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credenciais do usuário:', credentials);
    // Lógica para autenticar o usuário.
    if (credentials.email && credentials.senha) {
      // Após a validação bem-sucedida:
      navigate('/uploads'); // Redireciona para a página de uploads
    }
  };

  const handleGoHome = () => {
    navigate('/'); // Redireciona para a home
  };

  return (
    <div>
      <div className="login-page__blue-background"></div>
      <main className="login-page__main">
        <section className="login-page__guest-card">
          <div className="login-page__header">
            <h1 className="login-page__title">Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="login-page__form">
            <div className="login-page__input-container">
              <input
                name="email"
                id="email"
                className="login-page__input"
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-page__input-container">
              <input
                name="senha"
                id="senha"
                className="login-page__input"
                type="password"
                placeholder="Senha"
                value={credentials.senha}
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <a href="/esqueceu-senha" className="login-page__forgot-password-link">Esqueceu a senha?</a>
        </section>
      </main>
      <div className="login-page__button-container">
        <button type="submit" className="login-page__login-button" onClick={handleSubmit}>Login</button>
        <button onClick={handleGoHome} className="login-page__button login-page__back-to-home-button">Voltar para a Home</button>
      </div>
      <Footer />
    </div>
  );
}

export default Login
