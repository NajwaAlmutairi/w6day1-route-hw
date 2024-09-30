import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App.jsx'
import ErrorPage from "../Error-page";
import London from "../pages/london.jsx";
import Rome from "../pages/Rome.jsx";
import Paris from "../pages/Paris.jsx";
import Riyadh from "../pages/Riyadh.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/riyadh",
    element: <Riyadh />,
  },
  {
    path: "/london",
    element: < London />,
  },
  {
    path: "/rome",
    element: < Rome />,
  },
  ,
  {
    path: "/paris",
    element: < Paris />,
  },
]);

export default router;
