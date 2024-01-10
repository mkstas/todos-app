export enum InputTypeEnum {
  text = 'text',
  email = 'email',
  password = 'password',
}

export type InputPropsType = {
  type?: InputTypeEnum;
  modelValue: string;
  label?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
};
