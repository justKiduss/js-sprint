import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
// import Home from "./pages/Home";
import LoginPage from "./page/signupPage";
import SignUpPage from "./page/signupPage";
import DashBoard from "./components/DashBoard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap pages in a common layout
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path:"signup",
        element:<SignUpPage/> 
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
