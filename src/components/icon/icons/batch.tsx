import { type IconProps } from '../index';

const BatchIcon: React.FC<IconProps> = ({
	size = 64,
	...props
}) => {

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="BatchIcon"
			role="img"
			{...props}
		>
			<path
				d="M58.6673 45.3346C58.6673 49.7529 55.0856 53.3346 50.6673 53.3346H13.334C8.91571 53.3346 5.33398 49.7529 5.33398 45.3346V18.668C5.33398 14.2497 8.91571 10.668 13.334 10.668H50.6673C55.0856 10.668 58.6673 14.2497 58.6673 18.668V45.3346Z"
				fill='currentColor'
				fillOpacity="0.2"
			/>
			<path
				d="M56.0007 24C57.4734 24 58.6673 25.1939 58.6673 26.6667C58.6673 28.1394 57.4734 29.3333 56.0007 29.3333H8.00065C6.52789 29.3333 5.33398 28.1394 5.33398 26.6667C5.33398 25.1939 6.52789 24 8.00065 24H56.0007Z"
				fill="currentColor"
				fillOpacity="0.88"
			/>
			<path
				d="M29.3333 34.668C30.8061 34.668 32 35.8619 32 37.3346C32 38.8074 30.8061 40.0013 29.3333 40.0013H18.6667C17.1939 40.0013 16 38.8074 16 37.3346C16 35.8619 17.1939 34.668 18.6667 34.668H29.3333Z"
				fill="currentColor"
				fillOpacity="0.2"
			/>
		</svg>
	);
};

BatchIcon.displayName = 'BatchIcon';

export default BatchIcon;
