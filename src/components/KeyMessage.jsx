import icon1 from "../images/slide3/icon1.svg";
import icon2 from "../images/slide3/icon2.svg";
import Bottle from "./Bottle";
import button from "../images/slide3/btn3.svg";
import Modal from "./Modal";
import { useState } from "react";

function KeyMessage() {
    
    const [isModalActive, setIsModalActive] = useState(false);
    function handleClick() {
        setIsModalActive(!isModalActive)
    }

    return(
        <div id="2" className="Slide" onTouchStart={() => {localStorage.SlideIndex = 2}} 
        style={{justifyContent:"end", alignItems:"end"}} >
            <p className="KeyMessage">Ключевое сообщение</p>
            <div style={{display:"-webkit-inline-box", width:"800px", height:"380px", paddingBottom:"30px", paddingLeft:"20px"}}>
                <div className="TextBlockMini" style={{width:"420px", height:"280px", marginRight:"35px", paddingLeft:"120px"}}>
                    <img src={icon2} alt="icon1" style={{width:"75px", position:"absolute", top:"-40px", left:"120px"}}/>
                    Ehicula ipsum a arcu <br/> cursus vitae. Eu non <br/>
                    diam phasellus <br/> vestibulum lorem sed <br/>
                    risus ultricies 
                </div>
                <div>
                    <div className="TextBlockMini">
                        <img src={icon1} alt="icon1" style={{width:"75px", position:"absolute", top:"-27px", left:"50px"}}/>
                        A arcu <br/> cursus vitae 
                    </div>
                    <img src={button} alt="button" style={{width:"250px", marginTop:"40px"}}
                    onClick={handleClick} />
                </div>

            </div>
            <h5 className="Brend">Brend<b>XY</b></h5>
            <Modal active={isModalActive} onBtnClick={handleClick}/> 
            <Bottle/>           
        </div>
    )
}

export default KeyMessage;