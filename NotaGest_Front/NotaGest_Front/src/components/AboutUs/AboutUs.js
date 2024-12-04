import React, { useEffect } from 'react'
import './AboutUs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

    useEffect(() => {
        AOS.init({});
      }, []);

      
    return (
        <section class="about-us" id="about-us-section">
            <div data-aos="fade-right"
                data-aos-offset="300">
                <h2 class="about-us-title">Sobre Nós</h2>
                <p class="about-us-text">
                    Somos uma empresa comprometida em transformar a gestão documental no setor de construção civil, oferecendo soluções digitais que facilitam a organização de comprovantes e recibos, reduzem o uso de papel e ajudam a proteger o meio ambiente.
                    Nosso objetivo é simplificar processos burocráticos e garantir que todos os documentos importantes estejam seguros, acessíveis e bem organizados, tanto para pequenas obras quanto para grandes projetos.
                    Com a crescente demanda por soluções sustentáveis e eficientes, criamos uma plataforma intuitiva e segura que permite que nossos usuários armazenem e gerenciem seus documentos em qualquer lugar e a qualquer momento. Acreditamos que a tecnologia pode não apenas facilitar o dia a dia, mas também contribuir para um futuro mais verde, reduzindo o desperdício de papel e acelerando a transição para um mundo digital.
                    Junte-se a nós nessa jornada rumo à digitalização e simplificação dos processos na construção civil!
                </p>
            </div>
        </section>
    )
}

export default AboutUs; 