import img from '../images/slide1/imgs.svg';
import layer from '../images/slide1/Layer 7.svg';
import pinkSperm from '../images/slide1/pink_sperm_1.svg';
import ball from '../images/slide1/Layer 4.svg';
import miniBall from '../images/slide1/Layer 4 copy.svg';
import topMiniBall from '../images/slide1/Layer 4 copy 2.svg';
import topBall from '../images/slide1/Layer 5.svg';
import bottomBall from '../images/slide1/bakti_1.svg';
import bottomSperm from '../images/slide1/pink_sperm.svg';
import btn from '../images/slide1/btn.svg';
import { forwardRef } from 'react';

const FirstSlide = forwardRef(({onBtnClick}, ref) => {
    return (
    <div ref={ref} id="home" className="Slide" onTouchStart={() => localStorage.SlideIndex = 0}>                
            <p className="Hello">Привет,</p>
            <p className="Task">Это <span>не</span> коммерческое задание</p>
            <img src={topMiniBall} className="Ball-1" alt="ball-1"/>
            <img src={layer} className="Layer" alt="img"/>
            <img src={topBall} className="Ball-2" alt="ball-2"/>
            <div className="rot-container">
                <img src={img} className="Ball-3" alt="ball-3"/>
            </div>
            <img className="Ball-4" src={bottomBall} alt="ball-4"/>
            <img src={miniBall} className="Ball-5" alt="ball-5"/>
            <img src={ball} className="Ball-6" alt="img"/>
            <img src={pinkSperm} className="Top-sperm" alt="img"/>
            <img src={bottomSperm} className="Bottom-sperm" alt="img"/>
            <img onClick={onBtnClick} src={btn} alt="Button" className="Next-btn"/>
        </div>)
})

export default FirstSlide;