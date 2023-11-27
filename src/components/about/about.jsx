import styles from './about.module.css';


export const About = () => {
    return (
        <div className={styles.container} id='about'>
            <h2 className={styles.title}>Main values of our company</h2>
            <p className={styles.desc}>{`EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.`}</p>
        </div>
    )
}