import "./Modal.scss";

export default function Modal({ title, children, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modalOverlay">
      <div className="modalWrapper">
        <div className="modalTitle">{title}</div>
        <div className="modalContent">
          {children}
        </div>
        <button className="cancelBtn" onClick={onClose}>
          Close
        </button>
       

      </div>
    </div>
  )
}