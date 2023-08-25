import {useEffect, useRef, useState } from "react";
import home from "../images/global.svg";
import onpoint from "../images/Shape 1.svg";
import HomePage from './HomePage';
import MessageText from './MessageText';
import KeyMessage from './KeyMessage';

function Container() {
       
    const [slideIndex, setSlideIndex] = useState(0);
    // let slideIndex = +0;
    const homeRef = useRef(null);
    const messageTextRef = useRef(null);
    const keyMessageRef = useRef(null);
    const refs = [homeRef, messageTextRef, keyMessageRef];

    // useEffect(() => {
    //     refs[slideIndex].current.scrollIntoView({ behavior: "smooth"})
    // }, [slideIndex])
    
    const handleClick = () => {
        messageTextRef.current.scrollIntoView({ behavior: "smooth"})
    }

    let isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0;
    
        return(
            <div>
                <div className="Container"            
                    onTouchStart={(e) => touchStart(e)}
                    onTouchEnd={touchEnd}
                    onTouchMove={(e) => touchMove(e)}>
                    <HomePage messageTextRef={messageTextRef} onBtnClick={handleClick} ref={homeRef}/>
                    <MessageText ref={messageTextRef}/>
                    <KeyMessage ref={keyMessageRef}/>
                </div>
                <img onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth"})} className="Home" src={home} alt="Home" />
                <img className="Onpoint" src={onpoint} alt="Home" />
            </div>
            
        )
    
        function touchStart(e) {       
                startPos = getPositionX(e) 
                isDragging = true;
        }
    
        function touchEnd() {
            isDragging = false;
            const movedBy = currentTranslate - prevTranslate;
    
            if(movedBy < -100 && slideIndex < 2) {
                console.log(movedBy)
                setSlideIndex(slideIndex - 1)
            }

            if(movedBy > 100 && slideIndex > 0) {
                console.log(movedBy)
                setSlideIndex(slideIndex + 1)
            }
        }
    
        function touchMove(e) { 
            if(isDragging) {  
                const currentPos = getPositionX(e); 
                currentTranslate =  prevTranslate + currentPos - startPos;    
            }
        }
    
        function getPositionX(e) {
            return (e.touches[0].clientX)
        }   
}

export default Container;