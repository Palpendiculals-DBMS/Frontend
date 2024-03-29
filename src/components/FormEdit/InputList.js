import React from "react";
import { GrTextAlignFull } from "react-icons/gr";
import { IoIosRadioButtonOn } from "react-icons/io";
import { MdShortText } from "react-icons/md";
import { ImCheckboxChecked, ImSortNumbericDesc } from "react-icons/im";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoIosText } from "react-icons/io";
import { FormEditContext } from "../../pages/form/FormEdit";
import { VscLoading } from "react-icons/vsc";
import { BsCheck2Circle } from "react-icons/bs";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
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
      icon: ImSortNumbericDesc,
      title: "Number",
      type: "number",
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
    {
      icon: BsFillCalendar2DateFill,
      title: "Date",
      type: "date",
    },
    {
      icon: IoIosText,
      title: "Section",
      type: "section",
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
                className="flex flex-start items-center py-2 px-5 my-3 bg-white rounded-lg text-red-500 shadow-md shadow-red-200/5 hover:shadow-lg hover:shadow-red-300/20 active:bg-slate-100 transition-all"
                onClick={e => handleClick(e, item.type)}
                key={index}
              >
                <item.icon />
                <span className={`px-2 font-semibold`}>{item.title}</span>
              </button>
            );
          })}

          <div>
            {props.formSave.loading ? (
              <div
                className={`px-4 py-2  text-slate-600 inline-flex bg-white rounded-lg`}
              >
                <span className={`mx-1 items-center flex`}>
                  <VscLoading className={`animate-spin items-center`} />
                </span>
                <span className={`items-center`}>Loading</span>
              </div>
            ) : (
              <div
                className={`px-4 py-2  text-green-600 inline-flex bg-white rounded-lg`}
              >
                <span className={`mx-1 items-center flex`}>
                  <BsCheck2Circle className={`items-center`} />
                </span>
                <span className={`items-center`}>Saved</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

InputList.propTypes = {
  className: PropTypes.string,
  formSave: PropTypes.object,
};

export default InputList;
