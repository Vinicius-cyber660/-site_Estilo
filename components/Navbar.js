import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar(){
    return(<>
    <div id={styles.navbarzao}>
      <div id={styles.menucel}>
        <i className={"fa-solid fa-bars"}></i>
      </div>

      <div id={styles.logao}>
        <div id={styles.logo10}>
          <Link href="/">
            <a id={styles.Logo}><img src="/images/logo.png" id={styles.logo}/></a>
          </Link>
        </div>
      </div>

      <div id={styles.pesquisao}>
        <div className={styles.pesquisa}>
          <InputGroup className={styles.pesquisas}>
            <Form.Control
              id={styles.pesquisar}
              placeholder="pesquisar..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary"  id={styles.botão}>
              <i className={"fa-solid fa-magnifying-glass"} id={styles.lupa}></i>
            </Button>
          </InputGroup>
        </div>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
      <div id={styles.iconesao}>
        <div id={styles.icones}>
          <i className={"fa-solid fa-circle-user fa-1x"}></i>
          <i className={"fa-solid fa-cart-shopping"}></i>
        </div> 
      </div>
    </div>
    <div id={styles.nav}>
      <div id={styles.category}>
        <Dropdown className={styles.drop}>
          <Dropdown.Toggle variant="white" id="dropdown-basic">
            <i className={"fa-solid fa-bars"}></i><span>Categorias</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
            <Dropdown.Item href="/products/Herois/Miranha">Miranha</Dropdown.Item>
            <Dropdown.Item href="/products/Herois/Batma">Batma</Dropdown.Item>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
            <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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