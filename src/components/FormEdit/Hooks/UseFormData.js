import { useState } from "react";

const initialState = [
    {
        id: 1,
        type: "shorttext",
        title: "Enter Your Question",
        isRequired: true,
        choices: null
    }
];

const info_init = {
    id: 1,
    title: "",
    description: "",
}

export const UseFormData = () => {
    const [formData, setFormData] = useState(initialState);
    const [info, setInfo] = useState(info_init);

    const setFormTitle = (title) => {
        setInfo({
            ...info,
            title: title
        })
    }

    const setFormDescription = (description) => {
        setInfo({
            ...info,
            description: description
        })
    }

    const getFormInfo = () => {
        return info;
    }

    const addQuestion = (type) => {
        setFormData(prevState => [
            ...prevState,
            {
                id: prevState.length + 1,
                type: type,
                title: "",
                isRequired: false,
                choices: null
            }
        ]);
    }

    const UpdateFormData = (question, id) => {
        setFormData(prevState => {
            const newState = prevState;
            newState[id] = question;

            return newState;
        });
    }

    const deleteQuestion = (id) => {
        setFormData(prevState => {
            const newState = prevState;
            newState.splice(id, 1);
            return newState;
        });
    }

    const getInitialData = (type) => {
        // eslint-disable-next-line default-case
        switch (type) {
            case 'shorttext':
                return {
                    id: formData.length + 1,
                    type: type,
                    isRequired: false,
                    title: "Untitled Question",
                }
            case 'longtext':
                return {
                    id: formData.length + 1,
                    type: type,
                    isRequired: false,
                    title: "Untitled Question",
                }
        }
    }

    const addNewQuestion = (type) => {
        setFormData((prevState) => {
            const newState = [...prevState];
            newState.push(getInitialData(type));

            return newState;
        })
    }



    return [formData, {
        addQuestion,
        setFormTitle,
        setFormDescription,
        getFormInfo,
        UpdateFormData,
        deleteQuestion,
        addNewQuestion
    }];
}