import LogoIcon from '../../public/icons/Logo.svg';
import styles from './logo.module.css';


export const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <LogoIcon />
            <span className={styles.logoText}>ecosolution</span>
            <div className={styles.textGreenEnergy}><p><span className={styles.textGreen}>green</span>enry</p>for life</div>
        </div>
    )
}