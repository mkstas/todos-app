export enum BaseInputEnum {
  text = 'text',
  email = 'email',
  password = 'password',
}

export type BaseInputPropsType = {
  label?: string;
  type?: BaseInputEnum;
  id?: string;
  placeholder?: string;
  required?: boolean;
  modelValue: string;
};
