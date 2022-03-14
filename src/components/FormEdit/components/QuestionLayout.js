import React from "react";

import Switch from "react-input-switch";
import { AiFillDelete } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function QuestionLayout(props) {
  const ref = React.useRef(null);
  // const [dotpos, setDotpos] = React.useState({
  //   top: 0,
  //   left: 0,
  // });

  // const changepos = () => {
  //   const rect = ref.current.getBoundingClientRect();
  //   // setDotpos({
  //   //   top: rect.top + rect.height / 2,
  //   //   left: rect.left + rect.width / 2,
  //   // });
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     changepos();
  //   }, 1000);

  //   window.addEventListener("resize", changepos);
  //   return () => {
  //     window.removeEventListener("resize", changepos);
  //   };
  // }, [ref]);

  return (
    <div className={`py-1 w-3/4`} ref={ref}>
      <div className={`${props.className} bg-white ${props.BottomClassName}`}>
        <div className={`absolute -ml-2 -mt-2 opacity-10`}>
          <BsFillGrid3X3GapFill />
        </div>
        {props.children}

        <div className={`form-check flex p-4 bg-white`}>
          <div className={`flex flex-grow`}>
            <Switch
              value={props.QuestionState.isRequired ? 1 : 0}
              styles={{
                trackChecked: {
                  backgroundColor: "red",
                },
              }}
              onChange={props.toggleQuestion}
            />

            <span className={`text-xs ml-2 text-red-500 mb-2`}>
              Is Required?
            </span>
          </div>
          <div>
            <button onClick={props.DeleteQuestion}>
              <AiFillDelete
                className={`text-2xl text-red-500 hover:text-red-800 transition-all p-1`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

QuestionLayout.propTypes = {
  className: PropTypes.string,
  BottomClassName: PropTypes.string,
  QuestionState: PropTypes.object,
  toggleQuestion: PropTypes.func,
  DeleteQuestion: PropTypes.func,
  children: PropTypes.any,
};

export default QuestionLayout;
