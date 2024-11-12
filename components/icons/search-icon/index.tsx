import { PropsWithClassName } from "@/types/props";
import { FunctionComponent } from "react";

const SearchIcon: FunctionComponent<PropsWithClassName> = ({
	className = "",
}) => {
	return (
		<svg
			width="30"
			height="32"
			viewBox="0 0 30 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M11.6667 3.55556C7.06431 3.55556 3.33334 7.53526 3.33334 12.4445C3.33334 17.3536 7.06431 21.3334 11.6667 21.3334C13.9684 21.3334 16.0494 20.3405 17.5592 18.7298C19.0692 17.1193 20 14.8996 20 12.4445C20 7.53526 16.269 3.55556 11.6667 3.55556ZM0 12.4445C0 5.57158 5.22336 0 11.6667 0C18.11 0 23.3334 5.57158 23.3334 12.4445C23.3334 15.239 22.4684 17.8203 21.0105 19.8971L29.5119 28.9652C30.1627 29.6594 30.1627 30.7851 29.5119 31.4793C28.861 32.1736 27.8057 32.1736 27.1549 31.4793L18.6535 22.4112C16.7065 23.9663 14.2865 24.8889 11.6667 24.8889C5.22336 24.8889 0 19.3174 0 12.4445Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default SearchIcon;
