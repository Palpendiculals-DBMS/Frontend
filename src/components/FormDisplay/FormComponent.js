import React, { useState, createContext } from 'react'
import QuestionLayout from '../FormEdit/components/QuestionLayout';
import DisplayHandler from './DisplayHandler';
import { useForm } from "react-hook-form";

export const FormContext = createContext();

function FormComponent(props) {

    const [formdata, setFormdata] = useState(props.formdata);
    const { register, formState: { errors }, handleSubmit } = useForm();

    console.log(formdata.data);

    const onSubmit = data => {
        console.log(data);
        alert(JSON.stringify(data));
    };

    return (
        <>
            <div className={`mt-10 bg-white w-3/4 p-10 font-body shadow-2xl border-2 border-red-400 border-dotted`}>
                <FormContext.Provider value={{ formdata, setFormdata, register, errors }}>
                    <h1
                        className={`text-2xl p-2 text-black/70`}
                    >
                        {formdata.title}
                    </h1>
                    <h4
                        className={`p-1 py-6 px-3 text-sm w-3/4 opacity-50 text-black/60`}
                    >
                        {formdata.description}
                    </h4>
                    <hr
                        className={`border-t-2 border-red-500/50 my-2`}
                    />

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={`flex flex-col gap-4 my-6`}>
                            {
                                formdata.data.map((question, index) => {
                                    return (
                                        <DisplayHandler question={question} index={index} />
                                    )
                                })
                            }
                        </div>

                        <hr
                            className={`border-t-2 border-red-500/50 my-2`}
                        />
                        <div
                            className={`m-2`}
                        >
                            <input
                                type="submit"
                                className={`p-3 px-5 rounded-md shadow-lg transition-all hover:bg-red-500 shadow-transparent hover:shadow-red-400/20 active:bg-red-700 bg-red-400 text-white text-sm font-body`}
                                value="Submit"
                            />
                        </div>
                    </form>
                </FormContext.Provider>
            </div>
        </>
    )
}

export default FormComponent