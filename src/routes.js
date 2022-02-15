import FormDisplay from "./pages/form/FormDisplay";
import { SignUp, Login } from "./pages/Auth";
import Form from './pages/form/index';

const route = [
    {
        name: "Sign Up",
        path: "/signup",
        isAuth : false,
        component: SignUp
    },
    {
        name: "Login",
        path: "/login",
        isAuth : false,
        component: Login
    },
    {
        name: "Form Display",
        path: "/form-show/:id",
        isAuth : false,
        component: FormDisplay
    },
    {
        name: "Form",
        path: '/form',
        isAuth: true,
        component: Form
    }
];

export default route;

