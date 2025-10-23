import type { IconProps } from '../../index';

const TabIcon: React.FC<IconProps> = ({ 
  size = 24, 
  ...props
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="TabIcon"
    {...props}
  >
    <path 
      d="M7 14L3.5 17.5L2.08 16.08L7 11.16L11.92 16.08L10.5 17.5L7 14ZM7 7L3.5 10.5L2.08 9.08L7 4.16L11.92 9.08L10.5 10.5L7 7Z" 
      fill='currentColor'
    />
  </svg>
);

TabIcon.displayName = "TabIcon";
export default TabIcon; 