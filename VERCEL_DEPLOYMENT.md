# Operations Hive — Vercel Deployment

This package is configured as a native Next.js application for Vercel.

## Deploy through GitHub

1. Upload the contents of this folder to the root of the GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the detected framework as **Next.js**.
4. Keep the root directory as `.`.
5. Deploy. The repository already defines `npm ci` and `npm run build`.

## Optional production URL

After connecting a custom domain, add `NEXT_PUBLIC_SITE_URL` in Vercel Project Settings → Environment Variables, using the full canonical URL such as `https://www.example.com`, then redeploy.

## Local production verification

```text
npm ci
npm run build
npm start
```

Node.js 22 or later is required.
