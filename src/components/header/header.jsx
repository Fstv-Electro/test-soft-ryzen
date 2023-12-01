import { Logo } from '@/atoms/logo';
import Facebook from '../../../public/icons/Facebook.svg';
import Instagram from '../../../public/icons/Instagram.svg';
import Burger from '../../../public/icons/Menu.svg';
import Close from '../../../public/icons/Closemenu.svg'
import Link from 'next/link';

import { ContactLink } from '../../atoms/contactLink';
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useRef, useState } from 'react';

import styles from './header.module.css';
import { useGlobalContext } from '@/store/Context';

export const Header = () => {
    const { toggleModal } = useGlobalContext();

    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.navContainer}>
                <button className={styles.navMenuBtn} onClick={(e) => toggleModal(e)}><Burger/></button>
                <ContactLink text={'Get in touch'} classLink={styles.contactsLink} classText={styles.linkText} classIcon={styles.icon}/>
            </nav>
        </header>
    )
};