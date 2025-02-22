import { useEditTask } from "../../hooks/useEditTask";

function EditTask() {
  const {
    register,
    handleSubmit,
    errors,
    preview,
    handleImageChange,
    onSubmit,
    navigate,
  } = useEditTask();

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">
              Edit Task
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  className="block text-sm mb-2 font-medium text-gray-700"
                  htmlFor="title"
                >
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Title"
                  type="text"
                  {...register("title")}
                  id="title"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block text-sm mb-2 font-medium text-gray-700"
                  htmlFor="description"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Description"
                  {...register("description")}
                  id="description"
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm mb-2 font-medium text-gray-700"
                    htmlFor="priority"
                  >
                    Priority <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    {...register("priority")}
                    id="priority"
                  >
                    <option value="" />
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  {errors.priority && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.priority.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm mb-2 font-medium text-gray-700"
                    htmlFor="state"
                  >
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    {...register("state")}
                    id="state"
                  >
                    <option value="" />
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                )}
                <div>
                  <label
                    className="block text-sm mb-2 font-medium text-gray-700"
                    htmlFor="image"
                  >
                    Upload Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="cursor-pointer border-0 outline-0 text-sm focus:outline-0 file:mr-4 file:py-2 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    type="file"
                    accept="image/*"
                    id="image"
                    onChange={handleImageChange}
                  />
                  {errors.image && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 items-center">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-blue-400 px-5 py-2 font-medium text-white sm:w-auto"
                >
                  Update Task
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="inline-block w-full rounded-lg bg-black  px-5 py-2 font-medium text-white sm:w-auto"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditTask;
