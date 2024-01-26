export interface Group {
  id: string;
  title: string;
}

export interface Task {
  id: string;
  groupId: string;
  text: string;
  isComplete: boolean;
}
