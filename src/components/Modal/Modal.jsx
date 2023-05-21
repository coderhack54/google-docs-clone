import React, { useEffect } from 'react';
import ReactDOM  from 'react-dom';
import "./Modal.scss"


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '35px',
    zIndex: 1000,
    borderRadius:'16px'
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

const Modal = ({open,children,onClose}) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (event.target.id === 'overlay') {
            onClose();
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [onClose]);
    

    if(!open) return null
  return ReactDOM.createPortal(
    <>  
    <div id="overlay" style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
        {children}
        </div>
    </div>
    </>,document.getElementById("portal")
  )
}

export default Modal