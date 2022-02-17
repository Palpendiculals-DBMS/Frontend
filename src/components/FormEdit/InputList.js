import React from 'react'
import { GrTextAlignFull } from 'react-icons/gr'
import { MdShortText } from 'react-icons/md'


function InputList() {

    const QuestionsList = [
        {
            icon: MdShortText,
            title: 'Short Text',
        },
        {
            icon: GrTextAlignFull,
            title: 'Long Text',
        }
    ];

    return (
        <React.Fragment>
            <div className="input-list">
                <div className={`p-2 flex flex-col w-36 `}>
                    {QuestionsList.map((item, index) => {
                        return (

                            <button
                                className='flex justify-center items-center'
                            >
                                <item.icon />
                                <span className={`px-2`}>
                                    {item.title}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default InputList