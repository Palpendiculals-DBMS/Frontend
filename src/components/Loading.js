import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

/**
 *
 * @return {React.Component}
 */
function Loading() {
  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 z-50 flex justify-center items-center`}
    >
      <div className={`flex px-4 border-b-2`}>
        <RiCheckboxBlankCircleFill
          className={`text-red-500 self-end animate-bounce text-3xl`}
        />
        <RiCheckboxBlankCircleFill
          className={`text-gray-500 self-end animate-bounce-slow text-5xl`}
        />
        <RiCheckboxBlankCircleFill
          className={`text-red-500 self-end animate-bounce text-3xl`}
        />
        <RiCheckboxBlankCircleFill
          className={`text-gray-500 self-end animate-bounce-slow text-5xl`}
        />
        <RiCheckboxBlankCircleFill
          className={`text-red-500 self-end animate-bounce text-3xl`}
        />
      </div>
    </div>
  );
}

export default Loading;
