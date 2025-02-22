import { TTask } from "../../types/shared";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import KanbanTask from "./KanbanTask";

interface KanbanColumnProps {
  title: string;
  tasks: TTask[];
  state: "todo" | "doing" | "done";
}

const getStateColor = (state: string) => {
  switch (state.toLowerCase()) {
    case "todo":
      return "font-semibold text-2xl text-white p-2 rounded-md bg-blue-600 text-center";
    case "doing":
      return "font-semibold text-2xl text-white p-2 rounded-md bg-orange-400 text-center";
    case "done":
      return "font-semibold text-2xl text-white p-2 rounded-md bg-green-700 text-center";
    default:
      return "font-semibold text-2xl text-white p-2 rounded-md bg-blue-700 text-center";
  }
};

const KanbanColumn = ({ title, tasks, state }: KanbanColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: state,
  });

  return (
    <div ref={setNodeRef} className="bg-gray-50 rounded-lg">
      <h3 className={getStateColor(state)}>{title}</h3>
      <hr className="mb-4 mt-1" />
      <div className="space-y-3 p-4">
        <SortableContext
          items={tasks.map((t) => t.id || "")}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <KanbanTask key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default KanbanColumn;
