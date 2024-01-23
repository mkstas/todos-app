import { Timestamp } from 'firebase/firestore';

export enum TaskStatus {
  proccess = 'proccess',
  done = 'done',
  deleted = 'deleted',
}

export interface Task {
  groupId: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
