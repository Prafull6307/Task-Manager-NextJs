/** @format */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
 
  const authToken = request.cookies.get("authtoken")?.value;
  if (request.nextUrl.pathname == "/api/login"||request.nextUrl.pathname=='api/users') {
    return;
  }
  const loggedInUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register"
  if (loggedInUserNotAccessPath) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
      if(request.nextUrl.pathname.startsWith('/api')){
       return NextResponse.json({
        message:"Access Denied !!",
        success :false
       })
      }
      else
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}


export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/addtask",
    "/showtask",
    "/profile/:path*",
   
    
  ],
};
