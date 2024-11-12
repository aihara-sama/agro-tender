import { PropsWithClassName } from "@/types/props";
import { FunctionComponent } from "react";

const OrganizationsIcon: FunctionComponent<PropsWithClassName> = ({
	className = "",
}) => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
		>
			<path d="M22.5882 0H0V4.84848H22.5882V0Z" fill="#707070" />
			<path
				d="M31.9999 13.5758H9.41162V18.4242H31.9999V13.5758Z"
				fill="#707070"
			/>
			<path d="M22.5882 27.1515H0V32H22.5882V27.1515Z" fill="#707070" />
		</svg>
	);
};

export default OrganizationsIcon;
