import { useState } from "react";

import {
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { useAppDispatch, useAppSelector } from "../store";
import { editTask } from "../store/tasks/taskSlice";
import { TTask } from "../types/shared";

export const useKanbanBoard = () => {
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [activeTask, setActiveTask] = useState<TTask | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const columns = {
    todo: tasks.filter((task) => task.state === "todo"),
    doing: tasks.filter((task) => task.state === "doing"),
    done: tasks.filter((task) => task.state === "done"),
  };

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    if (task) setActiveTask(task);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeTaskId = String(active.id);
    const overId = String(over.id);

    const activeTask = tasks.find((t) => String(t.id) === activeTaskId);
    if (!activeTask) return;

    if (["todo", "doing", "done"].includes(overId)) {
      if (activeTask.state !== overId) {
        dispatch(editTask({ ...activeTask, state: overId }));
      }
      return;
    }

    const overTask = tasks.find((t) => String(t.id) === overId);
    if (!overTask || activeTask.state !== overTask.state) return;

    const oldIndex = columns[
      activeTask.state as keyof typeof columns
    ].findIndex((t) => String(t.id) === activeTaskId);
    const newIndex = columns[
      activeTask.state as keyof typeof columns
    ].findIndex((t) => String(t.id) === overId);

    const reorderedTasks = arrayMove(
      columns[activeTask.state as keyof typeof columns],
      oldIndex,
      newIndex
    );

    reorderedTasks.forEach((task: TTask, index: number) => {
      dispatch(editTask({ ...task, order: index }));
    });
  };

  return {
    columns,
    sensors,
    activeTask,
    handleDragStart,
    handleDragEnd,
  };
};
