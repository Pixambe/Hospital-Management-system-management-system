// components/Modal.js
import styles from './component_styles/modal.module.css'; // Import the CSS module

const Modal = ({ onClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Modal Title</h2>
                <p>Your modal content here...</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
