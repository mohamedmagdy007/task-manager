import { useCallback } from "react";
import { Link } from "react-router-dom";
import { Edit2, Eye, Trash2 } from "react-feather";

import CustomTable, {
  renderItemRows,
} from "../../components/TableData/CustomTable";
import { TTask } from "../../types/shared";
import { useAllTasks } from "../../hooks/useAllTasks";

const headers = [
  "ID",
  "Image",
  "Title",
  "Description",
  "State",
  "Priority",
  "Actions",
];

const AllTasks = () => {
  const {
    tasks,
    search,
    filterState,
    filterPriority,
    setSearch,
    setFilterState,
    setFilterPriority,
    resetFilters,
    handleDelete,
  } = useAllTasks();

  const rowItem = useCallback(
    (row: TTask) => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>
          <img
            src={row.image}
            alt="Preview"
            className="w-14 h-14 object-cover rounded-full"
          />
        </td>
        <td>{row.title}</td>
        <td>{row.description}</td>
        <td>{row.state}</td>
        <td>{row.priority}</td>
        <td>
          <div className="flex gap-2">
            <Link to={`/edit-task/${row.id}`}>
              <Edit2
                className="cursor-pointer text-gray-400 hover:text-blue-400 duration-100"
                size={20}
              />
            </Link>
            <Link to={`/show-task/${row.id}`}>
              <Eye
                className="cursor-pointer text-gray-400 hover:text-green-400 duration-100"
                size={20}
              />
            </Link>
            <Trash2
              className="cursor-pointer text-gray-400 hover:text-red-600 duration-100"
              size={20}
              onClick={() => handleDelete(row.id || "")}
            />
          </div>
        </td>
      </tr>
    ),
    [handleDelete]
  );

  return (
    <div className="w-full bg-white rounded-[25px] p-5">
      <h2 className="text-main-color text-lg font-bold">All Tasks</h2>

      <div className="flex items-center gap-2 my-5 flex-wrap ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by task name"
          className="rounded-lg border-gray-200 p-3 text-sm"
        />

        <select
          value={filterState}
          onChange={(e) => setFilterState(e.target.value)}
          className="rounded-lg border-gray-200 w-full max-w-[200px] p-3 text-sm"
        >
          <option value="">All States</option>
          <option value="todo">To-Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>

        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="rounded-lg border-gray-200  w-full  max-w-[200px] p-3 text-sm"
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          onClick={() => resetFilters()}
          className="inline-block rounded-lg bg-red-500 px-5 py-2 font-medium text-white sm:w-auto"
        >
          <span>Reset Filters</span>
        </button>
        <Link
          to="/create-task"
          className="inline-block rounded-lg bg-slate-700 px-5 py-2 font-medium text-white sm:w-auto"
        >
          Create New Task +
        </Link>
        <Link
          to={"/kanban-board"}
          className="bg-cyan-800 rounded-md text-white px-4 py-2"
        >
          Kanban Board
        </Link>
      </div>

      <CustomTable
        headers={headers}
        renderRows={() => renderItemRows(tasks, rowItem, headers.length)}
      />
    </div>
  );
};

export default AllTasks;
