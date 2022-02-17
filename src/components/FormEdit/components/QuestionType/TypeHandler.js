import React from 'react'
import ShortText from './ShortText';

function TypeHandler({ question, index }) {

    switch (question.type) {
        case 'shorttext':
            return (
                <React.Fragment>
                    <ShortText question={question} index={index} />
                </React.Fragment>
            )
        case 'longtext':
            break;
        default:
            break;
    }

    return (
        <></>
    )
}

export default TypeHandler