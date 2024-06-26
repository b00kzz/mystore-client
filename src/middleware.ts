import { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import createIntlMiddleware from 'next-intl/middleware';
import { locales } from '@/util/navigation';

const publicPages = [
    "/home",
    '/login',
];

const intlMiddleware = createIntlMiddleware({
    locales,
    localePrefix: 'as-needed',
    defaultLocale: 'en'
});

const authMiddleware = withAuth(
    (req) => intlMiddleware(req),
    {
        callbacks: {
            authorized: ({ token }) => token == null
        },
        pages: {
            signIn: '/home'
        }
    }
);

export default function middleware(req: NextRequest) {
    const publicPathnameRegex = RegExp(
        `^(/(${locales.join('|')}))?(${publicPages
            .flatMap((path) => (path === '/' ? ['', '/'] : path))
            .join('|')})/?$`,
        'i'
    );
    const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

    if (isPublicPage) {
        return intlMiddleware(req);
    } else {
        return (authMiddleware as any)(req);
    }
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};