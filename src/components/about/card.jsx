import styles from './about.module.css';

export const AboutCard = ({icon, title, desc}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitleContainer}>
                {icon}        
                <h3 className={styles.cardTitle}>{title}</h3>
            </div>
            <div className={styles.line}></div>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}