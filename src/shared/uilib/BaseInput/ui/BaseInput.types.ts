export enum BaseInputEnum {
  text = 'text',
  email = 'email',
  password = 'password',
}

export type BaseInputPropsType = {
  label?: string;
  placeholder?: string;
  type?: BaseInputEnum;
  id?: string;
  required?: boolean;
  modelValue?: any;
};
