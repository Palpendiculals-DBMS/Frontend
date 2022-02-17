import React from 'react'

import Switch from 'react-input-switch'
import { AiFillDelete } from 'react-icons/ai'

function QuestionLayout(props) {
    return (
        <div className={props.className}>
            {props.children}
            <div className={`form-check flex p-4 ${props.BottomClassName}`}>
                <div className={`flex flex-grow`}>
                    <Switch
                        value={props.QuestionState.isRequired ? 1 : 0}
                        styles={{
                            trackChecked: {
                                backgroundColor: 'red'
                            },
                        }}
                        onChange={props.toggleQuestion}
                    />

                    <span className={`text-xs ml-2 text-red-500 mb-2`}>
                        Is Required?
                    </span>
                </div>
                <div>
                    <AiFillDelete className={`text-red-500`} />
                </div>
            </div>
        </div>
    )
}

export default QuestionLayout