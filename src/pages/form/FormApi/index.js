import React, { useEffect } from "react";
import APIComponent from "../../../components/APIComponent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "./Doc.md";
import styles from "./FormAPI.module.scss";

/**
 *
 * @return {React.Component}
 */
function FormAPI() {
  const [Docs, setDocs] = React.useState("");

  useEffect(() => {
    fetch(markdown)
      .then(response => response.text())
      .then(text => setDocs(text));
  }, []);

  return (
    <div className="font-body flex flex-col justify-center items-start pl-8 py-10">
      <h1 className="text-3xl font-extralight  pb-2">API Reference</h1>
      <div className=" flex font-extralight p-4 mx-3 my-4 border border-black/10 border-dashed rounded-md shadow-xl shadow-slate-200/40">
        <APIComponent />
      </div>

      <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.markdown}>
        {Docs}
      </ReactMarkdown>
    </div>
  );
}

export default FormAPI;
