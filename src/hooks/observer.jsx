import { useGlobalContext } from '@/store/Context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Container = ({ children, sectionName, classContainer }) => {
    const { ref, inView } = useInView({
        threshold: 1
    });
    const { handleCrntSection } = useGlobalContext();

    useEffect(() => {
        if (inView) {
            handleCrntSection(sectionName);
        }
    },[handleCrntSection, inView, sectionName])

    return (
        <section ref={ref} className={classContainer} id={sectionName}>
            {children}
        </section>
    )
}