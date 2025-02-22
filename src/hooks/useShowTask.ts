import { useNavigate, useParams } from "react-router-dom";

import { RootState, useAppSelector } from "../store";

export function useShowTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = useAppSelector((state: RootState) =>
    state.tasks.tasks.find((t) => t.id === id)
  );

  return { task, navigate };
}
