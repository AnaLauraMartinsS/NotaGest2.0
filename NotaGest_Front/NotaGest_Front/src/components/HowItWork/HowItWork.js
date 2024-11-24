import React from 'react';
import './HowItWork.css';
import vetor from '../../assets/Vector 5.png';

const HowItWork = () => {
  return (
    <section class="como-funciona" id="how-it-work-section">
      <h2 class="titulo-centralizado">Como Funciona</h2>
      <p class="p-section">Com uma interface amigável e recursos que atendem desde profissionais da construção civil até proprietários de imóveis, você terá controle total sobre seus arquivos em poucos passos. Veja como é simples começar a organizar seus documentos com segurança e praticidade</p>
      <div class="caixas">
        <div class="caixa">
          <h3 class="title-how">1</h3>
          <div class="secondary-title">
            <h4 class="h4">Criação de conta</h4>
            <p class="description">Inscreva-se em minutos inserindo algumas informações básicas, como nome, e-mail e senha.</p>
          </div>
        </div>
        <div class="seta">
          <img src={vetor} alt='Vetor' />
        </div>
        <div class="caixa">
          <h3 class="title-how">2</h3>
          <div class="secondary-title">
            <h4 class="h4">Upload de documentos</h4>
            <p class="description">Carregue fotos, PDFs e outros documentos diretamente do seu computador ou dispositivo móvel.</p>
          </div>
        </div>
        <div class="seta">
          <img src={vetor} alt='Vetor' />
        </div>
        <div class="caixa">
          <h3 class="title-how">3</h3>
          <div class="secondary-title">
            <h4 class="h4">Organize e categorize</h4>
            <p class="description">Classifique seus documentos por  categorias ou até por data. Isso facilita a organização e o acesso posterior.</p>
          </div>
        </div>
      </div>
      <div class="global-description">
      </div>
    </section>
  )
}

export default HowItWork;