import Circle from '../../../public/icons/Features-maximize-circle.svg';
import Rank from '../../../public/icons/Features-ranking.svg';
import Global from '../../../public/icons/Features-global-edit.svg';
import Cpu from '../../../public/icons/Features-cpu-charge.svg';
import Image from 'next/image';
import { AboutCard } from './card';
import styles from './about.module.css';

const cardData = [
    {
        id: 1,
        icon: <Circle />,
        title: 'Opennes',
        desc: 'to the world, people, new ideas and projects'
    },
    {
        id: 2,
        icon: <Global />,
        title: 'Responsibility',
        desc: 'we are aware that the results of our work have an impact on our lives and the lives of future generations'
    },
    {
        id: 3,
        icon: <Cpu />,
        title: 'Innovation',
        desc: 'we use the latest technology to implement non-standard solutions'
    },
    {
        id: 4,
        icon: <Rank />,
        title: 'Quality',
        desc: 'we do not strive to be the first among others, but we want to be the best in our business'
    },
]

export const About = () => {
    return (
        <section className={styles.container} id='about'>
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
        </section>
    )
}
