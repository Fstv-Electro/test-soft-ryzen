import { Logo } from '@/atoms/logo';
import Facebook from '../../../public/icons/Facebook.svg';
import Instagram from '../../../public/icons/Instagram.svg';
import Burger from '../../../public/icons/Menu.svg';
import Close from '../../../public/icons/Closemenu.svg'
import Link from 'next/link';

import { ContactLink } from '../../atoms/contactLink';
import { GoArrowUpRight } from "react-icons/go";
import { useRef, useState } from 'react';

import styles from './header.module.css';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.navContainer}>
                <button className={styles.navMenuBtn} onClick={toggleModal}><Burger/></button>
                <ContactLink text={'Get in touch'} classLink={styles.contactsLink} classText={styles.linkText} classIcon={styles.icon}/>
            </nav>
            {isOpen && (
                <div ref={modalRef} className={styles.backdrop}>
                    <div className={styles.modal}>
                        <button className={styles.modalBtnClose} onClick={toggleModal}><Close/> close</button>
                        <div className={styles.modalLine}></div>
                        <div className={styles.modalNavContainer}>
                            <nav className={styles.modalNav}>
                            <Link href='/#main' className={styles.modalLink}>Main <GoArrowUpRight /></Link>
                            <Link href='/#about' className={styles.modalLink}>About <GoArrowUpRight /></Link>
                            <Link href='/#cases' className={styles.modalLink}>Cases <GoArrowUpRight /></Link>
                            <Link href='/#faq' className={styles.modalLink}>FAQ <GoArrowUpRight /></Link>
                            <Link href='/#contacts' className={styles.modalLink}>Contact Us <GoArrowUpRight /></Link>
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