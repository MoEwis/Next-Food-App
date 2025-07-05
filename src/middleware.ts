// import { NextRequest, NextResponse } from "next/server";
// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { i18n, LanguageType, Locale } from "./i18n.config";

// function getLocale(request: NextRequest): string | undefined {
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const locales: LanguageType[] = i18n.locales;
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
//   let locale = "";

//   try {
//     locale = matchLocale(languages, locales, i18n.defaultLocale);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
//   } catch (error: any) {
//     locale = i18n.defaultLocale;
//   }
//   return locale;
// }

// export async function middleware(request: NextRequest) {
//   const requestsHeaders = new Headers(request.headers);
//   requestsHeaders.set("x-url", request.url);
//   const pathname = request.nextUrl.pathname;
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`)
//   );
//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);
//     return NextResponse.redirect(`/${locale}${pathname}`, request.url);
//   }

//   return NextResponse.next({
//     headers: requestsHeaders,
//   });
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
//   ],
// };

import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n, LanguageType } from "./i18n.config";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: LanguageType[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    return matchLocale(languages, locales, i18n.defaultLocale);
  } catch {
    return i18n.defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(url); // ✅ الآن URL كامل (absolute)
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
