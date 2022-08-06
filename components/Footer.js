import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    const [showInstagram, setShowInstagram] = useState(false);

    const instagramHandle = () => {
        setShowInstagram(!showInstagram);
    }

    const [showFacebook, setShowFacebook] = useState(false);

    const facebookHandle = () => {
        setShowFacebook(!showFacebook);
    }

    return (<>
        <div className={styles.prefooter}>
            <div className={styles.email}>
                <div id={styles.promocoes}>
                    <h4>Cadastre-se e fique por dentro das Promoções</h4>
                    <p>Não perca nenhuma de nossas promoções e ofertas exclusivas por email!</p>
                </div>
                <InputGroup className="mb-3" id={styles.cadastro}>
                    <Form.Control
                    id={styles.control}
                    placeholder="Digite seu Email"
                    aria-label="Digite seu Email"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2" className={styles.botao}><i className={"fa-solid fa-v fa-rotate-270"}></i></InputGroup.Text>
                </InputGroup>
            </div>
        </div>



        <div>
            <div className={styles.footer}>
                <div id={styles.cria1}>
                    <div className={styles.child1}>
                        <Link href="/">
                            <img src='/images/logo2.png' id={styles.logo2}/>
                        </Link>
                        <p>Nós da Estilo Criação estamos aqui para te ajudar a eternizar
                        momentos em canecas! Nosso principal objetivo é que o nosso
                        cliente tenha total controle na criação da arte final de seu pedido.
                        Nós trabalhamos com canecas de alta qualidade em cerâmica,
                        super brilhosas que podem até mesmo ir ao microondas. Aqui
                        você escolhe a caneca para presentear ou colecionar, beba com 
                        estilo!</p>
                        <br/>
                        Alguma dúvida? Nos chame.<br/>
                        <br/>
                    <div id={styles.whats}>
                        <img src='/images/whatsapp.png'/>
                        <a>(12)98272-9709</a>
                    </div>
                    </div>
                    <div className={styles.child2}>
                        <h3>Políticas</h3>
                        <div>
                            <Link href="/Politicas/Politica_de_Privacidade">
                                <a>Política de Privacidade</a>
                            </Link>
                            <Link href="/Politicas/Politica_de_Devolucao">
                                <a>Política de Devolução</a>
                            </Link>
                            <Link href="/Politicas/Termos_e_Condicoes">
                                <a>Termos e Condições</a>
                            </Link>
                            <Link href="/Politicas/NossoContato">
                                <a>Nosso Contato</a>
                            </Link>
                            <Link href="/Politicas/Ajuda">                      
                                <a>Ajuda</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id={styles.cria2}>
                    <div className={styles.child3}>
                        <h3>Mais informações</h3>
                        <div>
                            <Link href="/Mais_Informacoes/Sobre_Nos">
                                <a >Sobre Nós</a>
                            </Link>
                            <Link href="/Mais_Informacoes/Qualidade">
                                <a>Qualidade</a>
                            </Link>
                            <Link href="/Mais_Informacoes/Perguntas_Frequentes">
                                <a>Perguntas Frequentes</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.child4}>
                        <h3>Conheça Nossas Redes Sociais</h3>
                        <Link href="https://www.facebook.com/ECcaragua">
                            <a target="_blank" onMouseEnter={facebookHandle} onMouseLeave={facebookHandle}><i className={"fa-brands fa-facebook-f"}></i></a>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCPeP3FNqoLvQ5kWAD5gyWsQ" >
                            <a target="_blank"><i className={"fa-brands fa-youtube"}></i></a>
                        </Link>
                        <Link href="https://pin.it/1p6FnKJ">
                            <a target="_blank"><i className={"fa-brands fa-pinterest-p"}></i></a>
                        </Link>
                        <Link href="https://www.instagram.com/estilo_criacao/">
                            <a target="_blank" onMouseEnter={instagramHandle} onMouseLeave={instagramHandle}><i className={"fa-brands fa-instagram"}></i></a>
                        </Link>
                        
                        <div id={styles.facebook} className={showFacebook ? '': styles.hidden}>
                            {console.log(showFacebook ? '': 'hidden')}
                            <i className="fa-solid fa-caret-up"></i>
                            <img src='/images/PaginaFB.png'/>
                        </div>

                       

                        <div id={styles.instagram} className={showInstagram ? '': styles.hidden}>
                            {console.log(showInstagram ? '': 'hidden')}
                            <i className="fa-solid fa-caret-up"></i>
                            <img src='/images/insta.png'/>
                        </div> 

                        
                    </div>                   
                </div>               
            </div>
            <div id={styles.containerF}>
                <div id={styles.email}>
                    <p>estilocriacao1@gmail.com</p>
                    <img src="/images/payments.png"/>
                </div> 
            </div> 
        </div>
        </>
    )
}