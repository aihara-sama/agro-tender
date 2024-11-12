import { PropsWithClassName } from "@/types/props";
import { FunctionComponent } from "react";

const ArrowPrevIcon: FunctionComponent<PropsWithClassName> = ({
	className = "",
}) => {
	return (
		<svg
			width="17"
			height="32"
			viewBox="0 0 17 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
		>
			<path
				d="M16.2983 0.710246C15.3741 -0.236749 13.8756 -0.236749 12.9514 0.710246L1.38468 12.5737C-0.462204 14.4681 -0.46147 17.5376 1.38634 19.4308L12.9599 31.2898C13.8841 32.2367 15.3826 32.2367 16.3068 31.2898C17.2311 30.3428 17.2311 28.8074 16.3068 27.8604L6.40101 17.7103C5.4768 16.7633 5.4768 15.2278 6.40103 14.2809L16.2983 4.13967C17.2225 3.19265 17.2225 1.65727 16.2983 0.710246Z"
				fill="#707070"
			/>
		</svg>
	);
};

export default ArrowPrevIcon;
