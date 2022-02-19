import React, { useState } from "react";
import { FormEditContext } from "../../pages/form/FormEdit";

import DisplayEditableQuestions from "./components/DisplayEditableQuestions";

import Input from "./components/Basic/Input";
import Textarea from "./components/Basic/Textarea";
import { BsFillPlusSquareFill } from "react-icons/bs";

function FormEditArea() {
  const { formData, formDataActions } = React.useContext(FormEditContext);

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
        <button className={``}>
          <BsFillPlusSquareFill className={`text-red-500 text-3xl m-2 shadow-lg shadow-red-500/40 hover:text-red-800 hover:shadow-red-900/50 active:text-red-900`} />
        </button>
      </div>
    </div>
  );
}

export default FormEditArea;
