/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
import { Menu, MenuItem, MenuButton, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import Loading from "../Loading";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

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

  const viewForm = row => {
    console.log(row);
    history.push(`/form/edit/${row.original.id}`);
  };

  const onPreview = row => {
    history.push(`/f/${row.original.id}`);
  };

  const onDelete = async row => {
    try {
      console.log("Deleting", row.original, row.original);
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/formdata/delete/${row.original.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      console.log(response);
      setFormData(FormData.filter(form => form.id !== row.original.id));
    } catch (err) {
      throw err;
    }
  };

  const columns = [
    {
      Header: "Title",
      accessor: "title",
      width: "20%",
    },
    {
      Header: "Description",
      accessor: "description",
      width: "50%",
    },
    {
      Header: "Created At",
      accessor: "createdon",
      width: "15%",
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
      Header: "View Form",
      id: "view",
      width: "15%",
      Cell: ({ row }) => (
        <div>
          <button
            onClick={() => {
              viewForm(row);
            }}
            className="w-full text-red-400 hover:text-red-600 font-medium py-2 px-4 "
          >
            View Form
          </button>
        </div>
      ),
    },
    {
      Header: "Actions",
      id: "actions",
      width: "5%",
      // eslint-disable-next-line react/prop-types
      Cell: ({ row }) => (
        <div className="flex justify-center items-center">
          <Menu className={`bg-white`}>
            <MenuButton>
              <HiOutlineDotsVertical className="text-red-600" />
            </MenuButton>
            <MenuList className="bg-white text-gray-600 transition-all  py-2 shadow-lg rounded-md shadow-red-500/10 border border-red-400 font-body">
              <MenuItem
                className="text-sm hover:bg-red-400 hover:text-white transition-all"
                onClick={e => onPreview(row)}
              >
                Preview
              </MenuItem>
              <MenuItem
                className="text-sm hover:bg-red-400 hover:text-white transition-all"
                onClick={e => onDelete(row)}
              >
                Delete
              </MenuItem>
              <MenuItem className="text-sm hover:bg-red-400 hover:text-white transition-all">
                Analysis
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      ),
    },
  ];

  console.log(columns);

  if (isLoading) return <Loading />;

  return (
    <div className="">
      <Table columns={columns} data={FormData} />
    </div>
  );
}

export default UserForms;
