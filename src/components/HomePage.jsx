import img from "../images/imgs.svg";
import layer from "../images/Layer 7.svg";
import pinkSperm from "../images/pink_sperm_1.svg";
import ball from "../images/Layer 4.svg";
import miniBall from "../images/Layer 4 copy.svg";
import topMiniBall from "../images/Layer 4 copy 2.svg";
import topBall from "../images/Layer 5.svg";
import bottomBall from "../images/bakti_1.svg";
import bottomSperm from "../images/pink_sperm.svg";
import btn from "../images/btn.svg";
import { forwardRef } from "react";

const HomePage = forwardRef(function HomePage({onBtnClick}, ref){
    return (
    <div ref={ref} id="0" className="Slide" onTouchStart={() => localStorage.SlideIndex = 0}>
            <img src={pinkSperm} className="PinkSperm" alt="img"/>
            <div className="rot-container" style={{zIndex: "3", right: "100px", top: "160px"}} >
                <img src={img} className="rot" alt="img"/>
            </div>
            <img src={layer} className="Layer"  alt="img"/>
            <img src={ball} className="Ball" alt="img"/>
            <img src={miniBall} className="Mini-ball" style={{bottom: "35px"}} alt="img"/>
            <img src={topMiniBall} className="Mini-ball" style={{top: "30px", left: "880px", height: "80px"}} alt="img"/>
            <img src={topBall} className="line-animation" style={{top: "100px", left: "750px", height: "75px"}} alt="img"/>
            <img className="line-animation" src={bottomBall} style={{zIndex: "1", height: "80px", left: "25px", bottom: "170px"}} alt="img"/>
            <img src={bottomSperm} className="Mini-ball" style={{bottom: "5px", left: "-110px", height: "190px"}} alt="img"/>                
            <p className="Hello">Привет,</p>
            <p className="Task" style={{zIndex: "1"}}>Это <span>не</span> коммерческое задание</p>
            <img onClick={onBtnClick} src={btn} alt="Button" style={{position: "absolute", zIndex: "4",top: "490px", right: "90px", width: "300px"}}/>
        </div>)
})

export default HomePage;