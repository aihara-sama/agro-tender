import LogoIcon from "@/components/icons/logo-icon";
import { PropsWithClassName } from "@/types/props";
import Link from "next/link";
import type { FunctionComponent } from "react";

const Logo: FunctionComponent<PropsWithClassName> = ({ className = "" }) => {
	return (
		<Link href={"/"} className={`${className}`}>
			<LogoIcon />
		</Link>
	);
};

export default Logo;
