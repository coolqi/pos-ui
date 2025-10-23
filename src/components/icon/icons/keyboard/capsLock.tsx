import type { IconProps } from '../../index';

const CapsLockIcon: React.FC<IconProps> = ({
  size = 24,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="CapsLockIcon"
    role="img"
    {...props}
  >
    <path
      d="M14.2168 3.81131C15.2309 2.89887 16.7701 2.8988 17.7842 3.81131L28.9346 13.8465C30.2971 15.0726 29.4297 17.3328 27.5967 17.3328H24.001V25.3328C24.001 27.5419 22.2101 29.3328 20.001 29.3328H12.001C9.79213 29.3327 8.00136 27.5426 8.00099 25.3338L8.00001 17.3328H4.40431C2.57143 17.3327 1.70411 15.0726 3.06642 13.8465L14.2168 3.81131ZM6.14161 14.6668H9.33399C10.0702 14.667 10.667 15.2635 10.667 15.9998L10.668 25.3328C10.668 26.0691 11.2647 26.6667 12.001 26.6668H20.001C20.7374 26.6668 21.334 26.0692 21.334 25.3328V15.9998C21.334 15.2634 21.9316 14.6668 22.668 14.6668H25.8604L16 5.79373L6.14161 14.6668Z"
      fill='currentColor'
      fillOpacity='0.88'
    />
  </svg>
);

CapsLockIcon.displayName = "CapsLockIcon";
export default CapsLockIcon;
