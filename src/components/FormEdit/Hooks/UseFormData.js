import { useState } from "react";
import { nanoid } from 'nanoid'


const initialState = [];

const info_init = {
  id: 1,
  title: "Form Heading",
  description: "Form Description",
};

export const UseFormData = () => {

  const [formData, setFormData] = useState(
    initialState
  );

  const [info, setInfo] = useState(
    info_init
  );

  const setFormTitle = (title) => {
    console.log("TITLE: ", title);
    setInfo((prevState) => {
      const newState = { ...prevState };
      newState.title = title;

      return { ...newState };
    });
  };

  const setFormDescription = (description) => {
    setInfo((prevState) => {
      const newState = { ...prevState };
      newState.description = description;

      return { ...newState };
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
          id: nanoid(),
          type: type,
          isRequired: false,
          title: "Untitled Question",
        };
      case "longtext":
        return {
          id: nanoid(),
          type: type,
          isRequired: false,
          title: "Untitled Question",
        };
      case "number":
        return {
          id: nanoid(),
          type: type,
          isRequired: false,
          min: 0,
          max: 100,
          title: "Untitled Question",
        };
      case "radio":
        return {
          id: nanoid(),
          type: type,
          isRequired: false,
          title: "Untitled Question",
          options: [
            'Untitled Option'
          ],
        };
      case "checkbox":
        return {
          id: nanoid(),
          type: type,
          isRequired: false,
          title: "Untitled Question",
          options: [
            "Untitled Option",
          ],
        };
      case "date":
        return {
          id: nanoid(),
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

  const setFormid = (id) => {
    setInfo({
      ...info,
      id: id,
    });
  }

  const setformdata = (data) => {
    setFormData(data);
  }

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
      setformdata,
      setFormid
    },
  ];
};
