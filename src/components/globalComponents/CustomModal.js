import React, { useEffect } from "react";
import Modal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";
function CustomModal({ children, isOpen, widthClass , handelToogel}) {
  useEffect(()=>{
    Modal.setAppElement('body')
  })
  const customStyles = {
    content: {
      background: "#FFF",
      borderRadius: "10px",
      border:"1px solid #555"
    },
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={()=> handelToogel()}
      className={`animate__animated animate__fadeInDown absolute p-3 ${widthClass}`}
      shouldFocusAfterRender={false}
      preventScroll={false}
      
    >
        <button
          onClick={() => handelToogel()}
          className="absolute top-3 left-3 cursor-pointer z-10"
        >
          <IoCloseCircleOutline size={30} />
        </button>
        {children}
    </Modal>
  );
}

export default CustomModal;
