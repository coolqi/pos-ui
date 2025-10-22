import { type IconProps } from '../index';

const ReportIcon: React.FC<IconProps> = ({
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
			xlinkTitle="ReportIcon"
			{...props}
		>
			<path
				d="M56 48C56 52.4183 52.4183 56 48 56H16C11.5817 56 8 52.4183 8 48V16C8 11.5817 11.5817 8 16 8H48C52.4183 8 56 11.5817 56 16V48Z"
				fill="currentColor"
				fillOpacity="0.2"
			/>
			<path
				d="M43.1998 25.067C44.0833 23.8889 45.7534 23.6498 46.9315 24.5331C48.1096 25.4167 48.3487 27.0867 47.4654 28.2649L39.4654 38.9315C39.0018 39.5497 38.2933 39.9363 37.5227 39.9914C36.7516 40.0462 35.9938 39.7646 35.4472 39.218L26.9524 30.7232L20.7987 38.9315C19.9152 40.1096 18.2451 40.3487 17.067 39.4654C15.8889 38.5818 15.6498 36.9118 16.5331 35.7336L24.5331 25.067L24.718 24.8456C25.1748 24.3567 25.8015 24.0553 26.4758 24.0071C27.2469 23.9523 28.0047 24.2339 28.5513 24.7805L37.0435 33.2727L43.1998 25.067Z"
				fill="currentColor"
				fillOpacity="0.88"
			/>
		</svg>
	);
};

ReportIcon.displayName = 'ReportIcon';

export default ReportIcon;
