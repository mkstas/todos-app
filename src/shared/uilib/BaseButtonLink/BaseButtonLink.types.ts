export enum BaseButtonLinkSizeEnum {
  sm = 'text-sm',
  md = 'text-base',
  lg = 'text-lg',
}

export type BaseButtonLinkPropsType = {
  to: string;
  size?: BaseButtonLinkSizeEnum;
};
