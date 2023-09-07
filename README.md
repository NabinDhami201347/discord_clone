```sh
pnpm create next-app@latest my-app --typescript --tailwind --eslint
pnpm dlx shadcn-ui@latest init
pnpm dlx shadcn-ui@latest add button

pnpm i @clerk/nextjs
```

```sh
pnpm i -D prisma
pnpm dlx prisma init
pnpm dlx prisma generate
pnpm dlx prisma db push


pnpm i @prisma/client
```

```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_anVzdC1oYWxpYnV0LTMxLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_2SNtNo3bEK86DpKJ4e4KlCVgwLVWb5K8vFtbEFouO3

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://root:@localhost:3306/discord_clone"

UPLOADTHING_SECRET=sk_live_c01859a5dc0d1f22abbad5d5de913fd6dcf8fae5b791840d85c3962be0c0114a
UPLOADTHING_APP_ID=xraghg6ih9
```

[Authentication](https://clerk.com/docs/quickstarts/nextjs)
[Dark Mode](https://ui.shadcn.com/docs/dark-mode/next)
[Upload Things](https://docs.uploadthing.com/getting-started)
