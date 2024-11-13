import { updateSession } from "@/lib/supabase/middlewares/update-session";
import { NextResponse, type NextRequest } from "next/server";

const publicPaths = [/\//, /\/orgs/, /\/sign-in/, /\/sign-up/];

export async function middleware(request: NextRequest) {
	const publicPathnameRegex = new RegExp(
		`^(/)?(${publicPaths.map((page) => page.source).join("|")})$`,
		"i"
	);
	const isPublicPath = publicPathnameRegex.test(request.nextUrl.pathname);

	if (isPublicPath) return NextResponse.next();

	return updateSession(request);
}

export const config = {
	matcher: [
		"/",
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)|/$).*)",
	],
};
