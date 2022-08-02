import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Navbar(){
    return(<>
    <div className={styles.cabecalho}>
    <i class="fa-solid fa-bars" id={styles.menu}></i>
      <Link href="/">
        <a id={styles.Logo}><img src="/images/logo.png" id={styles.logo}/></a>
      </Link>
      <div className={styles.pesquisa}>
        <InputGroup className={styles.pesquisas}>
            <Form.Control
              id={styles.pesquisar}
              placeholder="pesquisar..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" className={styles.botão}>
              <i class="fa-solid fa-magnifying-glass" id={styles.lupa}></i>
            </Button>
          </InputGroup>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
      <div id={styles.icones}>
        <i class="fa-solid fa-circle-user fa-1x"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>     
    </div>
    <div id={styles.nav}>
      <div id={styles.category}>
        <i class="fa-solid fa-bars"></i>
        <Link href="">           
          <a>Categorias</a>
        </Link>
      </div>
      <div id={styles.list}>
        <ul id={styles.lista}>
          <li>
            <Link href="/">
                <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/colection">
              <a>Coleções</a>
            </Link>
          </li>
          <li>
            <Link href="/todos">
              <a>Todo</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>  
    </>
      )
}