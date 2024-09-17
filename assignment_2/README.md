This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Technical Decisions and Assumptions

### Technical Decisions

1. Used NextJS as ReactJS framework as it supports server-side rendering (SSR) to improve page loading time and technical SEO.

2. Used TailwindCSS for speedy development & ease development for responsiveness. (E.g. Mobile View & Tablet View)

3. Used shadcn/ui library to significantly reduce the amount of time needed to build beautifully designed components.

### Assumptions

1. Used Typescript for development instead of Javascript as it offers variable declaration, functional paradigm, and type system. It saves development time and allows developers to become more efficient

2. Instead of having a cart page, I have decided to opt for a sidebar to reduce the amount of time required for rendering, and to provide a seamless experience as well.

3. Implemented persistence of data through local storage so that when browser is closed and reopen, items in cart will be fetched from local storage. 