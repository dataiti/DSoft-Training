import { useRoutes } from "react-router-dom";

import routers from "./routes";

const App = () => {
  const routings = useRoutes(routers);

  return <div>{routings}</div>;
};

export default App;
