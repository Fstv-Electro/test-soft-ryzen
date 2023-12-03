import { FaqItem } from './faqItem';
import { ContactLink } from '../../atoms/contactLink';
import { useState } from 'react';
import { Container } from '@/hooks/observer';
import { faqData } from '@/pages/api/faq';

import styles from './faq.module.css';

export const Faq = () => {
    const [current, setCurrent] = useState(0);

    const handleCurrent = (index) => {
        setCurrent(index);
    }

    return (
        <Container classContainer={styles.container} sectionName={'faq'}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <ul className={styles.faqList}>
                {faqData && faqData.map((item, index) => (
                    <li key={item.id} className={styles.faqItem}>
                        <div className={styles.line}></div>
                        <FaqItem question={item.question} index={index} handleCurrent={handleCurrent} current={current} answer={item.answer}/>
                    </li>
                ))}
            </ul>
            <div className={styles.contactContainer}>
                <h2 className={styles.secondTitle}>Frequently Asked Questions</h2>
                <div className={styles.faqContacts}>
                    <h3 className={styles.contactTitle}>Didn&apos;t find the answer to your question?</h3>
                    <ContactLink text={'Contact Us'} classLink={styles.contactsLink} classText={styles.linkText} classIcon={styles.icon}/>
                </div>
            </div>
        </Container>
    )
}