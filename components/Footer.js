import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return (<>
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
                            <a href="/Politicas/Politica_de_Privacidade">Política de Privacidade</a>
                            <a href="/Politicas/Politica_de_Devolucao">Política de Devolução</a>
                            <a href="/Politicas/Termos_e_Condicoes">Termos e Condições</a>
                            <a href="/Politicas/NossoContato">Nosso Contato</a>                       
                            <a href="/Politicas/Ajuda">Ajuda</a>
                            
                        </div>
                    </div>
                </div>
                <div id={styles.cria2}>
                    <div className={styles.child3}>
                        <h3>Mais informações</h3>
                        <div>
                            <a href="/Mais_Informacoes/Sobre_Nos">Sobre Nós</a>
                            <a href="/Mais_Informacoes/Qualidade">Qualidade</a>
                            <a href="/Mais_Informacoes/Perguntas_Frequentes">Perguntas Frequentes</a>
                        </div>
                    </div>
                    <div className={styles.child4}>
                        <h3>Conheça Nossas Redes Sociais</h3>
                        <a href="https://www.facebook.com/ECcaragua" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.youtube.com/channel/UCPeP3FNqoLvQ5kWAD5gyWsQ" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://pin.it/1p6FnKJ" target="_blank"><i class="fa-brands fa-pinterest-p"></i></a>
                        <a href="https://www.instagram.com/estilo_criacao/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
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