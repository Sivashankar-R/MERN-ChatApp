import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register.jsx";
import App from "../App.jsx";
import CheckEmail from "../Pages/checkEmail.jsx";
import CheckPassword from "../Pages/CheckPassword.jsx";
import Home from "../Pages/Home.jsx";
import MessagePage from "../Components/MessagePage.jsx";
import AuthLayouts from "../layout/index.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "register",
                element: <AuthLayouts><Register />
                </AuthLayouts>
            },
            {
                path: "email",
                element: <AuthLayouts><CheckEmail /></AuthLayouts>
            },
            {
                path: "password",
                element: <AuthLayouts><CheckPassword /></AuthLayouts>
            },
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: "userId",
                        element: <MessagePage />
                    }
                ]
            }
        ]
    }
]);

export default router;