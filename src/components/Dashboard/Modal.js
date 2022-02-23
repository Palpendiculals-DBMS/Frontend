import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

const Modal = (props) => {
    const history = useHistory();
    return (
        <Fragment>
            <div className={`font-body ${classes.modal}`}>
                <div className={classes.modalHeading}>
                    <h2>{props.title}</h2>
                    <hr />
                    <p
                        className={`p-2 text-gray-100/50`}
                    >
                        {props.description.toString().slice(0, 10)}...
                    </p>
                </div>
                <div className={classes.modalButtons}>
                    <button
                        onClick={(e) => {
                            props.onPreview(e, props.id);
                        }}
                        className={`opacity-50 hover:opacity-100 transition-all`}
                    >Preview</button>
                    <button
                        className={`opacity-50 hover:opacity-100 transition-all`}
                        onClick={(e) => {
                            props.ViewForm(e, props.id);
                        }}
                    >View Form</button>

                </div>
                <div
                    className={classes.optionButton}

                >
                    <button>
                        <BsThreeDotsVertical />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal