import React, { useEffect, useRef, useState } from "react";
import { FormEditContext } from "../../pages/form/FormEdit";

import DisplayEditableQuestions from "./components/DisplayEditableQuestions";
import Input from "../Form/Basic/Input";
import Textarea from "../Form/Basic/Textarea";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import { useSelector } from "react-redux";
import { AiOutlineShareAlt } from "react-icons/ai";
import Modal from '../Modal/Modal';
import { toast } from 'react-toastify'

const ModalShare = (props) => {

  const [Link, setLink] = useState("");

  useEffect(() => {
    let link = window.location.href;
    link = link.replace('form/edit', 'f');
    setLink(link);
  }, [])

  const ClickFunction = (text) => {
    navigator.clipboard.writeText(Link).then(() => {
      toast.success("Successfully copied to clipboard");
    });
  }

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggle}
      className={`w-7/12 flex flex-col font-body`}
    >
      <h2
        className={`text-lg font-semibold my-4`}
      >
        Share Form
      </h2>

      <div
        className={`flex w-full`}
      >
        <div
          className={`flex-grow p-3 bg-gray-200 rounded-md border border-gray-500/30`}
        >
          <span
            className={`text-sm opacity-50`}
          >
            {Link}
          </span>
        </div>
        <button
          className={`mx-2 px-5 py-1 bg-red-500 text-white shadow-sm shadow-transparent hover:shadow-lg hover:bg-red-700 hover:shadow-red-500/20 rounded-md transition-all active:bg-red-900`}
          onClick={() => ClickFunction()}
        >
          Copy
        </button>


      </div>

      <div
        className={`mt-8`}
      >
        <button
          className={`pl-1 py-2 opacity-40 hover:opacity-100 active:opacity-20 transition-all`}
          onClick={props.toggle}
        >
          Close
        </button>
      </div>


    </Modal>
  )
}

function FormEditArea({ formSave, setFormSave }) {
  let { id } = useParams();
  const { formData, formDataActions } = React.useContext(FormEditContext);
  const [ShareModal, setShareModal] = useState(false);
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      formDataActions.setFormid(id);
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/formdata/getbyid/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        }
      })

      const title = response.data.data[0].title;
      const description = response.data.data[0].description;
      const parsedjson = response.data.data[0].form;

      console.log("GETTING DATA FROM JSON", parsedjson);
      console.log("GETTING DATA FROM API", title, description);

      if (parsedjson !== null) {
        formDataActions.setformdata(parsedjson);
      }

      formDataActions.setFormTitle(title.toString());
      formDataActions.setFormDescription(description);

    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    console.log("FORM DATA", formData, formDataActions.getFormInfo());
  }, [formData]);

  let cancelToken = useRef();

  // eslint - disable - next - line react - hooks / exhaustive - deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {

    console.log(formData);
    console.log(formDataActions.getFormInfo());

    const f_data = formData;
    const f_cred = formDataActions.getFormInfo();

    if (f_data.length === 0 || f_cred.id === 1) {
      return;
    }

    setFormSave({
      ...formSave,
      loading: true
    });

    if (typeof cancelToken.current != typeof undefined) {
      cancelToken.current.cancel("Operation Canceled");
    }

    try {


      cancelToken.current = axios.CancelToken.source()

      const response = await axios
        .post(`${process.env.REACT_APP_BASE_URL}/formdata/update`,
          {
            form: f_data,
            title: f_cred.title,
            description: f_cred.description,
            id: id
          }, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          cancelToken: cancelToken.current.token
        });

      setFormSave({
        loading: false,
        err: false
      });
      console.log("FORM UPDATE", response);
    } catch (err) {
      console.log(err);
      setFormSave({
        loading: false,
        err: true
      });
    }
  }, [formData, formDataActions.getFormInfo()]);

  const submitHandler = () => {
    console.log("not submitting", formData);
  };

  if (formDataActions.getFormInfo().id === 1) {
    return (
      <>
        <span>hello</span>
      </>
    )
  }

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

        <DisplayEditableQuestions formSave={formSave} />
        {/* <button onClick={submitHandler} className={``}>
          <BsFillPlusSquareFill
            className={`text-red-500 text-3xl m-2 shadow-lg shadow-red-500/40 hover:text-red-800 hover:shadow-red-900/50 active:text-red-900`}
          />
        </button> */}
        <div className={`flex gap-3`}

        >
          <button
            className={`p-2 px-4 bg-red-500 text-sm text-white rounded-md shadow-lg shadow-red-500/40 hover:text-red-800 hover:shadow-red-900/50 active:text-red-900
            my-3 transition-all font-body
          `}
            onClick={() => {
              history.push('/form/dashboard');
            }}
          >
            Done
          </button>
          <button className={`mx-4 p-2 px-4 bg-green-500 text-sm text-white rounded-md shadow-lg shadow-green-500/40 hover:text-green-800 hover:shadow-green-900/50 active:text-red-900
            my-3 transition-all font-body flex`}
            onClick={() => {
              setShareModal(true)
            }}
          >
            <AiOutlineShareAlt className={`items-center self-center`} />
            <span className={`items-center mx-1`}>
              Share
            </span>
          </button>
          <ModalShare
            isOpen={ShareModal}
            toggle={() => setShareModal(!ShareModal)}
          />
        </div>
      </div>

    </div>
  );
}

export default FormEditArea;
