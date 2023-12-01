import { useGlobalContext } from '@/store/Context';
import LogoIcon from '../../public/icons/Logo.svg';
import styles from './logo.module.css';


export const Logo = () => {
    const { currentSection } = useGlobalContext();

    return (
        <div className={styles.logoContainer}>
            <LogoIcon />
            <p className={styles.logoText} style={{color: currentSection !== null ? '#97d28b' : ''}}>ecosolution</p>
            <div className={styles.textGreenEnergy}><p><span className={styles.textGreen}>green</span>enry</p>for life</div>
        </div>
    )
}