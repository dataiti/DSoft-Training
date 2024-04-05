import Home from "../pages/home/Home";
import LayoutMain from "../layouts/LayoutMain";

const routers = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
];

export default routers;
