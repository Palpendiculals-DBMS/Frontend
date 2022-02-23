import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import vectorSvg from './BlankPageIcon.svg';

const BlankModal = (props) => {
    return (
        <Fragment>
            <div {...props} className={`${classes.BlankModal} ${props.className}`} >
                <div className={classes.plusDiv}>
                    <img src={vectorSvg} alt='Vector Plus' />
                </div>
            </div>
        </Fragment>
    )
}

export default BlankModal;