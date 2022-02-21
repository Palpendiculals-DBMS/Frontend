import React from 'react'

function Textarea(props) {
    return (
        <textarea
            {...props}
            className={`${props.className} outline-none border-b font-body focus:border-black/30`}
        >
            {props.children}
        </textarea>
    )
}

export default Textarea