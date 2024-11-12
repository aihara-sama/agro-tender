import { PropsWithClassName } from "@/types/props";
import { FunctionComponent } from "react";

const UserIcon: FunctionComponent<PropsWithClassName> = ({
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
			<circle cx="14.9333" cy="7.82222" r="7.82222" fill="#707070" />
			<path
				d="M31.2889 32C31.2889 30.4125 30.8842 28.8405 30.098 27.3738C29.3118 25.9071 28.1595 24.5744 26.7067 23.4519C25.254 22.3293 23.5294 21.4388 21.6313 20.8313C19.7332 20.2238 17.6989 19.9111 15.6444 19.9111C13.59 19.9111 11.5556 20.2238 9.65757 20.8313C7.7595 21.4388 6.03487 22.3293 4.58215 23.4519C3.12943 24.5744 1.97707 25.9071 1.19086 27.3738C0.404655 28.8405 -1.79606e-07 30.4125 0 32L31.2889 32Z"
				fill="#707070"
			/>
		</svg>
	);
};

export default UserIcon;
