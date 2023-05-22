import { ReactComponent as Vector } from './icons/vector.svg';

export enum IconType {
  Vector,
}

type IconMap = {
  width?: string;
  height?: string;
  source: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

/* eslint-disable prettier/prettier */
  export const icons = new Map<IconType, IconMap>([
    [IconType.Vector, { source: Vector, width: '45px', height: '45px' }],
]);  