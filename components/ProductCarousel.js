import Button from 'react-bootstrap/Button';
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

  export default function ProductsCarousel({itens}){

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
      }
    };

    return(
    <>
    {/*<h1 className={styles.titulo}>Mais Vendidos</h1>*/}

    <div className={styles.CarrosselP}>
      <Carousel2 responsive={responsive} infinite={true}>

        {
          itens?.map((item) => {
            return <>
              <Link href={"/produto/" + item?.nome}>
                <div className={styles.Pmaisvendidos}>
                  <div className={styles.produto}>
                      <img src={item?.imagens[0]}/>
                      <h4>{item?.nome}</h4>
                      <h3 className={styles.preço}>{item?.preco}</h3>
                      <p>até <strong>3x</strong> de <strong>R$ 9,33</strong> sem juros</p>
                      <Button variant="success" className={styles.comprar}>Comprar</Button>
                  </div>
                </div>
              </Link>
            </>
          })
        }
      </Carousel2>
      </div>
    
    </>
    )
  }