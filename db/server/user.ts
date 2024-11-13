import { getServerDB } from "@/lib/supabase/db/get-server-db";

// GET
export const getCachedUser = () =>
	getServerDB().then(({ auth }) => auth.getUser());

export const getProfile = async (id: string) => {
	const serverDB = await getServerDB();

	const { data } = await serverDB
		.from("users")
		.select("*")
		.eq("id", id)
		.single();

	return data;
};
