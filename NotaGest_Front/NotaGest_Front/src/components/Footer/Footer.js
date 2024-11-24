import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-content">
                <img src={Logo} alt="Logo" class="footer-logo" />
                <p>Simplifique sua gestão documental, proteja o meio ambiente e organize seu futuro. Juntos, rumo a um amanhã mais sustentável.</p>
            </div>
            <div class="footer-rede">
                <p>© 2024 Farj-Br. Todos os direitos reservados.</p>
                <div>
                <FaInstagram class="icone"/>
                <FaFacebook class="icone"/>
                <FaXTwitter class="icone"/>
                <FaLinkedin class="icone"/>
                <MdEmail class="icone"/>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
