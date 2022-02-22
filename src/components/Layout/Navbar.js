import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAuthData } from "../../redux/auth/authSlice";
import { Link, useHistory } from "react-router-dom";

import logo from "../../Assets/YangLOGO.svg";
import useScrollPosition from "@react-hook/window-scroll";

function User(props) {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col justify-end items-end  ">
          <p className="text-sm">{props.user.name}</p>
          <button
            className="text-sm border-b-2 hover:border-gray-600 transition-all"
            onClick={props.SignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState({
    y: 0,
    isScrollUp: true,
  });
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(auth);

  const SignOut = () => {
    dispatch(removeAuthData());
    history.push("/");
  };

  const ScrollY = useScrollPosition(60);
  useEffect(() => {
    setScrollPosition({
      y: ScrollY,
      isScrollUp: ScrollY <= scrollPosition.y,
    });
  }, [ScrollY]);

  return (
    <>
      <header
        className="fixed h-20 overflow-hidden w-full bg-white transition-all text-gray-600 font-body shadow-lg z-50"
        style={{
          top: scrollPosition.isScrollUp === true ? "0px" : "-100px",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <div className={`flex-grow`}>
            <Link to={"/form/dashboard"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <button className="hover:bg-slate-200 p-3 rounded-lg transition-all mr-10">
            Dashboard
          </button>

          {auth.isAuthenticated && auth.user != null ? (
            <User user={auth.user} SignOut={SignOut} />
          ) : null}
        </div>
      </header>
      <div className={`mt-20`} />
    </>
  );
}

export default Navbar;
