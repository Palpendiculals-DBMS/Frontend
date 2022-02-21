import React from 'react'
import DShorttext from './components/DShorttext'
import LongText from './components/DLongText'
function DisplayHandler({ question, index }) {

    switch (question.type) {
        case 'shorttext':
            return (
                <React.Fragment>
                    <DShorttext data={question} />
                </React.Fragment>
            );
        case 'longtext':
            return (
                <React.Fragment>
                    <LongText data={question} />
                </React.Fragment>
            )
        default:
            break;
    }

    return (
        <></>
    )
}

export default DisplayHandler