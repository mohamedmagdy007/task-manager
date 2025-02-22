import { TTask } from "../../types/shared";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface KanbanTaskProps {
  task: TTask;
}

const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "bg-red-100 p-1 px-3 rounded-full w-fit uppercase text-red-700";
    case "medium":
      return "bg-yellow-100 p-1 px-3 rounded-full w-fit uppercase text-yellow-700";
    case "low":
      return "bg-green-100 p-1 px-3 rounded-full w-fit text-center uppercase text-green-700";
    default:
      return "bg-gray-100 p-1 px-3 rounded-full w-fit text-center uppercase  text-gray-700";
  }
};

const KanbanTask = ({ task }: KanbanTaskProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id || "",
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="touch-none"
    >
      <div className="cursor-grab active:cursor-grabbing rounded-lg hover:shadow-md  transition-shadow">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <img
              src={task.image}
              alt={task.title}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-sm">{task.title}</h4>
              <p className="text-gray-500 text-sm line-clamp-2">
                {task.description}
              </p>
              <div className="mt-2">
                <div className={getPriorityColor(task.priority)}>
                  {task.priority}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default KanbanTask;
