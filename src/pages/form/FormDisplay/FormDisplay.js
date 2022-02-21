import React from "react";
import FormComponent from "../../../components/FormDisplay/FormComponent";
import formdata from './dummydata.json'

const FormDisplay = () => {
  return <div className={`flex flex-col justify-center items-center min-h-screen min-w-full bg-gray-200`}>
    <FormComponent formdata={formdata} />
  </div>;
};

export default FormDisplay;
