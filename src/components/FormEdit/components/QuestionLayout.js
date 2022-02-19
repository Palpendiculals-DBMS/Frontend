import React from 'react'

import Switch from 'react-input-switch'
import { AiFillDelete } from 'react-icons/ai'

function QuestionLayout(props) {

    return (
        <div className={`py-1 w-3/4`}>
            <div className={`${props.className} bg-white ${props.BottomClassName}`}>
                {props.children}
                <div className={`form-check flex p-4 bg-white `}>
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
                        <button
                            onClick={props.DeleteQuestion}
                        >
                            <AiFillDelete className={`text-2xl text-red-500 hover:text-red-800 transition-all p-1`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionLayout