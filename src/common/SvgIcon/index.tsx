import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={window.location.origin + `/img/svg/${src}`} alt={src} width={width} height={height} />
);
