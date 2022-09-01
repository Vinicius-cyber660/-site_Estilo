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

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu id={styles.drop2}>
        <Row id={styles.itens}>
          <Col className={styles.colunas}>
            <Dropdown.Item href="/produtos/Religião">Religião</Dropdown.Item>
            <Dropdown.Item href="/produtos/Futebol">Futebol</Dropdown.Item>
            <Dropdown.Item href="/produtos/Anime">Anime</Dropdown.Item>
            <Dropdown.Item href="/produtos/Filme">Filme</Dropdown.Item>
            <Dropdown.Item href="/produtos/Série">Série</Dropdown.Item>
            <Dropdown.Item href="/produtos/Música">Música</Dropdown.Item>
          </Col>
          <Col className={styles.colunas}>
            <Dropdown.Item href="/produtos/Flork">Flork</Dropdown.Item>
            <Dropdown.Item href="/produtos/Marvel">Marvel</Dropdown.Item>
            <Dropdown.Item href="/produtos/DC Comics">DC Comics</Dropdown.Item>
            <Dropdown.Item href="/produtos/Heróis">Heróis</Dropdown.Item>
            <Dropdown.Item href="/produtos/Vilões">Vilões</Dropdown.Item>
            <Dropdown.Item href="/produtos/Natal">Natal</Dropdown.Item>
          </Col>
          <Col className={styles.colunas}>
            <Dropdown.Item href="/produtos/Dia dos Namorados">Dia dos Namorados</Dropdown.Item>
            <Dropdown.Item href="/produtos/Dia dos Pais">Dia dos Pais</Dropdown.Item>
            <Dropdown.Item href="/produtos/Dia das Mães">Dia das Mães</Dropdown.Item>
            <Dropdown.Item href="/produtos/Sem Foto">Sem Foto</Dropdown.Item>
            <Dropdown.Item href="/produtos/Com Foto">Com Foto</Dropdown.Item>
            <Dropdown.Item href="/produtos/Personalizada">Personalizada</Dropdown.Item>
          </Col>
          <Col className={styles.colunas}>
            <Dropdown.Item href="/produtos/Infantil">Infantil</Dropdown.Item>
            <Dropdown.Item href="/produtos/Jogos">Jogos</Dropdown.Item>
            <Dropdown.Item href="/produtos/Famosos">Famosos</Dropdown.Item>
            <Dropdown.Item href="/produtos/Esporte">Esporte</Dropdown.Item>
            <Dropdown.Item href="/produtos/Pet">Pet</Dropdown.Item>
            <Dropdown.Item href="/produtos/Terror">Terror</Dropdown.Item>
          </Col>
        </Row>
      </Dropdown.Menu>
    </Dropdown>
  );
}





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
          <Offcanvas.Header closeButton className={styles.men}> 
            <Offcanvas.Title className={styles.men}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body id={styles.bodymenu}>
            <li id={styles.categ}>
              <p onClick={categoryHandle}>Categorias 
              <div id={styles.seta1}><i className={"fa-solid fa-caret-down"}></i></div>
              </p>

              <div id={styles.menCateg} className={showCategory ? '': styles.hidden}>
              {showCategory ? '': 'hidden'}
                <ul onClick={handleClose}>
                  <li>
                    <Link href="/produtos/Religião">
                     <a>Religião</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Futebol">
                     <a>Futebol</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Anime">
                     <a>Anime</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Filme">
                     <a>Filme</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Série">
                     <a>Série</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Música">
                     <a>Música</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Flork">
                     <a>Flork</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Marvel">
                     <a>Marvel</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/DC Comics">
                     <a>DC Comics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Heróis">
                     <a>Heróis</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Vilões">
                     <a>Vilões</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Natal">
                     <a>Natal</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Dia Dos Namorados">
                     <a>Dia Dos Namorados</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Dia Dos Pais">
                     <a>Dia Dos Pais</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Dia Das Mães">
                     <a>Dia Das Mães</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Sem Foto">
                     <a>Sem Foto</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Com Foto">
                     <a>Com Foto</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Personalizada">
                     <a>Personalizada</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Infantil">
                     <a>Infantil</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Jogos">
                     <a>Jogos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Famosos">
                     <a>Famosos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Esporte">
                     <a>Esporte</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Pet">
                     <a>Pet</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produtos/Terror">
                     <a>Terror</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <ul id={styles.listacel} onClick={handleClose}>
              <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/produtos">
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
                <Link href="/https://www.instagram.com/estilo_criacao/">
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
          <Link href="/login">
            <i className={"fa-regular fa-circle-user fa-1x"}></i>
          </Link>
          <div id={styles.entrar}>
            <p>Bem-vindo(a) <br/> <strong><Link href="/login">Entrar</Link></strong> ou <strong><Link href="../Registrar">Cadastrar</Link></strong></p>
          </div>
          <Link href="/carrinho">
            <i className={"fa-solid fa-cart-shopping"}></i>
          </Link>
        </div> 
      </div>
    </div>
    <div id={styles.nav}>
      <div id={styles.category}>
        <BasicExample/>



      </div>
      <div id={styles.list}>
        <ul id={styles.lista}>
          <li>
            <Link href="/">
                <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/produtos">
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
        </ul>
      </div>
    </div>  
    </>
      )
}