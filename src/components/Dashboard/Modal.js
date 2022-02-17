import React, { Fragment } from 'react'
import classes from './Modal.module.css'


const Modal = () => {
    return (
        <Fragment>
            <div className={ classes.modal }>
                <div className={ classes.modalHeading }>
                    <h2>Anti Romeo Squad</h2>
                    <hr></hr>
                </div>
                <div className={ classes.modalButtons }>
                    <button>Preview</button>
                    <button>View Form</button>
                </div>
                <div className={ classes.optionButton }>
                    <button>3 dande wala button</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal