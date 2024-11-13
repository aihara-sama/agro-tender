"use client";

import BasicDrawer from "@/components/common/drawers/basic-drawer";
import Hamburger from "@/components/common/drawers/mobile-drawer/hamburger";
import { navigation } from "@/components/layout/header/navigation";
import Logo from "@/components/logo";
import { useUser } from "@/hooks/use-user";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type FunctionComponent } from "react";

const MobileDrawer: FunctionComponent = () => {
	// State
	const [isOpen, setIsOpen] = useState(false);

	// Hooks
	const pathname = usePathname();
	const user = useUser((state) => state.user);

	// View
	return (
		<>
			<Hamburger onClick={() => setIsOpen(true)} />
			{isOpen && (
				<BasicDrawer
					header={<Logo />}
					placement="left"
					onClose={() => setIsOpen(false)}
				>
					<div className="px-7 pt-12">
						<ul
							className={`h-full flex flex-col gap-4 items-center m-0 p-0 list-none`}
						>
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

						{!user && (
							<>
								<hr className="my-8 border-white" />

								<Link className="text-center" href={"/sign-up"}>
									<div className="whitespace-nowrap">
										Войти | Зарегистрироваться
									</div>
								</Link>
							</>
						)}
					</div>
				</BasicDrawer>
			)}
		</>
	);
};
export default MobileDrawer;
