import { useState, useMemo, useCallback } from "react";
import Swal from "sweetalert2";

import { useAppDispatch, useAppSelector } from "../store";
import { deleteTask } from "../store/tasks/taskSlice";

export const useAllTasks = () => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.tasks);

  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const resetFilters = () => {
    setSearch("");
    setFilterState("");
    setFilterPriority("");
  };

  const handleDelete = useCallback(
    (id: string) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteTask(id));
          Swal.fire("Deleted!", "Your task has been deleted.", "success");
        }
      });
    },
    [dispatch]
  );

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(search.toLowerCase()) &&
        (filterState ? task.state === filterState : true) &&
        (filterPriority ? task.priority === filterPriority : true)
      );
    });
  }, [tasks, search, filterState, filterPriority]);

  return {
    tasks: filteredTasks,
    search,
    filterState,
    filterPriority,
    setSearch,
    setFilterState,
    setFilterPriority,
    resetFilters,
    handleDelete,
  };
};
