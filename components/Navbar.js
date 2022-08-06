import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import React2, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Navbar(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*esconder categorias*/ 
    const [showCategory, setShowCategory] = useState(false);

    const categoryHandle = () => {
        setShowCategory(!showCategory);
    }


    return(<>
    <div id={styles.navbarzao}>
      <div id={styles.menucel}>
        <Button variant="transparent" onClick={handleShow}>
          <i className={"fa-solid fa-bars"}></i>
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={styles.men}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <li id={styles.categ}>
              <p>Categorias</p>
              <ul>
                <li>
                  olá
                </li>
                <li>
                  olá
                </li>
                <li>
                  olá
                </li>
                <li>
                  olá
                </li>
                <li>
                  olá
                </li>
              </ul>
            </li>
            <ul id={styles.listacel} onClick={handleClose}>
              


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
                <Link href="/colection">
                  <a>Coleções</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/todos">
                  <a>Instagram</a>
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
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
          <i className={"fa-regular fa-circle-user fa-1x"}></i>
          <div id={styles.entrar}>
            <p>Bem-vindo(a) <br/> <strong>Entrar</strong> ou <strong>Cadastrar</strong></p>
          </div>
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

          <Dropdown.Menu className={styles.drop}>
            <Row>
              <Col className={styles.colunas}>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
                <Dropdown.Item href="/products/Herois/Miranha">Miranha</Dropdown.Item>
                <Dropdown.Item href="/products/Herois/Batma">Batma</Dropdown.Item>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
              </Col>
              <Col className={styles.colunas}>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
                <Dropdown.Item href="/products/Herois">Herois</Dropdown.Item>
              </Col>
            </Row>
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