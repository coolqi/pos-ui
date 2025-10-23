import { type IconProps } from "../index";

const CloseIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CloseIcon"
      role="img"
      {...props}
    >
      <path
        d="M18.2929 4.29289C18.6834 3.90237 19.3164 3.90237 19.707 4.29289C20.0974 4.68342 20.0975 5.31646 19.707 5.70696L13.414 11.9999L19.707 18.2929L19.7753 18.3691C20.0956 18.7618 20.073 19.3409 19.707 19.707C19.3409 20.073 18.7618 20.0956 18.3691 19.7753L18.2929 19.707L11.9999 13.414L5.70696 19.707C5.31646 20.0975 4.68342 20.0974 4.29289 19.707C3.90237 19.3164 3.90237 18.6834 4.29289 18.2929L10.5859 11.9999L4.29289 5.70696C3.90237 5.31643 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31643 3.90237 5.70696 4.29289L11.9999 10.5859L18.2929 4.29289Z"
        fill='currentColor'
        fillOpacity="0.88"
      />
    </svg>
  );
};

CloseIcon.displayName = "CloseIcon";

export default CloseIcon;
