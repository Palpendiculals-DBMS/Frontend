import React, { useState } from 'react'
import DQuestionLayout from '../DQuestionLayout'
import { FormContext } from '../FormComponent'

const RadioComponent = (props) => {


    return (
        <React.Fragment>
            <div
                className={`flex`}
            >
                <input
                    {...props.register(`Q_${props.id}`, { required: props.isRequired })}
                    className={`m-0 mx-2 self-center text-red-500 focus:ring-red-500/0 ${props.className}`}
                    type="radio"
                    name={`Q_${props.id}`}
                    value={props.title}
                    onChange={(e) => {
                    }}
                />
                <p
                    className={`text-gray-500`}
                >
                    {props.title}
                </p>
            </div>
        </React.Fragment>
    )
}

function DRadio(props) {
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

                <div
                    className={`flex flex-col gap-2 mt-3`}
                >
                    {
                        props.data.options.map((option, index) => {
                            return (
                                <RadioComponent
                                    key={index}
                                    register={register}
                                    errors={errors}
                                    id={props.data.id}
                                    title={option.title}
                                    isRequired={props.data.isRequired}
                                />
                            )
                        })
                    }
                </div>


            </DQuestionLayout>
        </>
    )
}

export default DRadio