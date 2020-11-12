import Destination from "../pages/destination/Destination";
import Home from "../pages/home/Home";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/destination",
    component: Destination,
  },
];

export default routes;
