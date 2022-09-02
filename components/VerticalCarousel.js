import styles from '../styles/VerticalCarousel.module.css'
import { useRef } from 'react';


export default function VerticalCarousel({itens}){
    const carousel = useRef(null);

    const handleTopClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollTop -= 125;
    }

    const handleBottomClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollTop += 125;
    }

    

    return(
    <>
    <div className={styles.divseta}>
        <button onClick={handleTopClick} className={styles.setasBotão} id={styles.setas}><img src="/images/SetaCima.png" className={styles.setas}/></button>
    </div>
    <div className={styles.carousel} ref={carousel}>    
        <div className={styles.item}>
            <div className={styles.imagem}>
                <img src="/images/550x550.png"/>
            </div>
            <div className={styles.imagem}>
                <img src="/images/550x550.png"/>
            </div>
            <div className={styles.imagem}>
                <img src="/images/550x550.png"/>
            </div>
            <div className={styles.imagem}>
                <img src="/images/550x550.png"/>
            </div>
            <div className={styles.imagem}>
                <img src="/images/550x550.png"/>
            </div>
            <div className={styles.imagem}>
                <img src="/images/550x550.png"/>
            </div>
        </div>
    </div>
    <div className={styles.divseta}>
        <button onClick={handleBottomClick} className={styles.setasBotão}><img src="/images/SetaBaixo.png" className={styles.setas}/></button>
    </div>
    
    </>
    )
}