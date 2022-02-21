import React from 'react'

function NoAuth() {
    return (
        <>
            <div className={`flex flex-col py-20 h-screen w-screen font-body items-center`}>
                <h1 className={`text-xl`}>
                    Ops! Error Occured. Please login first.
                </h1>
            </div>
        </>
    )
}

export default NoAuth