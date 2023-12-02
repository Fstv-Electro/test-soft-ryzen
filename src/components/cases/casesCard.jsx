import Image from 'next/image';
import ArrowRight from '../../../public/icons/Arrow-right.svg'
import styles from './cases.module.css';



export const CasesCard = ({image, region, caseLink, caseDisc, date}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <Image src={image.url} alt={image.alt} fill quality={75} sizes="(max-width: 480px) 320px, (max-width: 768px) 342px, (max-width: 1200px) 596px, 100%"/>
            </div>
            <div className={styles.regionContainer}>
                <div>
                    <p>{region.location}</p>
                    <p>{region.company}</p>
                </div>
                <button className={styles.linkBtn} type='button' onClick={() => caseLink()}><ArrowRight/></button>
            </div>
            <div className={styles.caseContainer}>
                <div className={styles.line}></div>
                <div className={styles.caseItems}>
                    <p>{caseDisc}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}