export enum BaseFormMethodsEnum {
  get = 'GET',
  post = 'POST',
}

export type BaseFormPropsType = {
  method?: BaseFormMethodsEnum;
};
