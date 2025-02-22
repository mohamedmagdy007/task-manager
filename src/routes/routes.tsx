import { lazy } from "react";
// import EditTask from "../pages/TaskManager/EditTask";
// import KanbanBoard from "../pages/TaskManager/KanbanBoard";

const AllTasks = lazy(() => import("../pages/TaskManager/AllTasks"));
const CreateTask = lazy(() => import("../pages/TaskManager/CreateTask"));
const ShowTask = lazy(() => import("../pages/TaskManager/ShowTask"));
const EditTask = lazy(() => import("../pages/TaskManager/EditTask"));
const KanbanBoard = lazy(() => import("../pages/TaskManager/KanbanBoard"));

const routes = [
  {
    path: "/",
    element: <AllTasks />,
  },
  {
    path: "/create-task",
    element: <CreateTask />,
  },
  {
    path: "/show-task/:id",
    element: <ShowTask />,
  },
  {
    path: "/edit-task/:id",
    element: <EditTask />,
  },
  {
    path: "/kanban-board",
    element: <KanbanBoard />,
  },
];

export { routes };
