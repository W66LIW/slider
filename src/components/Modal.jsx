function Modal({active, onBtnClick}) {
    console.log(active)
    return(
        <div className={active ? "Slide Modal Active-modal" : "Slide Modal"} 
        onClick={onBtnClick}>
            <div className="Modal-content" onClick={e => e.stopPropagation()}> </div>
            
        </div>
    )
}

export default Modal;