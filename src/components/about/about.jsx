import Image from 'next/image';
import { AboutCard } from './card';
import { Container } from '@/hooks/observer';
import { cardData } from '@/pages/api/about';
import styles from './about.module.css';


export const About = () => {
    return (
        <Container classContainer={styles.container} sectionName={'about'}>
            <AboutCard icon={cardData[0].icon} title={cardData[0].title} desc={cardData[0].desc} />
            <AboutCard icon={cardData[1].icon} title={cardData[1].title} desc={cardData[1].desc} />
            <div className={`${styles.imageContainer} ${styles.firstImg}`}>
                <Image src='/image/about1.jpg' alt="wind farms fields" fill />
            </div>
            <div className={`${styles.imageContainer} ${styles.secondImg}`}>
                <Image src='/image/about2.jpg' alt="man worker firld by solar panels" fill />
            </div>
            <AboutCard icon={cardData[2].icon} title={cardData[2].title} desc={cardData[2].desc} />
            <AboutCard icon={cardData[3].icon} title={cardData[3].title} desc={cardData[3].desc} />
        </Container>
    )
}
