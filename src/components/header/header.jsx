import Logo from '../../../public/icons/Logo.svg';
import Facebook from '../../../public/icons/Facebook.svg';
import Instagram from '../../../public/icons/Instagram.svg';
import ArrowTopRight from '../../../public/icons/Arrow-top-right.svg'
import Burger from '../../../public/icons/Menu.svg';
import Ellipse from '../../../public/icons/Ellipse.svg'
import Close from '../../../public/icons/Closemenu.svg'
import Link from 'next/link';
import styles from './header.module.css';
import { useRef, useState } from 'react';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Logo />
                <span className={styles.logoText}>ecosolution</span>
                <div className={styles.textGreenEnergy}><p><span className={styles.textGreen}>green</span>enry</p>for life</div>
            </div>
            <nav className={styles.navContainer}>
                <button className={styles.navMenuBtn} onClick={toggleModal}><Burger/></button>
                <Link href='#contacts' className={styles.contactsLink}><p className={styles.linkText}>Get in touch</p><Ellipse/></Link>
            </nav>
            {isOpen && (
                <div ref={modalRef} className={styles.backdrop}>
                    <div className={styles.modal}>
                        <button className={styles.modalBtnClose} onClick={toggleModal}><Close/> close</button>
                        <div className={styles.modalLine}></div>
                        <div className={styles.modalNavContainer}>
                            <nav className={styles.modalNav}>
                            <Link href='#main' className={styles.modalLink}>Main <ArrowTopRight /></Link>
                            <Link href='#about' className={styles.modalLink}>About <ArrowTopRight /></Link>
                            <Link href='#cases' className={styles.modalLink}>Cases <ArrowTopRight /></Link>
                            <Link href='#faq' className={styles.modalLink}>FAQ <ArrowTopRight /></Link>
                            <Link href='#contacts' className={styles.modalLink}>Contact Us <ArrowTopRight /></Link>
                            </nav>
                            <div className={styles.modalSocials}>
                                <Facebook />
                                <Instagram />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
};