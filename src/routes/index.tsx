import { createBrowserRouter } from "react-router-dom";

import { routes } from "./routes";
import DefaultLayout from "../layout/DefaultLayout";

const finalRoutes = routes.map((route) => ({
  ...route,
  element: <DefaultLayout>{route.element}</DefaultLayout>,
}));

const router = createBrowserRouter(finalRoutes);

export default router;
