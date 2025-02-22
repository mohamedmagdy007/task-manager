import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TTask } from "../types/shared";
import { useAppDispatch } from "../store";
import { validationSchema } from "../pages/TaskManager/validation";
import { convertToBase64 } from "../utils/convertToBase64";
import { addTask } from "../store/tasks/taskSlice";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

export const useCreateTask = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<TTask>({
    defaultValues: {
      title: "",
      description: "",
      state: "",
      priority: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<TTask> = async (data) => {
    dispatch(
      addTask({
        ...data,
        id: Math.random().toString(16).slice(2),
      })
    );
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
