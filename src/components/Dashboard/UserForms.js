import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Loading from "../Loading";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";

/**
 *
 * @return {JSX.Element}
 */
function UserForms() {
  const [isLoading, setIsLoading] = useState(true);
  const [FormData, setFormData] = useState([]);
  const auth = useSelector(state => state.auth);

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

  useEffect(() => {
    console.log("FormData", FormData);
  }, [FormData]);

  const columns = [
    {
      Header: "title",
      accessor: "title",
      width: "20%",
    },
    {
      Header: "description",
      accessor: "description",
      width: "50%",
    },
    {
      Header: "createdAt",
      accessor: "createdon",
      width: "20%",
      // eslint-disable-next-line react/prop-types
      Cell: ({ cell: { value } }) => {
        return (
          <span>
            <div className="text-xs bg-red-500 shadow-lg shadow-red-500/20 text-white inline px-3 py-1 rounded-xl ">
              {new Date(value * 1000).toLocaleDateString()}
            </div>
          </span>
        );
      },
    },
    {
      Header: "Actions",
      id: "actions",
      width: "10%",
      Cell: () => (
        <div className="flex justify-center items-center">
          <Menu
            className={`bg-white`}
            menuButton={
              <span>
                <HiOutlineDotsVertical />
              </span>
            }
          >
            <MenuItem>Delete</MenuItem>
            <MenuItem>Analysis</MenuItem>
          </Menu>
        </div>
      ),
    },
  ];

  console.log(columns);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Table columns={columns} data={FormData} />
    </div>
  );
}

export default UserForms;
