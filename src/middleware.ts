import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

// middleware q intercepta as requisições
export function middleware (request: NextRequest){
 
    // se o caminho digitado começar com a rota "dashboard" e não tiver um token salvo dentre os cookies
    // ele redireciona p/ a página inicial /home 
    if(request.nextUrl.pathname.startsWith("/dashboard") && !request.cookies.get("token")) {
        return NextResponse.redirect(new URL("/home", request.url))
    }
}