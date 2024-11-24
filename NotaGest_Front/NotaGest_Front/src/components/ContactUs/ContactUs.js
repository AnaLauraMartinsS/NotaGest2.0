import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // handleChange é chamada sempre que um campo do formulário muda.
  const handleChange = (e) => {
    //const name = e.target.name; 
    //const value = e.target.value; 
    const { name, value } = e.target; // name é o nome do campo e value é o valor do campo.
    setFormData({ ...formData, [name]: value }); // [name]: value: A chave entre colchetes ([name]) permite que você use o valor da variável name como a chave do objeto. Isso significa que a propriedade correspondente a name no objeto será atualizada para o novo value.
  };

  const handleSubmit = (e) => { // é chamada ao enviar o formulário.
    e.preventDefault();
    // Aqui adicionar a lógica para enviar os dados para a API ou para o backend.
    console.log('Dados enviados:', formData);
    // Limpar o formulário após o envio
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  // onChange chama handleChange para atualizar o estado sempre que o usuário digita.
  return (
    <div class="contact-us">
      <h2 class="title-contact">Fale Conosco</h2>
      <form onSubmit={handleSubmit}>
        <div class="input">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Nome'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='Telefone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            class="message"
            id="message"
            name="message"
            placeholder='Mensagem'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <button type="submit" class="button-contact-us">Enviar</button>
    </div>
  );
};

export default ContactUs;