import { useShowTask } from "../../hooks/useShowTask";

function ShowTask() {
  const { task, navigate } = useShowTask();

  if (!task) return <p>Task not found</p>;

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">
            Info Task
          </h2>
          <div className="w-full bg-white rounded-[25px] p-5 grid gap-4">
            <div className="p-2 flex flex-wrap-reverse  justify-between border-[#E8E8E8] border rounded-md bg-[#FBFAFC]">
              <div className="grid">
                <p className="flex text-lg font-bold text-main-color">
                  Title: {task.title}
                </p>
                <p className="flex text-lg font-bold text-main-color">
                  Description: {task.description}
                </p>
                <p className="flex text-lg font-bold text-main-color">
                  Priority: {task.priority}
                </p>
                <p className="flex text-lg font-bold text-main-color">
                  State: {task.state}
                </p>
              </div>
              <div className="w-32 h-32">
                <img
                  src={task.image}
                  alt="imagePreview"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => navigate("/")}
              className="inline-block w-full rounded-lg bg-black ms-4 px-5 py-2 font-medium text-white sm:w-auto"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowTask;
