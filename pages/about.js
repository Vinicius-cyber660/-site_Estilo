import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Paginas.module.css'
import Image from 'next/image'

export default function about() {
    return <>
    <div className={styles.corpo}>
        <h2 id={styles.about}>Sobre Nós</h2>
        <p id={styles.bemVindo}>bem-vindo(a) á Estilo Criação</p>
        <p>
        A Estilo Criação foi criada com o foco em pessoas que são apaixonadas por canecas.
        Estamos aqui para te ajudar a encontrar a caneca ideal para presentear seus amigos e
        familiares e não deixar as datas comemorativas passarem em branco nunca mais!<br/>
         <br/>
        Nós trabalhamos com canecas de alta qualidade para sempre entregar o melhor produto
        final para nossos clientes.<br/>
         <br/>
        Trazemos sempre o que está em alta no mundo dos personalizados, com muita inovação,
        criatividade e EXCLUSIVIDADE para VOCÊ cliente, sair de nossa loja/site com o que veio
        em mente e satisfeito.<br/>
        <br/>
        Nossas artes estampadas são criadas por nossa equipe de designers que está sempre por
        dentro das novidades. Além disso, se você cliente quiser uma arte única e do zero, nós
        criamos, <strong>SEM PREÇOS ADICIONAIS</strong>.<br/>
        <br/>
        Aqui sua ideia é eternizada em canecas, você pensa e nós fazemos. Sabe aquela foto de
        casal linda que você tirou? Ou uma foto super fofa de seu pet? Aqui eternizamos em
        canecas lindas, brilhosas e de alta qualidade, para você poder sempre ter uma lembrança
        de algo incrível que te aconteceu!<br/>
        <br/>
        Nosso material está dentro do mais alto padrão de qualidade e durabilidade. São canecas
        de cerâmica, super brilhosas, resistente ao microondas e máquina de lavar louças.
        <br/>
        Nosso objetivo é que você encontre aqui, Estilo desde a Criação.<br/>
        <br/>
        <strong>Nosso diferencial:</strong><br/>
        <br/>
        • Trabalhamos com as melhores canecas do mercado, desde a matéria prima até a fase de acabamento.<br/>
        • Estampamos qualquer tipo de imagem, desenho ou foto sem limite de cores ou efeitos e sem alterar o valor do produto.<br/>
        • Nossas estampas não descascam e não desbotam.<br/>
        • Não exigimos uma quantidade mínima para a personalização, ou seja, vocês podem personalizar as canecas uma a uma.<br/>
        • Temos uma equipe qualificada para atender vocês da melhor forma possível.<br/>
        • Dispomos de profissionais qualificados para criação e personalização da sua caneca sem custo adicional.<br/>
        • Trabalhamos com agilidade para cumprir os prazos mais apertados.<br/>
        • Buscamos a satisfação plena de nossos clientes.<br/>
        <br/>
        <strong>Em alta</strong><br/>
        <br/>
        Presentear as pessoas que você gosta com canecas personalizadas sempre é uma
        excelente escolha. Você pode presentear em festas de aniversário, formatura, dia dos pais,
        dia dos namorados. Pode até mesmo usar as canecas para convite de padrinhos ou para
        avisar os avós que tem bebe no forninho!<br/>
        <br/>
        <strong>Mercado corporativo</strong><br/>
        <br/>
        Nossas canecas são ideais para sua empresa. Presenteie seus clientes e funcionários com
        brindes. Exemplo:
        <br/>


        <Image src={"/images/CanecaSobre.png"} width="500%" height="500%" id={styles.CanecaSobre}></Image><br/>









        Personalize as canecas da sua empresa com o logotipo ou com alguma campanha específica. Use nossas canecas e deixe de
        lado os copos descartáveis, sua empresa economiza e o planeta agradece. 
        Siga a gente em nossa página oficial no <span id={styles.facebook}><Link href="https://www.facebook.com/ECcaragua"><a target="_blank">Facebook</a></Link></span> e <span id={styles.instagram}><Link href="https://www.instagram.com/estilo_criacao/"><a target="_blank">Instagram</a></Link></span> e fique por dentro de todas as nossas novidades
        e promoções exclusivas.
        Alguma dúvida? Por favor, acesse nossa página de perguntas frequentes ou nos envie um e-mail
        para <span id={styles.email}><Link href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJXKjxljhWMbBbNQbJbgfDsHLSlkkmdKlRwwVJRFvRRDZKtcmXBpkvtPScMrfCwFPZBg"><a target="_blank">estilocriacao1@gmail.com</a></Link></span> que responderemos o mais rápido possível.<br/>

        </p>
    </div>

    </>
}