import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.js';
import './Register.css'


const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '', 
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não correspondem.'); 
      return;
    }
    // Adicionar a lógica para enviar os dados para uma API.
    console.log('Dados do formulário:', formData);

    setFormData({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    });
  };

  const handleGoHome = () => {
    navigate('/'); // Redireciona para a home
  };

  return (
    <div className="register-page">
      <div className="blue-background"></div>
      <main className="main-container">
        <section className="guest-card">
          <div>
            <h1 className="register-title">Cadastre-se</h1>
          </div>
          <form onSubmit={handleSubmit} className="register-form">
            <fieldset className="register-fieldset">
              <div>
                <input
                  name="nome"
                  id="nome"
                  className="input-field"
                  type="text"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="email"
                  id="email"
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="senha"
                  id="senha"
                  className="input-field"
                  type="password"
                  placeholder="Senha"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
                  title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos."
                  value={formData.senha}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="confirmarSenha"
                  id="confirmarSenha"
                  className="input-field"
                  type="password"
                  placeholder="Confirme a Senha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
            </fieldset>
            <div className="checkbox-wrapper">
              <input
                id="aceite-contrato"
                className="input-check"
                type="checkbox"
                required
              />
              <label htmlFor="aceite-contrato" className="label-text">
                Aceito os termos
              </label>
            </div>
            <button type="submit" className="register-button-2">Cadastrar</button>
          </form>
          <button onClick={handleGoHome} className="back-button-2">Voltar para a Home</button>
        </section>
      </main>
      <Footer />
    </div>
  );  
};

export default Register;

// fieldset é usado dentro de um form para agrupar elementos do form que são relacionados.