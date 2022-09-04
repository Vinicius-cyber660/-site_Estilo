import styles from '../styles/HorizontalCarousel.module.css'
import { useRef } from 'react';
import { useRouter } from 'next/router'

export default function VerticalCarousel({item}){
    const carousel = useRef(null);

    const handleLeftClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= 123;
    }

    const handleRightClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += 123;
    }
    
    return(
        
    <>
    
    <div className={styles.divseta}>
        <button onClick={handleLeftClick} className={styles.setasBotão} id={styles.setas}><img src="/images/SetaEsquerda.png" className={styles.setas}/></button>
    </div>
    <div className={styles.carousel}>        
        <div className={styles.item} ref={carousel}>
            <div className={styles.imagem}>
            {item?.imagem.map((imagem) => {
                return <>
                <img src={imagem.link}/>
                </>
            })}
            </div>
        </div>
    </div>
    <div className={styles.divseta}>
        <button onClick={handleRightClick} className={styles.setasBotão}><img src="/images/SetaDireita.png" className={styles.setas}/></button>
    </div>

    
    </>
    )
}


    
        




