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
  sectionId: string;
  text: string;
  priority: TaskPriorityEnum;
  status: TaskStatusEnum;
  createdAt: number;
  updatedAt: number;
};
