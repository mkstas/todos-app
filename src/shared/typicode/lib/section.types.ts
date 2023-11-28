export enum SectionStatusEnum {
  proccess = 'proccess',
  deleted = 'deleted',
}

export type SectionType = {
  uid: string;
  id: string;
  title: string;
  status: SectionStatusEnum;
};
