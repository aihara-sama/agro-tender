"use client";

import NotificationsIcon from "@/components/icons/notifications-icon";
import SearchIcon from "@/components/icons/search-icon";
import { useUser } from "@/hooks/use-user";
import { PropsWithClassName } from "@/types/props";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";

const UserActions: FunctionComponent<PropsWithClassName> = ({
	className = "",
}) => {
	const user = useUser((state) => state.user);

	return (
		<div className={`flex items-center gap-3 ${className}`}>
			<SearchIcon className="size-6" />
			<NotificationsIcon className="size-6" />
			{user ? (
				<div className="flex gap-2 items-center">
					<Image className="rounded-[50%]" fill alt="" src={user.avatar} />
					<div className="flex flex-col justify-between">
						<p>
							{user.first_name} {user.last_name}
						</p>
						<p className="text-sm">{user.field_of_study}</p>
					</div>
				</div>
			) : (
				<Link className="hidden sm:block" href={"/sign-up"}>
					<div className="whitespace-nowrap">Войти | Зарегистрироваться</div>
				</Link>
			)}
		</div>
	);
};

export default UserActions;
