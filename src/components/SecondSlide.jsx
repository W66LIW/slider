import { useEffect, useRef } from 'react';
//import '../App.css';
import scrollBtn from '../images/slide2/scroll-btn.svg';
import txt from '../images/slide2/txt (1).svg';
import sperm1 from '../images/slide2/sperm1.svg';
import sperm2 from '../images/slide2/sperm2.svg';
import sperm3 from '../images/slide2/sperm3.svg';
import sperm4 from '../images/slide2/sperm4.svg';
import sperm5 from '../images/slide2/sperm5.svg';

const SecondSlide = () => {
    const scrollBtnRef = useRef(null);
    const scrollBlockRef = useRef(null);

    useEffect(() => {
        scrollBtnRef.current.scrollTo(0, 350)
    }, [])  

    const scrollButton = (e) => {        
            scrollBtnRef.current.scrollTo(0, 350-(e.target.scrollTop*1.3)) }

    const scrollText = (e) => {
        scrollBlockRef.current.scrollTo(0, (350 - e.target.scrollTop)/1.3) }
    
    return(
        <div id="Message" className="Slide">
            <p className="Message-text">Текст<br/>сообщения</p>
            <div className="Message-bg">
                <div ref={scrollBlockRef} className="Scroll-block"
                onScroll={(e)=>{scrollButton(e)}}>
                    <img src={txt} alt="text"/>
                </div> 
            </div>             
            <div className="Scroll-track">
                <div ref={scrollBtnRef} className="Scroll-btn"
                onScroll={(e)=>{scrollText(e)}}>
                    <div>
                        <img src={scrollBtn} alt='scroll Button'/>
                    </div>
                </div>
            </div>
            <img src={sperm1} className="Sperm1-slide2" alt='sperm'/>
            <img src={sperm2} className="Sperm2-slide2" alt='sperm'/>
            <img src={sperm3} className="Sperm3-slide2" alt='sperm'/>
            <img src={sperm4} className="Sperm4-slide2" alt='sperm'/>
            <img src={sperm5} className="Sperm5-slide2" alt='sperm'/>
        </div>
    )
}
export default SecondSlide;