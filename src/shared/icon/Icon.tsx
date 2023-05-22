import { icons, IconType } from './IconType';

type IconProps = {
  icon: IconType;
  className?: string;
};

const Icon = ({ icon, className }: IconProps): JSX.Element | null => {
  const { source, width, height } = icons.get(icon) || {};

  if (source) {
    const Icon = source;
    return <Icon className={className} width={width} height={height} />;
  } else {
    return null;
  }
};

export default Icon;
