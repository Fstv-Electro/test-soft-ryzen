import LogoIcon from '../../public/icons/Logo.svg';
import styles from './logo.module.css';


export const Logo = () => {

    return (
        <div className={styles.logoContainer}>
            <LogoIcon />
            <p className={styles.logoText}>ecosolution</p>
            <div className={styles.textGreenEnergy}><p><span className={styles.textGreen}>green</span>enry</p>for life</div>
        </div>
    )
}