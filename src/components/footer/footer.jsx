import { Logo } from '@/atoms/logo';
import ArrowRight from '../../../public/icons/Arrow-right.svg';
import Facebook from '../../../public/icons/Facebook.svg';
import Instagram from '../../../public/icons/Instagram.svg';
import Link from 'next/link';
import styles from './footer.module.css';


export const Footer = () => {


    return (
        <div className={styles.container} id='footer'>
            <div className={styles.logotype} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <Logo />
                <Link href='/#banner' className={styles.linkUp}><ArrowRight/></Link>
            </div>
            <div className={styles.socials}>
                <Facebook />
                <Instagram />
            </div>
            <Link href='/#banner' className={styles.secondLinkUp}><ArrowRight/></Link>
                <address className={styles.address}>
                    79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </address>
                <Link href='mailto:office@ecosolution.com'>office@ecosolution.com</Link>
                <p className={styles.copyright}>ecosolution © 2023</p>

        </div>
    )
}