import React from "react";
import { GrTextAlignFull } from "react-icons/gr";
import { IoIosRadioButtonOn } from "react-icons/io";
import { MdShortText } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";

import { FormEditContext } from "../../pages/form/FormEdit";

function InputList(props) {
  const { formDataActions } = React.useContext(FormEditContext);

  const QuestionsList = [
    {
      icon: MdShortText,
      title: "Short Text",
      type: "shorttext",
    },
    {
      icon: GrTextAlignFull,
      title: "Long Text",
      type: "longtext",
    },
    {
      icon: IoIosRadioButtonOn,
      title: "Single Choice",
      type: "radio",
    },
    {
      icon: ImCheckboxChecked,
      title: "Multi Choice",
      type: "checkbox",
    },
  ];

  const handleClick = (e, type) => {
    e.preventDefault();
    formDataActions.addNewQuestion(type);
    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight + 100,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <React.Fragment>
      <div className={`font-body  ${props.className}`}>
        <div className={`p-2 flex flex-col w-52 fixed`}>
          {QuestionsList.map((item, index) => {
            return (
              <button
                className="flex justify-between items-center py-2 px-5 my-3 bg-white rounded-lg text-red-500 shadow-md shadow-red-200/5 hover:shadow-lg hover:shadow-red-300/20 active:bg-slate-100 transition-all"
                onClick={(e) => handleClick(e, item.type)}
              >
                <item.icon />
                <span className={`px-2 font-semibold`}>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default InputList;
