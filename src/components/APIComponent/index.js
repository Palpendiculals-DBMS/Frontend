import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
/**
 *
 * @return {React.Component}
 */
function APIComponent() {
  const [API, setAPI] = React.useState({
    loading: true,
    token: "",
    isVisible: false,
  });

  const auth = useSelector(state => state.auth);

  const getAPI = useCallback(async () => {
    console.log(`${process.env.REACT_APP_BASE_URL}/auth/token`);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/auth/token`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then(res => {
        console.log(res.data);
        setAPI({
          ...res.data,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [auth]);

  useEffect(() => {
    getAPI();
  }, [auth]);

  console.log(API);

  if (API.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="font-body flex flex-col justify-center items-center">
      <div>
        {API.isVisible ? (
          <p className="text-sm mb-1">{API.token}</p>
        ) : (
          <p>{Array(API?.token?.length).fill("*").join("")}</p>
        )}
      </div>
      <div className="w-full flex">
        <div
          className="mx-2 self-center opacity-40 cursor-pointer flex-grow"
          onClick={() =>
            setAPI({
              ...API,
              isVisible: !API.isVisible,
            })
          }
        >
          {!API.isVisible ? (
            <p className="flex">
              <AiFillEye className="self-center mx-1" />
              <span className="text-xs font-normal">Show Token</span>
            </p>
          ) : (
            <p className="flex">
              <AiFillEyeInvisible className="self-center mx-1" />
              <span className="text-xs font-normal">Hide Token</span>
            </p>
          )}
        </div>
        <div className="flex">
          <button
            className="text-xs text-gray-500 font-light px-2 py-1 border rounded-l border-black/20 border-dashed"
            onClick={() => {
              navigator.clipboard.writeText(API.token).then(() => {
                toast.success("Successfully copied to clipboard");
              });
            }}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default APIComponent;
