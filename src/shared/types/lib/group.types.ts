import { Timestamp } from 'firebase/firestore';

export enum GroupStatus {
  proccess = 'proccess',
  done = 'done',
  deleted = 'deleted',
}

export interface Group {
  uid: string;
  title: string;
  status: GroupStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
