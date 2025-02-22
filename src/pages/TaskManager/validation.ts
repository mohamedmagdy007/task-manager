import * as yup from "yup";

export const validationSchema = yup.object().shape({
  image: yup
    .string()
    .required("Image is required")
    .test("isBase64", "Invalid image format", (value) => {
      if (!value) return false;
      return value.startsWith("data:image");
    }),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  priority: yup.string().required("Priority is required"),
  state: yup.string().required("State is required"),
});
