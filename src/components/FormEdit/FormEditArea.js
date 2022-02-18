import React, { useState } from "react";
import { FormEditContext } from "../../pages/form/FormEdit";

import DisplayEditableQuestions from "./components/DisplayEditableQuestions";

import Input from "./components/Basic/Input";
import Textarea from "./components/Basic/Textarea";

function FormEditArea() {
  const { formData, formDataActions } = React.useContext(FormEditContext);

  return (
    <div className={`h-3/5 overflow-y-scroll mt-5 shadow-xl`}>
      <div className={`bg-white p-10`}>
        <Input
          className={`w-1/2 p-3 text-xl`}
          value={formDataActions.getFormInfo().title}
          placeholder="Enter Form Title"
        />

        <Textarea
          className={`w-3/4 p-1 mt-10 text-sm h-24 resize-none`}
          value={formDataActions.getFormInfo().description}
          placeholder="Enter Form Description"
        />

        <hr className={`mt-2 border-red-500 border-t-2`} />

        <DisplayEditableQuestions />
      </div>
    </div>
  );
}

export default FormEditArea;
