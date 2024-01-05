export enum TaskPriorityEnum {
  none = 'none',
  normal = 'normal',
  high = 'high',
  veryHigh = 'veryHigh',
}

export enum TaskStatusEnum {
  proccess = 'proccess',
  done = 'done',
  deleted = 'deleted',
}

export type TaskType = {
  taskGroupId: string;
  title: string;
  description: string;
  priority: TaskPriorityEnum;
  status: TaskStatusEnum;
  createdAt: number;
  updatedAt: number;
};
