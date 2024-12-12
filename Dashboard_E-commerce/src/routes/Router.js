import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Dashboard = lazy(() => import("../views/Dashboard.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts.js"));
const Badges = lazy(() => import("../views/ui/Badges.js"));
const Buttons = lazy(() => import("../views/ui/Buttons.js"));
const Cards = lazy(() => import("../views/ui/Cards.js"));
const Grid = lazy(() => import("../views/ui/Grid.js"));
const Tables = lazy(() => import("../views/ui/Tables.js"));
const Forms = lazy(() => import("../views/ui/Forms.js"));
const Login = lazy(() => import("../views/Login.js"));
const Menu = lazy(() => import("../views/Menu.js"));
const Category = lazy(() => import("../views/Category.js"));
const Products = lazy(() => import("../views/Products.js"));
const Blog = lazy(() => import("../views/Blog.js"))
const Profile = lazy(() => import ("../views/Profile.js"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/category", exact: true, element: <Category /> },
      { path: "/menu", exact: true, element: <Menu /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/product", exact: true, element: <Products /> },
      { path: "/blog", exact: true, element: <Blog /> },
      { path: "/users", exact: true, element: <Profile /> },
    ],
  },
];

export default ThemeRoutes;
