import React from 'react'
import DQuestionLayout from '../DQuestionLayout'
import Textarea from '../../Form/Basic/Textarea'
import { FormContext } from '../FormComponent'

function DLongText(props) {

    const { register, errors } = React.useContext(FormContext);

    return (
        <>
            <DQuestionLayout>
                <h1 className={`my-2 text-lg`}>
                    {props.data.title}
                    {
                        props.data.isRequired ?
                            <span className={`text-red-500 mx-1`}>*</span> : null
                    }
                </h1>

                <textarea
                    placeholder="Enter Response"
                    name={`Q_${props.data.id}`}
                    {...register(`Q_${props.data.id}`, { required: props.data.isRequired })}
                    className={`w-full p-3 border-2 rounded-md bg-gray-100 active:border-gray-200 shadow-inner my-3 h-28 resize-none outline-none border-b font-body border-gray-200 focus:border-black/30 focus:ring-0`}
                />
                {
                    props.data.isRequired && errors[`Q_${props.data.id}`] && <p className={`text-red-500 text-xs italic`}>This field is required</p>
                }
            </DQuestionLayout>
        </>
    )
}

export default DLongText