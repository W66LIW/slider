import home from "../images/global.svg";
import onpoint from "../images/Shape 1.svg";
import HomePage from './HomePage';
import MessageText from './MessageText';
import KeyMessage from './KeyMessage';
import Modal from './Modal'
import { useEffect } from "react";

function Container() {
    localStorage.SlideIndex = +0;
    useEffect(() => document.getElementById(`${localStorage.SlideIndex}`).scrollIntoView({ behavior: "smooth"}))

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
                    <HomePage />
                    <MessageText />
                    <KeyMessage />
                    <Modal/>
                </div>
                <img onClick={() => document.getElementById("0").scrollIntoView({ behavior: "smooth"})} className="Home" src={home} alt="Home" />
                <img onClick={() => document.getElementById("1").scrollIntoView({ behavior: "smooth"})} className="Onpoint" src={onpoint} alt="Home" />
            </div>
            
        )
    
        function touchStart(e) {       
                startPos = getPositionX(e) 
                isDragging = true;
        }
    
        function touchEnd() {
            isDragging = false;
            const movedBy = currentTranslate - prevTranslate;
    
            if(movedBy < -100 && localStorage.SlideIndex < 2) {
                localStorage.SlideIndex = +localStorage.SlideIndex + 1;
                //document.getElementById(`${localStorage.SlideIndex}`).scrollIntoView({ behavior: "smooth"})
                console.log("left");
            }
            if(movedBy > 100 && localStorage.SlideIndex > 0) {
                console.log("right");
                localStorage.SlideIndex = +localStorage.SlideIndex - 1;
                //document.getElementById(`${localStorage.SlideIndex}`).scrollIntoView({ behavior: "smooth"})
            }
        }
    
        function touchMove(e) { 
            if(isDragging) {  
                const currentPos = getPositionX(e); 
                currentTranslate =  prevTranslate + currentPos - startPos;    
        }}
    
        function getPositionX(e) {
            return (e.touches[0].clientX)
    
        }

      
            
        
    
   
}

export default Container;