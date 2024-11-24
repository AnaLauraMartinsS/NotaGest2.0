import React, { useState } from 'react';
import './FAQ.css';
import faq from '../../assets/FAQ.jpg';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // openIndex armazenará o índice da pergunta que está aberta. Quando o componente é montado, o openIndex é inicializado como null. Isso significa que nenhuma resposta está visível inicialmente.
  // Quando o usuário clica no botão + ou - para uma pergunta, a função toggleAnswer é chamada, passando o índice da pergunta clicada
  //Se o índice da pergunta que está sendo clicada é o mesmo que o openIndex atual, isso significa que a resposta já está aberta, então setOpenIndex é chamado com null, fechando a resposta.
  //Se o índice é diferente, setOpenIndex armazena o novo índice, abrindo a resposta correspondente.

  const toggleAnswer = (index) => { // Função para alternar a visibilidade da resposta
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "Como o sistema ajuda com a documentação de impostos?", answer: "O sistema organiza seus documentos relacionados aos impostos, facilitando a consulta e a apresentação de comprovantes quando necessário." },
    { question: "O que devo fazer se encontrar um erro ao fazer upload?", answer: "Se você encontrar um erro, verifique sua conexão com a internet e o formato do arquivo. Se o problema persistir, entre em contato com nosso suporte técnico." },
    { question: "Como posso entrar em contato com o suporte?", answer: "Você pode entrar em contato com nosso suporte enviando um e-mail para notagestsuporte@outlook.com" },
    { question: "Como posso recuperar um arquivo que deletei?", answer: "Uma vez que um arquivo é deletado, não podemos recuperá-lo. Recomendamos ter cópias de segurança dos documentos mais importantes." },
  ];

  return (
    <div class="FAQ-primary">
      <img src={faq} alt="FAQ" class="faq-image" />
      <div class="faq-container" id="faq-section">
        <h2 class="FAQ-title">Perguntas Frequentes (FAQ)</h2>
        <div class="faq">
          {faqs.map((faq, index) => (
            <div key={index} class="question-faq">
              <strong>{faq.question}</strong>
              {/* Botão que alterna a resposta ao ser clicado */}
              <button class="button-FAQ" onClick={() => toggleAnswer(index)}>
                {openIndex === index ? '-' : '+'} {/* Exibe '-' se a pergunta estiver aberta, caso contrário exibe '+' */}
              </button>
              {openIndex === index && <div><p class="answer">{faq.answer}</p></div>}  {/* Renderiza a resposta apenas se o índice da pergunta atual for o mesmo que openIndex. Se a expressão à esquerda do && for verdadeira (ou seja, não for null, undefined, false, 0, ou uma string vazia), então a expressão à direita será avaliada e seu resultado será retornado.*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default FAQ;