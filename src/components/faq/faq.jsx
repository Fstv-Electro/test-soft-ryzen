import { FaqItem } from './faqItem';
import { ContactLink } from '../../atoms/contactLink';
import { useState } from 'react';
import { Container } from '@/hooks/observer';
import styles from './faq.module.css';


const faqData = [
    {
        id: 21,
        question: 'How do wind turbines and solar panels work together in a renewable energy system?',
        answer: 'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.'
    },
    {
        id: 22,
        question: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
        answer: "Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."
    },
    {
        id: 23,
        question: "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
        answer: "Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."
    },
    {
        id: 24,
        question: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
        answer: "EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."
    },
    {
        id: 25,
        question: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
        answer: "EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."
    },
]

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