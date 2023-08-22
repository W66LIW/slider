import bottle from "../images/slide3/bottle.svg"
export default function Bottle() {
    return (
        <div style={{position:"absolute", bottom:"-10px", left:"60px"}}>
            <img src={bottle} alt="bottle" style={{height:"670px"}}/>
        </div>
    )
}