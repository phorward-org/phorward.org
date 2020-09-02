import React from 'react'
import './Modal.scss'
const Modal = ({ handleClose, children }) => {
  const close = () => {
    document.getElementById('ModalBackground').className = 'closing'
    document.getElementById('Modal').className = 'closing'
    setTimeout(() => {
      handleClose()
    }, 320)
  }

  const conditionalClose = e => {
    if (e.target.id === 'ModalBackground') close()
  }

  return (
    <div id="ModalBackground" onClick={conditionalClose}>
      <div id="Modal">
        <i className="fa fa-times" alt="Close" onClick={close} />
        {children}
      </div>
    </div>
  )
}
export default Modal
