import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
    const token = req.cookies.get("token");

    if (!token || token === undefined) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    try {
        const { payload } = await jwtVerify(
            token.value,
            new TextEncoder().encode("hard_secret")
        );
        return NextResponse.next();
    } catch (error) {
        console.error(error);
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/privateDashboard",
};
