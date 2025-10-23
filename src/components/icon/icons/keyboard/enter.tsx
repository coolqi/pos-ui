import type { IconProps } from '../../index';

const EnterIcon: React.FC<IconProps> = ({ 
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
    aria-label="EnterIcon"
    {...props}
  >
    <path 
      d="M19 7V10H7.83L10.83 7H7L2 12L7 17H10.83L7.83 14H19V17L24 12L19 7Z" 
      fill='currentColor'
    />
  </svg>
);

EnterIcon.displayName = "EnterIcon";
export default EnterIcon; 