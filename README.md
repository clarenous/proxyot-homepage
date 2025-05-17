# ProxyOT Homepage

This repository contains the source code for the **ProxyOT** homepage. The site is built with Next.js and Tailwind CSS and is exported as static files so it can be deployed to any static hosting provider.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/clarenous/proxyot-homepage)

## Building locally

Install dependencies and generate the static output:

```bash
npm install
npm run build
```

The exported site will be located in the `out/` directory. You can preview it locally with:

```bash
npm run start
```

## Deploying to Cloudflare Pages

1. Install the [Wrangler CLI](https://developers.cloudflare.com/pages/get-started/).
2. Publish the contents of the `out/` directory:

```bash
npx wrangler pages publish ./out --project-name=proxyot-homepage
```

Adjust the project name if your Cloudflare Pages project uses a different name. You can also deploy the `out/` directory to any other static hosting service.

