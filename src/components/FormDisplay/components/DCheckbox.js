import React from 'react'
import DQuestionLayout from '../DQuestionLayout'
import { FormContext } from '../FormComponent'
import Checkbox from '../../Form/Basic/Checkbox';

function DCheckbox(props) {
    const { register, errors } = React.useContext(FormContext);
    return (
        <DQuestionLayout>
            <h1 className={`my-2 text-lg`}>
                {props.data.title}
            </h1>

            <div
                className={`w-full p-2`}
            >
                {props.data.options.map((option, index) => {
                    return (
                        <div>
                            <input
                                className={`m-0 mx-2 self-center text-red-500 rounded-sm outline-none focus:ring-red-500/0 ${props.className}`}
                                type="checkbox"
                                name={`Q_${props.data.id}`}
                                value={option.title}
                                {...register(`Q_${props.data.id}`, { required: props.data.isRequired })}
                            />
                            <span
                                className={`opacity-50`}
                            >
                                {option.title}
                            </span>
                        </div>
                    )
                })}

            </div>

        </DQuestionLayout>
    )
}

export default DCheckbox