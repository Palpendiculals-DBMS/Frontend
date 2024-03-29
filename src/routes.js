import FormDisplay from "./pages/form/FormDisplay/FormDisplay";
import { SignUp, Login } from "./pages/Auth";
import Form from "./pages/form";
import Settings from "./pages/profile/Settings";

const route = [
  {
    name: "Sign Up",
    path: "/signup",
    isAuth: false,
    component: SignUp,
  },
  {
    name: "Login",
    path: "/login",
    isAuth: false,
    component: Login,
  },
  {
    name: "Form Display",
    path: "/form-show/:id",
    isAuth: false,
    component: FormDisplay,
  },
  {
    name: "Dashboard",
    path: "/form",
    isAuth: true,
    component: Form,
  },
  {
    name: "Form Display",
    path: "/f/:id",
    isAuth: false,
    component: FormDisplay,
  },
  {
    name: "Settings",
    path: "/profile/settings",
    isAuth: true,
    component: Settings,
  },
];

export default route;
