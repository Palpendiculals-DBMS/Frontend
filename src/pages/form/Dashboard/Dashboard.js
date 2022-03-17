import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// import BlankModal from "../../../components/Dashboard/BlankModal";
// import Modal from "../../../components/Dashboard/Modal";
import NewFormList from "../../../components/Dashboard/NewFormLIst";
import UserForms from "../../../components/Dashboard/UserForms";
// import Loading from "../../../components/Loading";

const Dashboard = () => {
  const auth = useSelector(state => state.auth);
  const [, setIsLoading] = useState(true);
  const [, setFormData] = useState([]);
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
      setFormData(response.data.data.reverse());
      setIsLoading(false);
    } catch (err) {
      throw err;
    }
  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <div className={`flex flex-col`}>
        <NewFormList createForm={createForm} />
        <UserForms />
      </div>
    </div>
  );
};

export default Dashboard;
