import bottle from '../images/slide3/bottle.svg';
import b6 from '../images/slide3/bubble6.svg';
import b5 from '../images/slide3/5.svg';
import b3 from '../images/slide3/3.svg';
import b1 from '../images/slide3/1.svg';
import b2 from '../images/slide3/2.svg';
import b7 from '../images/slide3/7.svg';
import b8 from '../images/slide3/8.svg';
import b4 from '../images/slide3/4.svg';

export default function Bottle() {
    return (
        <div style={{position:"absolute", bottom:"-40px", left:"60px"}}>
            <img src={bottle} alt="bottle" style={{position:"relative", zIndex:"2", height:"700px"}}/>
            <img src={b3} alt="bubble" style={{position:"absolute", zIndex:"1", width:"45px", top:"20px", right:"25px", opacity:"0.929"}} className="Anim"/>
            <img src={b5} alt="bubble" style={{position:"absolute", zIndex:"2", width:"75px", top:"100px", right:"30px", opacity:"0.929"}} className="Anim"/>
            <img src={b1} alt="bubble" style={{position:"absolute", zIndex:"1", width:"40px", top:"140px", left:"30px", opacity:"0.929"}} className="AnimV"/>
            <img src={b2} alt="bubble" style={{position:"absolute", zIndex:"1", width:"135px", top:"230px", right:"-50px", opacity:"0.929"}} className="AnimV"/>
            <img src={b7} alt="bubble" style={{position:"absolute", zIndex:"1", width:"45px", top:"400px", left:"-35px", opacity:"0.929"}} className="Anim"/>
            <img src={b8} alt="bubble" style={{position:"absolute", zIndex:"2", width:"100px", top:"500px", left:"-25px", opacity:"0.929"}} className="Anim"/>
            <img src={b4} alt="bubble" style={{position:"absolute", zIndex:"1", width:"55px", top:"500px", right:"-40px", opacity:"0.929"}} className="AnimV"/>
            <img src={b6} alt="bubble" style={{position:"absolute", zIndex:"2", width:"170px", bottom:"-70px", right:"-23px", opacity:"0.929"}} className="AnimV"/>
        </div>
    )
}