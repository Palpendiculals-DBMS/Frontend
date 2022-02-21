import React from 'react'

function QuestionLayout(props) {
    return (
        <div
            className={`flex flex-col p-6 w-3/4 bg-white border-2 rounded-md border-red-400/30`}
        >
            {props.children}
        </div>
    )
}

export default QuestionLayout