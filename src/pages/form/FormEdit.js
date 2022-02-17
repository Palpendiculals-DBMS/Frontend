import React, { createContext, useReducer } from "react";
import InputList from "../../components/FormEdit/InputList";
import { UseFormData } from "../../components/FormEdit/Hooks/UseFormData";
import FormEditArea from "../../components/FormEdit/FormEditArea";

export const FormEditContext = createContext();

const FormEdit = () => {

  const [formData, formDataActions] = UseFormData();
  return <>
    <FormEditContext.Provider value={{ formData, formDataActions }}>
      <div className={`min-h-screen w-full bg-slate-600/20`}>
        <div className={`flex`}>
          <InputList />
          <FormEditArea />
        </div>
      </div>
    </FormEditContext.Provider>
  </>;
};

export default FormEdit;
