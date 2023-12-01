'use client'
import Slider from 'react-slick';
import { CasesCard } from './casesCard';
import { useRef, useState } from 'react';
import { Container } from '@/hooks/observer';
import ArrowRight from '../../../public/icons/Arrow-right-slider.svg';
import styles from './cases.module.css';

const slidesData = [
    {
        id: 11,
        image: {
            url: '/image/windmills-green.jpg',
            alt: 'windmills on green nature',
        },
        region: {
            location: 'Lviv Region',
            company: 'Radekhiv town Private Enterprise "ZAKHIDNYI BUH"'
        },
        caseDisc: 'Wind Power for auto field irrigation',
        date: 'July 2023',
    },
    {
        id: 12,
        image: {
            url: '/image/solar-station.jpg',
            alt: 'solar batteries',
        },
        region: {
            location: 'Zhytomyr city',
            company: 'Private Enterprise "Bosch"'
        },
        caseDisc: 'Solar Panels for industrial use',
        date: 'November 2023',
    },
    {
        id: 13,
        image: {
            url: '/image/station.jpg',
            alt: 'blue water station',
        },
        region: {
            location: 'Rivne city',
            company: 'Private Enterprise "Biotech"'
        },
        caseDisc: 'Thermal modules',
        date: 'October 2023',
    },
    {
        id: 14,
        image: {
            url: '/image/windmills-gold.jpg',
            alt: 'windmills near the wheat fields',
        },
        region: {
            location: 'Kherson city',
            company: 'Private Enterprise "HealthyFarm"'
        },
        caseDisc: 'Wind power',
        date: 'September 2021',
    },
    {
        id: 15,
        image: {
            url: '/image/nuclear-power.jpg',
            alt: 'nuclear-power-plant-center-spain',
        },
        region: {
            location: 'Zaporizhia city',
            company: 'Private Enterprise "Biotech"'
        },
        caseDisc: 'Mini nuclear stations',
        date: 'May 2021',
    },
]

export const Cases = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideSetting = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: true,
    adaptiveHeight: true,
    initialSlide: 0,
    arrows: false,
    draggable: true,
    afterChange: (index) => {
        setCurrentSlide(index)
    },
    responsive: [
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true,
                adaptiveHeight: true,
                draggable: true,
                initialSlide: 0,
                arrows: false,
                afterChange: (index) => {
                    setCurrentSlide(index)    
                },
            }
        }
    ]
    };



    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };


    return (
        <Container classContainer={styles.container} sectionName={'cases'}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Successful cases of our company</h2>
                <div className={styles.verticalLine}></div>
                <div className={styles.slideSwitchers}>
                    <p><span className={styles.slideCurrentText}>{currentSlide === 5 ? currentSlide : currentSlide + 1}</span> / {slidesData.length}</p>
                    <div className={styles.slideBtns}>
                        <button className={styles.slideBtnLeft} type='button' onClick={prevSlide}><ArrowRight/></button>
                        <button className={styles.slideBtn} type='button' onClick={nextSlide}><ArrowRight/></button>
                    </div>
                </div>
            </div>

            <Slider {...slideSetting} ref={sliderRef}>
                {slidesData.map(item => (
                    <div key={item.id}>
                        <CasesCard  image={item.image} region={item.region} date={item.date} caseDisc={item.caseDisc} caseLink={() => nextSlide()}/>
                    </div>
                ))}
                
            </Slider>
        </Container>
    )
}


