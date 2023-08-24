import { forwardRef } from 'react';
import rectangle from '../images/slide2/Rectangle.svg';
import scroll from '../images/slide2/scroll-btn.svg';
import txt from '../images/slide2/txt (1).svg';

const MessageText = forwardRef (function MessageText(props, ref) {
    return(
        <div ref={ref} className="Slide" onTouchStart={() => {localStorage.SlideIndex = 1}}>
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