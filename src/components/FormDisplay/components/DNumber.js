import React from 'react'
import DQuestionLayout from '../DQuestionLayout'
import { FormContext } from '../FormComponent'
import Input from '../../Form/Basic/Input';

function DNumber(props) {
    const { register, errors } = React.useContext(FormContext);

    return (
        <DQuestionLayout>
            <h1 className={`my-2 text-lg`}>
                {props.data.title}
            </h1>

            <input
                placeholder="Enter Your Number"
                type="number"
                name={`Q_${props.data.id}`}
                {...register(`Q_${props.data.id}`, { required: props.data.isRequired })}
                className={`w-full p-3 border-2 rounded-md bg-gray-100 active:border-gray-200 shadow-inner my-3 outline-none border-b font-body focus:shadow-none active:border-black/30 focus:border-black/30 focus:ring-0 border-gray-100`} />
            {props.data.isRequired && errors[`Q_${props.data.id}`] && <p className={`text-red-500 text-xs italic`}>This field is required</p>}
        </DQuestionLayout>
    )
}

export default DNumber