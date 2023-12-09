'use client'
import Slider from 'react-slick';
import { CasesCard } from './casesCard';
import { useEffect, useRef, useState } from 'react';
import { Container } from '@/hooks/observer';
import ArrowRight from '../../../public/icons/Arrow-right.svg';
import { slidesData } from '@/pages/api/cases';
import styles from './cases.module.css';

export const Cases = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(2);

    useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCurrentSlide(1);
      } else {
        setCurrentSlide(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            if (index === 4) {
                setCurrentSlide(index + 1)
            } else {
                setCurrentSlide(index + 2)
            }
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
                    setCurrentSlide(index + 1)    
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
                <p><span className={styles.slideCurrentText}>{currentSlide}</span> / {slidesData.length}</p>
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


