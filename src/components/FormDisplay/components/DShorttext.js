import React, { useEffect } from 'react'
import Input from '../../Form/Basic/Input'
import DQuestionLayout from '../DQuestionLayout'
import { FormContext } from '../FormComponent'

function DShorttext(props) {
    const { register, errors } = React.useContext(FormContext);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <DQuestionLayout>
            <h1 className={`my-2 text-lg`}>
                {props.data.title}
                {
                    props.data.isRequired ?
                        <span className={`text-red-500 mx-1`}>*</span> : null
                }
            </h1>

            <Input
                type="text"
                {...register(`Q_${props.data.id}`, { required: props.data.isRequired })}
                placeholder="Enter Response"
                className={`w-full p-3 border-2 rounded-md bg-gray-100 active:border-gray-200 shadow-inner my-3`}
            />
            {props.data.isRequired && errors[`Q_${props.data.id}`] && <p className={`text-red-500 text-xs italic`}>This field is required</p>}
        </DQuestionLayout>
    )
}

export default DShorttext;