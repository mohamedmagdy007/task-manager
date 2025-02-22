import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TTask } from "../types/shared";
import { useAppDispatch, useAppSelector } from "../store";
import { validationSchema } from "../pages/TaskManager/validation";
import { convertToBase64 } from "../utils/convertToBase64";
import { editTask } from "../store/tasks/taskSlice";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

export const useEditTask = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const task = useAppSelector((state) =>
    state.tasks.tasks.find((task) => task.id === id)
  );

  const [preview, setPreview] = useState<string | null>(task?.image || null);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<TTask>({
    defaultValues: task || {
      title: "",
      description: "",
      state: "",
      priority: "",
    },
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("description", task.description);
      setValue("state", task.state);
      setValue("priority", task.priority);
      setValue("image", task.image || "");
    }
  }, [task, setValue]);

  const onSubmit: SubmitHandler<TTask> = async (data) => {
    dispatch(editTask({ ...data, id: id }));
    navigate("/");
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!SUPPORTED_FORMATS.includes(file.type)) {
        setError("image", {
          message:
            "Unsupported file type. Please upload a JPG, JPEG, PNG, or GIF.",
        });
        setPreview(null);
        return;
      }
      const base64 = await convertToBase64(file);
      setValue("image", base64, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    preview,
    handleImageChange,
    onSubmit,
    navigate,
  };
};
