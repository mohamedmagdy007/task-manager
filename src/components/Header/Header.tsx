import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-4 bg-white flex-wrap gap-4 shadow-sm flex justify-between items-center sticky top-0 z-50">
      <h2 className="text-[18px] ">Wellcome, in Task Manager</h2>
      <div className="flex gap-4">
        <Link
          to={"/create-task"}
          className="bg-slate-700 rounded-md text-white px-4 py-2"
        >
          Create Task
        </Link>
        <Link
          to={"/kanban-board"}
          className="bg-cyan-800 rounded-md text-white px-4 py-2"
        >
          Kanban Board
        </Link>
      </div>
    </div>
  );
}

export default Header;
