import { forwardRef, useEffect } from 'react';
import scrollBtn from '../images/slide2/scroll-btn.svg';
import txt from '../images/slide2/txt (1).svg';
import sperm1 from '../images/slide2/sperm1.svg';
import sperm2 from '../images/slide2/sperm2.svg';
import sperm3 from '../images/slide2/sperm3.svg';
import sperm4 from '../images/slide2/sperm4.svg';
import sperm5 from '../images/slide2/sperm5.svg';

const MessageText = forwardRef (function MessageText(props, ref) {
    useEffect(() => {
        document.getElementById("Scroll").scrollTo(0, 350)
    }, [])  
    
    return(
        <div ref={ref} className="Slide">
            <p className='Message-text'>Текст <br/>сообщения</p>
            <div className="Message-bg">
                <div className='Scroll-block'>
                    <img src={txt} alt="text" style={{width: "656px"}}/>
                </div> 
            </div>             
            <div style={{position:"absolute", left:"90px", top:"240px", height:"440px", width:"7px", 
            borderRadius:"10px",  backgroundColor:"black"}}>
                <div id="Scroll" style={{position:"relative", top:"-5px", left:"-7px", height:"490px", 
                width:"40px", borderRadius:"10px", overflowY:"scroll"}}
                onScroll={(e)=>{scroll(e)}}>
                    <div style={{height:"840px", position:"relative"}}>
                        <img src={scrollBtn} style={{position:"relative", width:"20px", top:"350px"}}/>
                    </div>
                </div>
            </div>
            <img src={sperm1} style={{top:"130px", left:"830px", height:"150px"}} className="Sperm-slide2"/>
            <img src={sperm2} style={{top:"135px", left:"670px", height:"300px"}} className="Sperm-slide2"/>
            <img src={sperm3} style={{top:"160px", left:"500px", height:"500px"}} className="Sperm-slide2"/>
            <img src={sperm4} style={{bottom:"0px", left:"970px", height:"300px"}} className="Sperm-slide2"/>
            <img src={sperm5} style={{bottom:"30px", left:"1000px", height:"150px"}} className="Sperm-slide2"/>
        </div>
    )

    function scroll(e) {
        document.querySelector(".Scroll-block").scrollTo(0, (350 - e.target.scrollTop)/1.4);
    }   

})
export default MessageText;