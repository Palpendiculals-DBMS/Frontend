import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Modal = (props) => {

    return (
        <Fragment>
            <div className={ classes.modal }>
                <div className={ classes.modalHeading }>
                    <h2>{ props.title }</h2>
                    <hr></hr>
                </div>
                <div className={ classes.modalButtons }>
                    <button>Preview</button>
                    <button>View Form</button>
                </div>
                <div className={ classes.optionButton }>
                    <button><BsThreeDotsVertical></BsThreeDotsVertical></button>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal