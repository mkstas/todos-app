export enum ButtonLinkSizeEnum {
  sm = 'text-sm',
  md = 'text-base',
  lg = 'text-lg',
}

export type ButtonLinkPropsType = {
  to: string;
  size?: ButtonLinkSizeEnum;
};
