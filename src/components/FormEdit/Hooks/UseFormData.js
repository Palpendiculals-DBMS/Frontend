import { useState } from "react";

const initialState = [
  {
    id: 1,
    type: "shorttext",
    isRequired: false,
    title: "Untitled Question",
  },
];

const info_init = {
  id: 1,
  title: "",
  description: "",
};

export const UseFormData = () => {
  const [formData, setFormData] = useState(initialState);
  const [info, setInfo] = useState(info_init);

  const setFormTitle = (title) => {
    setInfo({
      ...info,
      title: title,
    });
  };

  const setFormDescription = (description) => {
    setInfo({
      ...info,
      description: description,
    });
  };

  const getFormInfo = () => {
    return info;
  };

  const addQuestion = (type) => {
    setFormData((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        type: type,
        title: "",
        isRequired: false,
        choices: null,
      },
    ]);
  };

  const UpdateFormData = (question, id) => {
    console.log("Updating", question, id);
    setFormData((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === id) {
          return question;
        } else {
          return item;
        }
      });
      return newState;
    });
  };

  const getElementbyId = (id) => {
    const element = formData.find((item) => item.id === id);
    return element;
  };

  const deleteQuestion = (id) => {
    setFormData((prevState) => {
      let newState = [...prevState];
      newState = newState.filter((question) => question.id !== id);
      return newState;
    });
  };

  const getInitialData = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "shorttext":
        return {
          id: formData.length + 1,
          type: type,
          isRequired: false,
          title: "Untitled Question",
        };
      case "longtext":
        return {
          id: formData.length + 1,
          type: type,
          isRequired: false,
          title: "Untitled Question",
        };
      case "number":
        return {
          id: formData.length + 1,
          type: type,
          isRequired: false,
          title: "Untitled Question",
        };
      case "radio":
        return {
          id: formData.length + 1,
          type: type,
          isRequired: false,
          title: "Untitled Question",
          options: [
            {
              checked: false,
              title: "Untitled Option",
            },
          ],
        };
      case "checkbox":
        return {
          id: formData.length + 1,
          type: type,
          isRequired: false,
          title: "Untitled Question",
          options: [
            {
              checked: false,
              title: "Untitled Option",
            },
          ],
        };
      case "date":
        return {
          id: formData.length + 1,
          type: type,
          isRequired: false,
          title: "Untitled Question",
        };
    }
  };

  const addNewQuestion = (type) => {
    setFormData((prevState) => {
      const newState = [...prevState];
      newState.push(getInitialData(type));

      return newState;
    });
  };

  const reorder = (result, startIndex, endIndex) => {
    setFormData([...result]);
  };

  return [
    formData,
    {
      addQuestion,
      setFormTitle,
      setFormDescription,
      getFormInfo,
      UpdateFormData,
      deleteQuestion,
      addNewQuestion,
      reorder,
      getElementbyId,
    },
  ];
};
