import React from "react";
import Layout from "../../components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { removeAuthData } from "../../redux/auth/authSlice";
import APIComponent from "../../components/APIComponent";
/**
 *
 * @return {JSX.Element}
 */
function Settings() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const user = auth.user;

  const SignOut = () => {
    dispatch(removeAuthData());
    history.push("/");
  };

  console.log(user);
  return (
    <React.Fragment>
      <Layout>
        <div className="flex flex-col justify-center items-center font-body py-8  font-extralight">
          <img src={user.avatar} />
          <h1 className="text-3xl mt-10 border-b pb-2 border-black">
            Hi. {user.name}
          </h1>
          <p className="text-xs py-3">{user.email}</p>
          <APIComponent />
          <button
            onClick={SignOut}
            className="mt-20 font-extralight border-b border-black"
          >
            Sign Out
          </button>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default Settings;
