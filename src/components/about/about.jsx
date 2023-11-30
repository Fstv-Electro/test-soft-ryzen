import Circle from '../../../public/icons/Features-maximize-circle.svg';
import Rank from '../../../public/icons/Features-ranking.svg';
import Global from '../../../public/icons/Features-global-edit.svg';
import Cpu from '../../../public/icons/Features-cpu-charge.svg';
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
        <div className={styles.container} id='about'>
            {cardData && cardData.map(item => (
                <div className={styles.card} key={item.id}>
                    <AboutCard icon={item.icon} title={item.title} desc={item.desc} />
                </div>
            ))}
            <div className={styles.attentionContainer}>
                <h2 className={styles.attentionTitle}>Electricity we produced for all time</h2>
                <div className={styles.verticalLine}></div>
                <p className={styles.attentionDesc}><span className={styles.attentionNumbers}>1.134.147.814</span> kWh</p>
            </div>
        </div>
    )
}
