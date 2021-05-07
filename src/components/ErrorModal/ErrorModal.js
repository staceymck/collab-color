import React from 'react';
import styles from './ErrorModal.module.css';
import { connect } from 'react-redux';
import { hideError } from '../../actions/errorActions';

const ErrorModal = (props) => {

  //start interval, at 5 seconds, dispatch hideError

  return (
    <>
    {props.isOpen && props.error ?
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <button onClick={() => props.hideError()}>Close Error</button>
          <h1 className={styles.message}>Something went wrong! Please try again</h1>
          <p>Error details: {props.error}</p>
        </div>
      </div>
      :
      null
    } 
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.errors.error,
    isOpen: state.errors.isOpen
  }
}

export default connect(mapStateToProps, { hideError })(ErrorModal)