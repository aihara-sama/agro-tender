import { PropsWithClassName } from "@/types/props";
import { FunctionComponent } from "react";

const ProjectsIcon: FunctionComponent<PropsWithClassName> = ({
	className = "",
}) => {
	return (
		<svg
			width="28"
			height="32"
			viewBox="0 0 28 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.8564 0L27.7128 8V24L13.8564 32L0 24V8L13.8564 0ZM3.07915 11.3777L3.0792 22.2222L12.3168 27.5555V16.711L3.07915 11.3777ZM24.6336 11.3778L15.396 16.711V27.5555L24.6336 22.2222L24.6336 11.3778ZM13.8564 3.55556L4.77276 8.8L13.8564 14.0444L22.9401 8.8L13.8564 3.55556Z"
				fill="#707070"
			/>
		</svg>
	);
};

export default ProjectsIcon;
