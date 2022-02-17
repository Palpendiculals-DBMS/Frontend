import React from 'react'

import { FormEditContext } from '../../../pages/form/FormEdit'
import TypeHandler from './QuestionType/TypeHandler';

function DisplayEditableQuestions(props) {

    const { formData, formDataActions } = React.useContext(FormEditContext);


    return (
        <React.Fragment>
            {
                formData.map((question, index) => {
                    return (
                        <div key={index}>
                            <TypeHandler question={question} index={index} />
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default DisplayEditableQuestions