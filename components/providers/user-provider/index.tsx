"use client";

import { UserContext } from "@/contexts/user-context";
import { getProfile } from "@/db/server/user";
import { DB } from "@/lib/supabase/db";
import { createUserStore } from "@/stores/user-store";
import type { ResultOf } from "@/types/utils";
import { useRouter } from "next/navigation";
import type { FunctionComponent, PropsWithChildren } from "react";
import { useEffect, useRef } from "react";

interface Props {
	profile: ResultOf<typeof getProfile>;
}

const UserProvider: FunctionComponent<PropsWithChildren<Props>> = ({
	profile: initProfile,
	children,
}) => {
	// Hooks
	const store = useRef(createUserStore(initProfile)).current;
	const router = useRouter();

	// Effects
	useEffect(() => {
		DB.auth.onAuthStateChange((event) => {
			if (event === "SIGNED_OUT") {
				store.setState({ user: null });
				router.push("/sign-in");
				router.refresh();
			}
		});
	}, []);

	// View
	return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserProvider;
