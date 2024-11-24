import React, { useEffect } from 'react';
import './ClientComments.css';
import juliano from '../../assets/photo_01.png'
import roberto from '../../assets/photo_2.png'
import mariana from '../../assets/photo_3.png'
import aspas_escura from '../../assets/aspas_escura.png'
import aspas_clara from '../../assets/aspas_clara.png'
import Aos from 'aos';
import 'aos/dist/aos.css';


const ClientComments = () => {

    useEffect(() => {
        Aos.init();
      }, []);


    return (
        <div>
            <h2 class="global-title">O que nossos clientes dizem</h2>
            <section class="client-comments">
                <div class="comment comment-light">
                    <img src={aspas_escura} alt="Author 1" class="" />
                    <p class="comment-text">Com o sistema, consegui organizar toda a documentação da obra de forma prática e rápida. Agora, encontrar comprovantes e notas fiscais é muito mais simples.</p>
                    <hr class="comment-divider" />
                    <div class="comment-author">
                        <img src={juliano} alt="Author 1" class="author-photo" />
                        <span class="author-name">Juliano Souza, Engenheiro Civil</span>
                    </div>
                </div>

                <div class="comment comment-green">
                <img src={aspas_clara} alt="Author 1" class="" />
                    <p class="comment-text">Nunca foi tão fácil gerenciar os documentos das construções que administro. O sistema não só economizou tempo, mas também eliminou o risco de perder arquivos importantes. Ótima solução!</p>
                    <hr class="comment-divider" />
                    <div class="comment-author">
                        <img src={roberto} alt="Author 2" class="author-photo" />
                        <span class="author-name">Roberto Lima, Arquiteto</span>
                    </div>
                </div>

                <div class="comment comment-green">
                <img src={aspas_clara} alt="Author 1" class="" />
                    <p class="comment-text">Eu costumava perder horas tentando localizar recibos e comprovantes. Esse sistema mudou tudo! Agora, tenho todos os documentos organizados e prontos para a declaração de imposto de renda</p>
                    <hr class="comment-divider" />
                    <div class="comment-author">
                        <img src={mariana} alt="Author 3" class="author-photo" />
                        <span class="author-name">Mariana Alves, Proprietária de Imóveis</span>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default ClientComments;