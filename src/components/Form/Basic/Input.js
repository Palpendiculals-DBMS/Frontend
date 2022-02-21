import React from 'react'

function Input(props) {
    return (
        <input
            {...props}
            className={`${props.className} outline-none border-b font-body focus:border-black/30`}
        />
    )
}

export default Input