import axios from "axios";
import React, { useEffect, useState } from "react";
import FormComponent from "../../../components/FormDisplay/FormComponent";
import { useParams } from "react-router";

const FormDisplay = () => {
  const [loading, setloading] = useState(true);
  const [formData, setformData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log("id", id);
    if (id === undefined) return;
    fetchData();
  }, [id]);


  async function fetchData() {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/formsubmit/f/${id}`);
      console.log(data);
      setformData({
        title: data.title,
        description: data.description,
        data: data.form
      });

      setloading(false);
    } catch (err) {
      throw err;
    }
  }


  if (loading) {
    // fetchData();
    return (
      <React.Fragment>
        <div>Loading</div>
      </React.Fragment>
    )
  }


  return <div className={`flex flex-col justify-center items-center min-h-screen min-w-full bg-gray-200`}>
    <FormComponent formdata={formData} />
  </div>;
};

export default FormDisplay;
