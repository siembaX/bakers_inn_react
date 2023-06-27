import React from 'react'
import ReactDOM from 'react-dom'
import IMAGES from '../../images/index1'

const MODAL_STYLES = {
    position:"fixed",
    top:'50%',
    left:'50%',
    transform:"translate(-50%, -50%)",
    backgroundColor:'#fff',
    padding:'50px',
    zIndex:1000
}

const OVERLAY_STYLES = {
    position:'fixed',
    top:'0',
    left:'0',
    right:'0',
    bottom:'0',
    backgroundColor:'rgba(0,0,0, .7 )',
    zIndex:1000
}

const BUTTON_STYLE = {
    width:'40px',
    position:'absolute',
    right:'30px',
    top:'20px',
    padding:'0'
}

export const Modalz = ({open,children, onClose}) => {
    if (!open) return null
    return ReactDOM.createPortal (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button onClick={onClose} style={BUTTON_STYLE}><img src={IMAGES.closebtn} alt="" /></button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    );
}
