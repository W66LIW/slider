import { useState } from "react";
import btnClose from "../images/slide3/btn_close.svg";
import btnLeft from "../images/slide3/btn_left.svg";
import btnRight from "../images/slide3/btn_right.svg";
import pinkEllipse from "../images/slide3/pinkEllipse.svg";
import emptyEllipse from "../images/slide3/emptyEllipse.svg"

function Modal({active, onBtnClick}) {

    const [isFirstList, setIsFirstList] = useState(true);

    return(
        <div className={active ? "Slide Modal Active-modal" : "Slide Modal"} 
        onClick={onBtnClick}>
            <div className="Modal-content" onClick={e => e.stopPropagation()}>
                <img src={btnClose} alt="close button" style={{position:"absolute", top:"40px", right:"30px", width:"40px"}}
                onClick={onBtnClick}/>                
                <p style={{marginLeft:"230px", marginTop:"20px"}}>Преимущества</p> 
                {isFirstList ? 
                <ul>
                    <li className="Number">01</li>
                    <li>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit</li>
                    <li className="Number">02</li>
                    <li>Faucibus pulvinar elementum integer enim</li>
                    <li className="Number">03</li>
                    <li>Faucibus pulvinar elementum integer enim</li>
                </ul> : 
                <ul>
                    <li className="Number">03</li>
                    <li>Mi bibendum neque egestas congue quisque <br/>
                    egestas diam</li>
                    <li className="Number">04</li>
                    <li>Venenatis lectus magna fringilla urna</li>
                    <li className="Number">05</li>
                    <li>Venenatis lectus magna fringilla urna</li>
                </ul>}
                <div style={{position:"absolute", left:"240px", bottom:"30px", display:"flex", alignItems:"centre"}}>
                    <img src={btnLeft} style={{width:"10px", marginRight:"20px"}} onClick={() => setIsFirstList(!isFirstList)}/>
                    {isFirstList ? <img src={pinkEllipse} style={{width:"10px", marginRight:"10px"}}/> : 
                    <img src={emptyEllipse} style={{width:"10px", marginRight:"10px"}}/>} 
                    {isFirstList ? <img src={emptyEllipse} style={{width:"10px", marginRight:"20px"}}/> : 
                    <img src={pinkEllipse} style={{width:"10px", marginRight:"20px"}}/>} 
                    <img src={btnRight} style={{width:"10px"}} onClick={() => setIsFirstList(!isFirstList)}/>
                </div>
            </div>
            
        </div>
    )
}

export default Modal;