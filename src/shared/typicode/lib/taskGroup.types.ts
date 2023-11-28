export enum TaskGroupStatusEnum {
  proccess = 'proccess',
  deleted = 'deleted',
}

export type TaskGroupType = {
  uid: string;
  id: string;
  title: string;
  status: TaskGroupStatusEnum;
};
