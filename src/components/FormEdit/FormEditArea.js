import React, { useEffect, useState } from "react";
import { FormEditContext } from "../../pages/form/FormEdit";

import DisplayEditableQuestions from "./components/DisplayEditableQuestions";
import Input from "../Form/Basic/Input";
import Textarea from "../Form/Basic/Textarea";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useSelector } from "react-redux";

function FormEditArea() {
  let { id } = useParams();
  const { formData, formDataActions } = React.useContext(FormEditContext);
  const auth = useSelector((state) => state.auth);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      formDataActions.setFormid(id);
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/formdata/getbyid/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        }
      })


      const title = response.data.data[0].title;
      const description = response.data.data[0].description;
      const parsedjson = response.data.data[0].form;

      console.log("GETTING DATA FROM JSON", parsedjson);
      console.log("GETTING DATA FROM API", title, description);

      if (parsedjson !== null) {
        formDataActions.setformdata(parsedjson);
      }

      formDataActions.setFormTitle(title.toString());
      formDataActions.setFormDescription(description);

    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    console.log("FORM DATA", formData, formDataActions.getFormInfo());
  }, [formData]);

  const controller = new AbortController();

  // eslint - disable - next - line react - hooks / exhaustive - deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {

    console.log(formData);
    console.log(formDataActions.getFormInfo());

    const f_data = formData;
    const f_cred = formDataActions.getFormInfo();

    if (f_data.length == 0 || f_cred.id == 1) {
      return;
    }

    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/formdata/update`,
        {
          form: f_data,
          title: f_cred.title,
          description: f_cred.description,
          id: id
        });

    console.log("FORM UPDATE", response);

  }, [formData, formDataActions, id]);

  const submitHandler = () => {
    console.log("not submitting", formData);
  };

  if (formDataActions.getFormInfo().id === 1) {
    return (
      <>
        <span>hello</span>
      </>
    )
  }

  return (
    <div className={`overflow-y-scroll mt-5 shadow-xl`}>
      <div className={`bg-white p-10`}>
        <Input
          className={`w-1/2 p-3 text-xl`}
          value={formDataActions.getFormInfo().title}
          onChange={(e) => formDataActions.setFormTitle(e.target.value)}
          placeholder="Enter Form Title"
        />

        <Textarea
          className={`w-3/4 p-1 mt-10 text-sm h-24 resize-none`}
          value={formDataActions.getFormInfo().description}
          onChange={(e) => formDataActions.setFormDescription(e.target.value)}
          placeholder="Enter Form Description"
        />

        <hr className={`mt-2 border-red-500 border-t-2`} />

        <DisplayEditableQuestions />
        <button onClick={submitHandler} className={``}>
          <BsFillPlusSquareFill
            className={`text-red-500 text-3xl m-2 shadow-lg shadow-red-500/40 hover:text-red-800 hover:shadow-red-900/50 active:text-red-900`}
          />
        </button>
      </div>
    </div>
  );
}

export default FormEditArea;
