import {useEffect, useRef, useState } from 'react';
import home from '../images/global.svg';
import onpoint from '../images/Shape 1.svg';
import HomePage from './HomePage';
import MessageText from './MessageText';
import KeyMessage from './KeyMessage';

const Container = () => {
    const homeRef = useRef(null);
    const messageTextRef = useRef(null);
    const [swipe, setSwipe] = useState("");
    const [slideIndex, setSlideIndex] = useState(+0);
    const app = document.getElementsByClassName("App");

    useEffect(() => {
       app[0].scrollTo((1024*slideIndex), 0)
    }, [swipe])

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    const handleClick = () => {
        messageTextRef.current.scrollIntoView({ behavior: "smooth"});
        setSlideIndex(+1) }
    
    const handleHomeClick = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth"})
        setSlideIndex(+0) }
    
    const touchStart = (e) => {       
            startPos = getPositionX(e) 
            isDragging = true }

    const touchMove = (e) => { 
        if(isDragging) {  
            const currentPos = getPositionX(e); 
            currentTranslate =  prevTranslate + currentPos - startPos }}
    
    const touchEnd = () => {
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;  
        if(movedBy < -200 && slideIndex < 2) {
            setSlideIndex(slideIndex + 1);
            setSwipe(movedBy);
        } else if(movedBy > 200 && slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
            setSwipe(movedBy);
        } else {
            setSwipe(movedBy) }
        }
    
    const getPositionX = (e) => e.touches[0].clientX;

    return(
        <div>
            <div className="Container"            
                onTouchStart={(e) => touchStart(e)}
                onTouchEnd={touchEnd}
                onTouchMove={(e) => touchMove(e)}>
                <HomePage messageTextRef={messageTextRef} onBtnClick={handleClick} ref={homeRef}/>
                <MessageText ref={messageTextRef}/>
                <KeyMessage/>
            </div>
            <img onClick={handleHomeClick} className="Home" src={home} alt="Home" />
            <img className="Onpoint" src={onpoint} alt="Home" />
        </div>   
    )
}

export default Container;