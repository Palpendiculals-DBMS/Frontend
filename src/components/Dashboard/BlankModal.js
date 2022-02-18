import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import vectorSvg from './BlankPageIcon.svg';

const BlankModal = () => {
    return (
        <Fragment>
            <div className={ classes.BlankModal }>
                <div className={ classes.plusDiv }>
                    <img src={ vectorSvg } alt='Vector Plus' />
                </div>
            </div>
        </Fragment>
    )
}

export default BlankModal;