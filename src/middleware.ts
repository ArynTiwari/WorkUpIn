export { default } from "next-auth/middleware"

export const config = { matcher: ["/chat",'/projects/pt/:path*','/blogs/pt/:path*','/profile/:path*'] }