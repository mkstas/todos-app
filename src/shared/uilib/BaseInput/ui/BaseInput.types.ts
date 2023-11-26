export enum BaseInputTypeEnum {
  text = 'text',
  email = 'email',
  password = 'password',
}

export type BaseInputPropsType = {
  type?: BaseInputTypeEnum;
  modelValue: string;
  label?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
};
