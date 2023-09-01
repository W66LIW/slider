import bottle from '../images/slide3/bottle.svg';
import b6 from '../images/slide3/bubble6.svg';
import b5 from '../images/slide3/5.svg';
import b3 from '../images/slide3/3.svg';
import b1 from '../images/slide3/1.svg';
import b2 from '../images/slide3/2.svg';
import b7 from '../images/slide3/7.svg';
import b8 from '../images/slide3/8.svg';
import b4 from '../images/slide3/4.svg';

const Bottle = () => {
    return (
        <div className="Bottle-container">
            <img src={bottle} alt="bottle" className="Bottle"/>
            <img src={b3} alt="bubble" className="Bubble1 Anim"/>
            <img src={b5} alt="bubble" className="Bubble2 Anim"/>
            <img src={b1} alt="bubble" className="Bubble3 AnimV"/>
            <img src={b2} alt="bubble" className="Bubble4 AnimV"/>
            <img src={b7} alt="bubble" className="Bubble5 Anim"/>
            <img src={b8} alt="bubble" className="Bubble6 Anim"/>
            <img src={b4} alt="bubble" className="Bubble7 AnimV"/>
            <img src={b6} alt="bubble" className="Bubble8 AnimV"/>
        </div>
    )
}

export default Bottle;