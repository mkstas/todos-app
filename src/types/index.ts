export interface IGroup {
  id: string;
  title: string;
}

export interface ITask {
  id: string;
  groupId: string;
  value: string;
  status: boolean;
}
