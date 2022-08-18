import styles from '../../styles/Produtos.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductsSingle from '../../components/ProductsSingle';
import Pagination from 'react-bootstrap/Pagination';


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://raw.githubusercontent.com/Vinicius-cyber660/-site_Estilo/master/server/produtos.json`);
  const produtos = await res.json();

  return { props: { produtos } }
}  

export default function Productss({produtos}){
    return (<>
    <div id={styles.corpo}>
    <h1 className={styles.titulo}>Página de Produtos</h1>
    <Row>
        {
          produtos.map((produto) => (
            <Col xl={3} lg={3} md={4} sm={6} xs={12} key={produto.id}>
              <ProductsSingle product={produto}/>
            </Col>
        ))
        }
    </Row>
    
    
    <div className={styles.paginas}>
        <Pagination size="sm">{items}</Pagination>
    </div>
    </div>
    
    </>
    
    )
}