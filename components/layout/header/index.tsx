import MobileDrawer from "@/components/common/drawers/mobile-drawer";
import Nav from "@/components/layout/header/nav";
import UserActions from "@/components/layout/header/user-actions";
import Logo from "@/components/logo";
import type { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
	return (
		<header className="bg-emerald-900 h-16 flex flex-col items-center py-2">
			<div className="wrapper flex items-center w-full h-full">
				<Logo className="flex-1" />
				<Nav className="flex-[3] [@media(max-width:1160px)]:hidden" />
				<UserActions className="flex-0 [@media(min-width:1160px)]:flex-1" />
				<MobileDrawer />
			</div>
		</header>
	);
};

export default Header;
