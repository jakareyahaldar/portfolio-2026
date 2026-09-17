import { NextResponse } from 'next/server'

export function proxy(req) {
  const path = req.nextUrl.pathname
  const myCookie = req.cookies.get("admin_jack")?.value

  if (myCookie) {
    // কুকি আছে, রিকোয়েস্ট চালিয়ে যেতে দাও
    return NextResponse.next()
  } else {
    // কুকি নেই, লগইনে পাঠাও
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
}

// Proxy এই রুটগুলোতে চলবে
export const config = {
  matcher: '/admin/:path*'
}