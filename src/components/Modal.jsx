import { useState } from 'react';
import btnClose from '../images/slide3/btn_close.svg';
import btnLeft from '../images/slide3/btn_left.svg';
import btnRight from '../images/slide3/btn_right.svg';
import pinkEllipse from '../images/slide3/pinkEllipse.svg';
import emptyEllipse from '../images/slide3/emptyEllipse.svg';

const Modal = ({active, closeModal}) => {

    const [isFirstList, setIsFirstList] = useState(true);

    return(
        <div className={active ? "Slide Modal Active-modal" : "Slide Modal"} 
        onClick={closeModal}>
            <div className="Modal-content" onClick={e => e.stopPropagation()}>
                <img src={btnClose} alt="close button" className="Close-button"
                onClick={closeModal}/>                
                <p>Преимущества</p> 
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
                <div className="Flipper">
                    <img src={btnLeft} className="Arrow" onClick={() => setIsFirstList(!isFirstList)}/>
                    {isFirstList ? <img className="Ellipse" src={pinkEllipse}/> : 
                    <img src={emptyEllipse} className="Ellipse"/>} 
                    {isFirstList ? <img src={emptyEllipse} className="Ellipse"/> : 
                    <img src={pinkEllipse} className="Ellipse"/>} 
                    <img src={btnRight} className="Arrow" onClick={() => setIsFirstList(!isFirstList)}/>
                </div>
            </div>
            
        </div>
    )
}

export default Modal;