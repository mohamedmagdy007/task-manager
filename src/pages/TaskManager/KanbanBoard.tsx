import { Link } from "react-router-dom";

import { DndContext, DragOverlay } from "@dnd-kit/core";

import KanbanColumn from "../../components/Kanbans/KanbanColumn";
import KanbanTask from "../../components/Kanbans/KanbanTask";

import { useKanbanBoard } from "../../hooks/useKanbanBoard";

const KanbanBoard = () => {
  const { columns, sensors, activeTask, handleDragStart, handleDragEnd } =
    useKanbanBoard();

  return (
    <div className="w-full bg-white rounded-[25px] p-5">
      <div className="flex justify-between items-center px-3  mb-6">
        <h2 className="text-main-color text-lg font-bold">Kanban Board</h2>
        <Link to="/" className="bg-cyan-800 rounded-md text-white px-4 py-2">
          List Tasks
        </Link>
      </div>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid md:grid-cols-3 gap-4">
          <KanbanColumn
            title="To Do"
            tasks={columns.todo.sort((a, b) => (a.order || 0) - (b.order || 0))}
            state="todo"
          />

          <KanbanColumn
            title="Doing"
            tasks={columns.doing.sort(
              (a, b) => (a.order || 0) - (b.order || 0)
            )}
            state="doing"
          />

          <KanbanColumn
            title="Done"
            tasks={columns.done.sort((a, b) => (a.order || 0) - (b.order || 0))}
            state="done"
          />
        </div>

        <DragOverlay>
          {activeTask ? (
            <div className="transform rotate-3">
              <KanbanTask task={activeTask} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
