import icon1 from '../images/slide3/icon1.svg';
import icon2 from '../images/slide3/icon2.svg';
import Bottle from './Bottle';
import button from '../images/slide3/btn3.svg';
import Modal from './Modal';
import { useState } from 'react';

const KeyMessage = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const handleClick = () => {
        setIsModalActive(!isModalActive)
    }

    return(
        <div id="keyMessage" className="Slide Key-message-slide">
            <p className="KeyMessage">Ключевое сообщение</p>
            <div className="Main-block">
                <div className="TextBlockMini1">
                    <img src={icon2} alt="icon1"/>
                    Ehicula ipsum a arcu <br/> cursus vitae. Eu non <br/>
                    diam phasellus <br/> vestibulum lorem sed <br/>
                    risus ultricies 
                </div>
                <div>
                    <div className="TextBlockMini2">
                        <img src={icon1} alt="icon1"/>
                        A arcu <br/> cursus vitae 
                    </div>
                </div>
                <img src={button} alt="button"
                    onClick={handleClick} />
            </div>
            <h5 className="Brend">Brend<b>XY</b></h5>
            <Modal active={isModalActive} onBtnClick={handleClick}/> 
            <Bottle/>           
        </div>
    )
}

export default KeyMessage;