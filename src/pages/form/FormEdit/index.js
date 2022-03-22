import React, { createContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import InputList from "../../../components/FormEdit/InputList";
import { UseFormData as useFormData } from "../../../components/FormEdit/Hooks/UseFormData";
import FormEditArea from "../../../components/FormEdit/FormEditArea";

export const FormEditContext = createContext();

const FormEdit = () => {
  const [formData, formDataActions] = useFormData();
  const history = useHistory();

  const { id } = useParams();

  const [formSave, setFormSave] = useState({
    loading: false,
    err: false,
  });

  return (
    <>
      <FormEditContext.Provider value={{ formData, formDataActions }}>
        <div className={`min-h-screen w-full bg-slate-600/20 flex flex-row`}>
          <InputList className={`w-2/12 mt-1`} formSave={formSave} />
          <div className={`w-9/12`}>
            {/* Button container */}
            <div className={`flex flex-row mt-5 font-body`}>
              <div
                className={`text-red-500 mr-5 font-semibold hover:bg-red-200/50 py-1 px-2 rounded cursor-pointer`}
              >
                Edit Form
              </div>
              <div
                className={`text-red-500 mr-5 font-semibold hover:bg-red-200/50 py-1 px-2 rounded cursor-pointer`}
                onClick={() => history.push(`/form/analytics/${id}`)}
              >
                Show Analytics
              </div>
            </div>

            {/* Form */}
            <FormEditArea formSave={formSave} setFormSave={setFormSave} />
          </div>
        </div>
      </FormEditContext.Provider>
    </>
  );
};

export default FormEdit;
