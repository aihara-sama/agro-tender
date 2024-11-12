import { PropsWithClassName } from "@/types/props";
import { FunctionComponent } from "react";

const NotificationsIcon: FunctionComponent<PropsWithClassName> = ({
	className = "",
}) => {
	return (
		<svg
			width="26"
			height="32"
			viewBox="0 0 26 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
		>
			<path
				d="M24.8928 23.0446L23.7422 21.1052C21.7546 17.9109 20.7085 14.1462 20.7085 10.2674C20.7085 6.16043 18.1979 2.85205 14.8504 1.71123C14.5366 0.684492 13.5951 0 12.549 0C11.5029 0 10.5615 0.684492 10.2476 1.71123C6.90015 2.85205 4.38954 6.16043 4.38954 10.2674C4.38954 14.1462 3.34345 17.9109 1.35589 21.1052L0.205193 23.0446C-0.317851 23.9572 0.205193 25.098 1.25128 25.098H23.8468C24.8928 25.098 25.4159 23.9572 24.8928 23.0446Z"
				fill="currentColor"
			/>
			<path
				d="M17.1504 27.817C17.1504 30.1176 15.2681 32 12.9674 32C10.6668 32 8.78442 30.1176 8.78442 27.817"
				fill="currentColor"
			/>
		</svg>
	);
};

export default NotificationsIcon;
