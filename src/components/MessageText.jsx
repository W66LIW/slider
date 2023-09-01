import { forwardRef, useEffect } from 'react';
//import '../App.css';
import scrollBtn from '../images/slide2/scroll-btn.svg';
import txt from '../images/slide2/txt (1).svg';
import sperm1 from '../images/slide2/sperm1.svg';
import sperm2 from '../images/slide2/sperm2.svg';
import sperm3 from '../images/slide2/sperm3.svg';
import sperm4 from '../images/slide2/sperm4.svg';
import sperm5 from '../images/slide2/sperm5.svg';

const MessageText = forwardRef ((props, ref) => {
    useEffect(() => {
        document.getElementById("Scroll").scrollTo(0, 350)
    }, [])  

    const scroll = (e) => {
        document.querySelector(".Scroll-block").scrollTo(0, (350 - e.target.scrollTop)/1.4);
    } 
    
    return(
        <div ref={ref} id="Message" className="Slide">
            <p className="Message-text">Текст<br/>сообщения</p>
            <div className="Message-bg">
                <div className="Scroll-block">
                    <img src={txt} alt="text"/>
                </div> 
            </div>             
            <div className="Scroll-track">
                <div id="Scroll" className="Scroll-btn"
                onScroll={(e)=>{scroll(e)}}>
                    <div>
                        <img src={scrollBtn}/>
                    </div>
                </div>
            </div>
            <img src={sperm1} className="Sperm1-slide2"/>
            <img src={sperm2} className="Sperm2-slide2"/>
            <img src={sperm3} className="Sperm3-slide2"/>
            <img src={sperm4} className="Sperm4-slide2"/>
            <img src={sperm5} className="Sperm5-slide2"/>
        </div>
    )
})
export default MessageText;