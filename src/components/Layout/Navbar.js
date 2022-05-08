import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../Assets/YangLOGO.svg";
import useScrollPosition from "@react-hook/window-scroll";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}}
 */
function User(props) {
  return (
    <>
      <div className={props.className} onClick={props.onClick}>
        <div className="flex">
          <button className="text-sm">{props.user.name}</button>
          <img src={props.user.avatar} className="w-8 ml-4" />
        </div>
      </div>
    </>
  );
}

User.propTypes = {
  user: PropTypes.object,
  SignOut: PropTypes.func,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
const routes = [
  {
    path: "/form/dashboard",
    name: "Dashboard",
  },
  {
    path: "/form/api",
    name: "API",
  },
];

/**
 *
 * @return {React.Component}
 */
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState({
    y: 0,
    isScrollUp: true,
  });
  const auth = useSelector(state => state.auth);
  const history = useHistory();
  // console.log(auth);

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

          {routes.map((route, index) => (
            <button
              className="hover:bg-slate-200 p-3 rounded-lg transition-all mx-3"
              key={index}
              onClick={() => {
                history.push(route.path);
              }}
            >
              {route.name}
            </button>
          ))}

          {auth.isAuthenticated && auth.user != null ? (
            <User
              user={auth.user}
              onClick={() => {
                history.push("/profile/settings");
              }}
            />
          ) : null}
        </div>
      </header>
      <div className={`mt-20`} />
    </>
  );
}

export default Navbar;
