import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SuccessModal.module.css';

const SuccessModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
      <h1 className={styles.message}>Posted to the gallery!</h1>
      <Link className={styles.linkItem} to="/gallery">Visit gallery</Link>
      <Link className={styles.linkItem} to="/canvases">Start new painting</Link>
      </div>
    </div>
  )
}

export default SuccessModal