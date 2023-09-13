import { useRef } from 'react';
import home from '../images/global.svg';
import onpoint from '../images/Shape 1.svg';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';

const SliderContainer = () => {
    const containerRef = useRef(null);
    let slideIndex = +0;

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    const handleBtnClick = () => {
        slideIndex = +1; 
        containerRef.current.style.transform = `translateX(-${slideIndex*1024}px`;}
    
    const handleHomeClick = () => {
        slideIndex = 0;
        containerRef.current.style.transform = `translateX(-${slideIndex*1024}px`;}
    
    const touchStart = (e) => {       
            startPos = getPositionX(e);
            isDragging = true; }

    const touchMove = (e) => { 
        if(isDragging) {  
            const currentPos = getPositionX(e); 
            currentTranslate =  prevTranslate + currentPos - startPos; }}
    
    const touchEnd = () => {
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;  
        if(movedBy < -200 && slideIndex < 2) {
            slideIndex += 1;
        } else if(movedBy > 200 && slideIndex > 0) {
            slideIndex -= 1;}
        containerRef.current.style.transform = `translateX(-${slideIndex*1024}px`;
        }
        
    const getPositionX = (e) => e.touches[0].clientX;
    
    return(
        <div>
            <div ref={containerRef} className="Container"            
                onTouchStart={(e) => touchStart(e)}
                onTouchEnd={touchEnd}
                onTouchMove={(e) => touchMove(e)}>
                <FirstSlide onBtnClick={handleBtnClick}/>
                <SecondSlide/>
                <ThirdSlide/>
            </div>
            <img onClick={handleHomeClick} className="Home" src={home} alt="Home" />
            <img className="Onpoint" src={onpoint} alt="Onpoint" />
        </div>   
    )
}

export default SliderContainer;