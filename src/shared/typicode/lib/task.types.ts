export enum TaskStatusEnum {
  proccess = 'proccess',
  done = 'done',
  deleted = 'deleted',
}

export type TaskType = {
  taskGroupId: string;
  title: string;
  description: string;
  status: TaskStatusEnum;
  createdAt: number;
  updatedAt: number;
};
