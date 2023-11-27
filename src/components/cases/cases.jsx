import Circle from '../../../public/icons/Features-maximize-circle.svg';
import Rank from '../../../public/icons/Features-ranking.svg';
import Global from '../../../public/icons/Features-global-edit.svg';
import Cpu from '../../../public/icons/Features-cpu-charge.svg';
import { CasesCard } from './card';
import styles from './cases.module.css';

const cardData = [
    {
        id: 1,
        icon: <Circle />,
        title: 'Openenrs',
        desc: 'to the world, people, new ideas and projects'
    },
    {
        id: 2,
        icon: <Global />,
        title: 'Openenrs',
        desc: 'to the world, people, new ideas and projects'
    },
    {
        id: 3,
        icon: <Cpu />,
        title: 'Openenrs',
        desc: 'to the world, people, new ideas and projects'
    },
    {
        id: 4,
        icon: <Rank />,
        title: 'Openenrs',
        desc: 'to the world, people, new ideas and projects'
    },
]

export const Cases = () => {

    return (
        <div className={styles.container} id='cases'>
            {cardData && cardData.map(item => (
                <div className={styles.card} key={item.id}>
                    <CasesCard icon={item.icon} title={item.title} desc={item.desc} />
                </div>
            ))}
        </div>
    )
}


