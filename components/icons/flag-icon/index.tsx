import { PropsWithClassName } from "@/types/props";
import { FunctionComponent } from "react";

const FlagIcon: FunctionComponent<PropsWithClassName> = ({
	className = "",
}) => {
	return (
		<svg
			width="22"
			height="34"
			viewBox="0 0 22 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
		>
			<path
				d="M1 33V2.60004C1 2.60004 2.21739 1 5.86956 1C9.52174 1 11.9565 4.2 15.6087 4.2C19.2609 4.2 20.4783 2.6 20.4783 2.6V16.513C20.4783 16.513 19.2609 18.113 15.6087 18.113C11.9565 18.113 9.52174 14.913 5.86956 14.913C2.21739 14.913 1 21.8 1 21.8"
				fill="#707070"
			/>
			<path
				d="M1 33V2.60004C1 2.60004 2.21739 1 5.86956 1C9.52174 1 11.9565 4.2 15.6087 4.2C19.2609 4.2 20.4783 2.6 20.4783 2.6V16.513C20.4783 16.513 19.2609 18.113 15.6087 18.113C11.9565 18.113 9.52174 14.913 5.86956 14.913C2.21739 14.913 1 21.8 1 21.8"
				stroke="#707070"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default FlagIcon;
