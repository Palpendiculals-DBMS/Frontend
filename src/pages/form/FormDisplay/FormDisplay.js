import axios from "axios";
import React, { useEffect, useState } from "react";
import FormComponent from "../../../components/FormDisplay/FormComponent";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import YangLogo from "../../../Assets/YangLOGO.svg";
import Loading from "../../../components/Loading";

const FormDisplay = () => {
  const location = useLocation();
  const history = useHistory();
  const [loading, setloading] = useState(true);
  const [formData, setformData] = useState([]);
  const auth = useSelector(state => state.auth);
  const { id } = useParams();
  useEffect(() => {
    console.log("id", id);
    if (id === undefined) return;
    fetchData();
  }, [id]);

  /**
   * fetch data from server
   */
  async function fetchData() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/formsubmit/f/${id}`
      );
      console.log(data);
      setformData({
        title: data.title,
        description: data.description,
        data: data.form,
      });

      setloading(false);
    } catch (err) {
      throw err;
    }
  }

  if (auth.isAuthenticated === false) {
    return (
      <div className="font-body h-screen w-screen flex flex-col items-center">
        <img className={`my-20`} src={YangLogo} alt="logo" />
        <h1 className={`text-3xl text-slate-700 mt-10 mb-2`}>
          You are not logged In
        </h1>
        <p className={`text-base my-6 text-slate-300`}>
          Please login to submit this form
        </p>

        <div className={`flex gap-3`}>
          <button
            className={`px-3 py-2 mx-2 my-2 bg-slate-200 hover:bg-slate-300 rounded-lg`}
            onClick={() => {
              history.push({
                pathname: "/signup",
                state: {
                  from: location.pathname,
                },
              });
            }}
          >
            Sign Up
          </button>
          <button
            className={`px-3 py-2 mx-2 my-2 bg-red-400   text-white hover:bg-red-500 transition-all rounded-lg`}
            onClick={() => {
              history.push({
                pathname: "/login",
                state: {
                  from: location.pathname,
                },
              });
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    // fetchData();
    return (
      <React.Fragment>
        <Loading />
      </React.Fragment>
    );
  }

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen min-w-full bg-gray-200`}
    >
      <FormComponent formdata={formData} />
    </div>
  );
};

export default FormDisplay;
