import React from 'react'
import { GrTextAlignFull } from 'react-icons/gr'
import { MdShortText } from 'react-icons/md'

import { FormEditContext } from '../../pages/form/FormEdit';


function InputList(props) {

    const { formDataActions } = React.useContext(FormEditContext);

    const QuestionsList = [
        {
            icon: MdShortText,
            title: 'Short Text',
            type: 'shorttext'
        },
        {
            icon: GrTextAlignFull,
            title: 'Long Text',
            type: 'longtext'
        }
    ];

    const handleClick = (e, type) => {
        e.preventDefault();
        formDataActions.addNewQuestion(type);
    }

    return (
        <React.Fragment>
            <div className={`font-body ${props.className}`}>
                <div className={`p-2 flex flex-col w-52 `}>
                    {QuestionsList.map((item, index) => {
                        return (

                            <button
                                className='flex justify-center items-center p-2 my-3 bg-white rounded-lg text-red-500 shadow-md shadow-red-200/5 hover:shadow-lg hover:shadow-red-300/20 active:bg-slate-100 transition-all'
                                onClick={(e) => handleClick(e, item.type)}
                            >
                                <item.icon />
                                <span className={`px-2 font-semibold`}>
                                    {item.title}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </React.Fragment >
    )
}

export default InputList