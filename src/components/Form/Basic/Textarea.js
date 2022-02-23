import React from 'react'

function Textarea(props) {
    return (
        <textarea
            {...props}
            className={`${props.className} outline-none border-b font-body border-gray-200 focus:border-black/30 focus:ring-0 border-0`}
        >
            {props.children}
        </textarea>
    )
}

export default Textarea