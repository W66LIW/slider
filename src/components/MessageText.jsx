import { forwardRef } from 'react';
import rectangle from '../images/Rectangle.svg';
import scroll from '../images/scroll-btn.svg';
import txt from '../images/txt (1).svg';

const MessageText = forwardRef (function MessageText(props, ref) {
    return(
        <div ref={ref} id="1" className="Slide" onTouchStart={() => {localStorage.SlideIndex = 1}}>
            <p className='Message-text'>Текст <br/>сообщения</p>
            {/* <img src={rectangle} alt="rectangle" />
            <img src={scroll} alt="scroll" /> */}
            <div style={{position:"relative", width:"87%", left:"-30px"}}>
                <div className="Message-bg"></div>
                <div className='Scroll-block'>
                    <div>
                        <img src={txt} alt="text" style={{width: "700px"}}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
})
export default MessageText;