"use client";

import { navigation } from "@/components/layout/header/navigation";
import { PropsWithClassName } from "@/types/props";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FunctionComponent } from "react";

const Nav: FunctionComponent<PropsWithClassName> = ({ className = "" }) => {
	const pathname = usePathname();

	return (
		<nav className={`h-full ${className}`}>
			<ul className={`h-full flex gap-4 items-center m-0 p-0 list-none`}>
				{navigation.map(({ title, href }, idx) => (
					<li key={idx} className="h-full text-white">
						<Link
							className={`h-full flex items-center justify-between ${clsx(pathname === href && "border-b-2 border-white")}`}
							href={href}
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
