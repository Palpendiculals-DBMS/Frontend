import React, { useState, createContext } from 'react'
import QuestionLayout from '../FormEdit/components/QuestionLayout';
import DisplayHandler from './DisplayHandler';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import YangLogo from '../../Assets/YangLOGO.svg'

export const FormContext = createContext();

function FormComponent(props) {

    const { id } = useParams();
    const [formdata, setFormdata] = useState(props.formdata);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const history = useHistory();

    const auth = useSelector((state) => state.auth);
    console.log(formdata.data);

    const onSubmit = async (data) => {
        try {
            console.log(data);
            await axios.post(`${process.env.REACT_APP_BASE_URL}/formsubmit/add`, {
                form: data,
                formid: id
            }, { headers: { Authorization: `Bearer ${auth.token}` } });

            setIsFormSubmitted(true);

        } catch (err) {
            throw err;
        }
        // alert(JSON.stringify(data));
    };

    if (isFormSubmitted) {
        return (
            <>
                <div
                    className={`bg-white py-5
                    px-10 font-body flex flex-col justify-center items-center rounded-md`}
                >
                    <img
                        className={`mb-10 mt-2`}
                        src={YangLogo} alt='logo'
                    />

                    <h1
                        className={`text-2xl font-semibold text-red-400`}
                    >
                        Thank you for submitting the form
                    </h1>
                    <p
                        className={`my-4 text-base text-slate-600`}
                    >
                        Your form has been submitted successfully.
                    </p>
                    <button
                        className={`px-3 py-2 mx-2 
                        my-2 bg-slate-200 hover:bg-slate-300 text-slate-500 rounded-lg`}

                        onClick={() => history.push('/form/dashboard')}

                    >
                        Go Back to Dashboard
                    </button>
                </div>
            </>
        )

    }
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