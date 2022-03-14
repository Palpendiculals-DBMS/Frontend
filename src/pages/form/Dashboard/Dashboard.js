import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import BlankModal from "../../../components/Dashboard/BlankModal";
import Modal from "../../../components/Dashboard/Modal";
import BottomSVG from "../../../components/Login/Group 8.svg";
import classes from "./DashBoard.module.css";
import Loading from "../../../components/Loading";

const Dashboard = () => {
  const auth = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [FormData, setFormData] = useState([]);
  const history = useHistory();

  const createForm = async () => {
    try {
      const data = {
        form: [],
        title: "Form Heading",
        description: "Form Description",
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/formdata/add`,
        data,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      console.log(response);

      history.push(`/form/edit/${response.data.id}`);
    } catch (err) {
      throw err;
    }
  };

  useEffect(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/formdata/recent`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      console.log("FORM LIST", response);
      setFormData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      throw err;
    }
  }, []);

  const ViewForm = (e, id) => {
    e.preventDefault();
    history.push(`/form/edit/${id}`);
  };

  const onPreview = (e, id) => {
    e.preventDefault();
    history.push(`/f/${id}`);
  };

  const onDelete = async id => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/formdata/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      console.log(response);
      setFormData(FormData.filter(form => form.id !== id));
    } catch (err) {
      throw err;
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={classes.gridContainer}>
        <div className={classes["all-forms"]}>
          <div className={classes.recentHeading}>
            <h2>All Forms</h2>
          </div>
          <div className={classes["all-forms-grid"]}>
            <BlankModal
              className={`scale-100 hover:scale-95 cursor-pointer transition-all`}
              onClick={createForm}
            />
            {FormData.map((form, index) => {
              return (
                <>
                  <Modal
                    key={index}
                    id={form.id}
                    title={form.title}
                    description={form.description}
                    viewForm={ViewForm}
                    onPreview={onPreview}
                    onDelete={onDelete}
                    Analytics={() => {}}
                  />
                </>
              );
            })}
            {/* {nameArray.map((item, index) => { return <Modal key={index} title={item} /> })} */}
          </div>
        </div>
      </div>
      <img className={classes["bottom-svg"]} src={BottomSVG} alt="Bottom SVG" />
    </div>
  );
};

export default Dashboard;
