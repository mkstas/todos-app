export enum BaseFormMethodsEnum {
  get = 'get',
  post = 'post',
}

export type BaseFormPropsType = {
  method?: BaseFormMethodsEnum;
};
