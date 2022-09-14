import Button from 'react-bootstrap/Button';
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductsC from './ProductC';

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
    <div className={styles.CarrosselP}>
      <Carousel2 responsive={responsive} infinite={true}>

        {
          itens?.map((item) => {
            return <>
              <ProductsC item={item}/>
            </>
          })
        }
      </Carousel2>
      </div>
    
    </>
    )
  }