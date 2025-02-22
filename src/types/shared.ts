export type TTask = {
  id?: string;
  order?: number;
  image: string;
  title: string;
  description: string;
  state: string;
  priority: string;
};

export type TTaskState = {
  tasks: TTask[];
};
