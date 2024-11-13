import { PropsWithClassName } from "@/types/props";
import { FunctionComponent } from "react";

const PlusIcon: FunctionComponent<PropsWithClassName> = ({
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
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.3333 29.3333C13.3333 30.8061 14.5272 32 16 32C17.4728 32 18.6667 30.8061 18.6667 29.3333V18.6667H29.3333C30.8061 18.6667 32 17.4728 32 16C32 14.5272 30.8061 13.3333 29.3333 13.3333H18.6667V2.66667C18.6667 1.19389 17.4728 0 16 0C14.5272 0 13.3333 1.19389 13.3333 2.66667V13.3333H2.66667C1.19392 13.3333 0 14.5272 0 16C0 17.4728 1.19392 18.6667 2.66667 18.6667H13.3333V29.3333Z"
				fill="#282828"
			/>
		</svg>
	);
};

export default PlusIcon;
