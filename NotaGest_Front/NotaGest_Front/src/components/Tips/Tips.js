import React, { useEffect } from 'react';
import './Tips.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tips = () => {
  const tipsData = [
    {
      title: "Mão de Obra e Serviços Terceirizados",
      description: "Não se esqueça de arquivar recibos e notas de serviços prestados na obra. Isso ajudará na dedução do seu Imposto de Renda.",
      link: "https://avt.com.br/construcao-de-casas-documentacao-necessaria/",
    },
    {
      title: "Simplifique a Declaração do Imposto de Renda",
      description: "Ao manter todos os comprovantes organizados, a declaração do Imposto de Renda se torna mais simples e eficiente.",
      link: "https://einvestidor.estadao.com.br/educacao-financeira/imposto-de-renda-2024-documentos-necessarios-declaracao/?gad_source=1&gclid=CjwKCAiArva5BhBiEiwA-oTnXaw1HCZzW4_UEtYGdRWO9UvKJht0ROzk_3j8rpWCLtAsUbIwnS88aBoCASsQAvD_BwE",
    },
    {
      title: "Saiba Quais Documentos São Obrigatórios Para a Delcaração",
      description: "Não sabe quais documentos guardar? Tenha em mãos tudo o que for necessário para comprovar seus gastos na construção do imóvel.",
      link: "https://investnews.com.br/guias/imposto-de-renda-o-que-e/?gad_source=1&gclid=CjwKCAiArva5BhBiEiwA-oTnXTgQC0AGuFupWGcwiEwil6QyQKcipzBeSkPQhv27iyT5rWpearIFVxoCBVsQAvD_BwE",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div class="tips-container" id="tips"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
       data-aos-duration="1000">
      {tipsData.map((tip, index) => (
        <div key={index} class="tip-card" data-aos="fade-up">
          <h3 class="tip-title"><strong>{tip.title}</strong></h3>
          <p class="tip-description">{tip.description}</p>
          <a href={tip.link} target="_blank" rel="noopener noreferrer" class="tip-button">
            Saiba mais
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tips;

