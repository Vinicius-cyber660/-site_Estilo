import styles from '../styles/VerticalCarousel.module.css'
import { useRef } from 'react';
import { useRouter } from 'next/router'

export default function VerticalCarousel({item}){
    const carousel = useRef(null);

    const handleTopClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollTop -= 123;
    }

    const handleBottomClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollTop += 123;
    }

    /* console.log(item) */
    
    return(
        
    <>
    <div className={styles.divseta}>
        <button onClick={handleTopClick} className={styles.setasBotão} id={styles.setas}><img src="/images/SetaCima.png" className={styles.setas}/></button>
    </div>
    <div className={styles.carousel} ref={carousel}>        
        <div className={styles.item}>
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
        <button onClick={handleBottomClick} className={styles.setasBotão}><img src="/images/SetaBaixo.png" className={styles.setas}/></button>
    </div>
    
    </>
    )
}


    
        




