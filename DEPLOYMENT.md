# CI/CD & AWS Deployment Guide

## Overview

This guide covers deploying the Vikash Kumhar Portfolio (Next.js) to AWS using two approaches:
- **Option A** — AWS Amplify (simplest, recommended for portfolios)
- **Option B** — AWS S3 + CloudFront + GitHub Actions (production-grade, full control)

---

## Prerequisites

1. AWS Account — https://aws.amazon.com/free
2. GitHub repository with the portfolio code
3. Node.js 18+ and npm installed locally
4. AWS CLI installed and configured

```bash
# Install AWS CLI (macOS)
brew install awscli

# Configure credentials
aws configure
# Enter: Access Key ID, Secret Access Key, Region (e.g. ap-south-1), output format (json)
```

---

## Option A — AWS Amplify (Recommended)

Amplify auto-detects Next.js, handles builds, and provides a CDN. Easiest path.

### Step 1 — Push code to GitHub

```bash
git add .
git commit -m "feat: portfolio improvements"
git push origin main
```

### Step 2 — Connect to Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click **"New app → Host web app"**
3. Choose **GitHub** → authorize → select your repository + branch (`main`)
4. Amplify auto-detects Next.js. Confirm build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Click **"Save and deploy"**

### Step 3 — Custom Domain (optional)

1. In Amplify → **Domain management → Add domain**
2. Enter your domain, follow the DNS verification steps
3. Amplify provisions a free SSL certificate automatically

### Result

Every `git push` to `main` triggers an automatic build and deploy. Zero config CI/CD.

---

## Option B — S3 + CloudFront + GitHub Actions

Best for full control, custom caching rules, and edge distribution.

### Architecture

```
GitHub Push → GitHub Actions CI/CD
  → npm install + build
  → Export static files (next export)
  → Upload to S3 bucket
  → Invalidate CloudFront cache
  → Live at https://yourportfolio.com
```

> **Note:** This requires Next.js static export. Add to `next.config.js`:
> ```js
> module.exports = { output: 'export', images: { unoptimized: true } }
> ```

### Step 1 — Create S3 Bucket

```bash
# Create bucket (replace with your name)
aws s3api create-bucket \
  --bucket vikash-portfolio-prod \
  --region ap-south-1 \
  --create-bucket-configuration LocationConstraint=ap-south-1

# Enable static website hosting
aws s3 website s3://vikash-portfolio-prod \
  --index-document index.html \
  --error-document 404.html

# Disable public access block
aws s3api put-public-access-block \
  --bucket vikash-portfolio-prod \
  --public-access-block-configuration \
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# Set bucket policy for public read
aws s3api put-bucket-policy \
  --bucket vikash-portfolio-prod \
  --policy '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::vikash-portfolio-prod/*"
    }]
  }'
```

### Step 2 — Create CloudFront Distribution

```bash
# Create distribution (outputs Distribution ID — save it)
aws cloudfront create-distribution \
  --origin-domain-name vikash-portfolio-prod.s3-website.ap-south-1.amazonaws.com \
  --default-root-object index.html
```

Or create via Console:
1. CloudFront → **Create distribution**
2. Origin domain: `your-bucket.s3-website.ap-south-1.amazonaws.com`
3. Default root object: `index.html`
4. Price class: **Use only North America and Europe** (cheapest)
5. Alternate domain names: your custom domain
6. SSL: **Request or import a certificate with ACM** (free)

### Step 3 — Create IAM User for GitHub Actions

```bash
# Create user
aws iam create-user --user-name github-actions-portfolio

# Attach S3 + CloudFront permissions
aws iam put-user-policy \
  --user-name github-actions-portfolio \
  --policy-name PortfolioDeployPolicy \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": ["s3:PutObject","s3:GetObject","s3:DeleteObject","s3:ListBucket"],
        "Resource": [
          "arn:aws:s3:::vikash-portfolio-prod",
          "arn:aws:s3:::vikash-portfolio-prod/*"
        ]
      },
      {
        "Effect": "Allow",
        "Action": "cloudfront:CreateInvalidation",
        "Resource": "*"
      }
    ]
  }'

# Create access keys — copy the output
aws iam create-access-key --user-name github-actions-portfolio
```

### Step 4 — Add GitHub Secrets

In your GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret Name              | Value                             |
|--------------------------|-----------------------------------|
| `AWS_ACCESS_KEY_ID`      | From step 3 output                |
| `AWS_SECRET_ACCESS_KEY`  | From step 3 output                |
| `AWS_REGION`             | `ap-south-1`                      |
| `S3_BUCKET`              | `vikash-portfolio-prod`           |
| `CLOUDFRONT_DIST_ID`     | Your CloudFront Distribution ID   |

### Step 5 — GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio to AWS

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  # ── CI: Lint + Build ──────────────────────────────
  ci:
    name: Build & Test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: out
          path: out/
          retention-days: 1

  # ── CD: Deploy (only on push to main) ────────────
  deploy:
    name: Deploy to AWS
    needs: ci
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    environment: production

    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: out
          path: out/

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Sync to S3
        run: |
          aws s3 sync out/ s3://${{ secrets.S3_BUCKET }} \
            --delete \
            --cache-control "public, max-age=31536000, immutable" \
            --exclude "*.html"

          aws s3 sync out/ s3://${{ secrets.S3_BUCKET }} \
            --delete \
            --cache-control "public, max-age=0, must-revalidate" \
            --include "*.html"

      - name: Invalidate CloudFront cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DIST_ID }} \
            --paths "/*"

      - name: Deployment summary
        run: |
          echo "✅ Deployed to https://$(aws cloudfront get-distribution \
            --id ${{ secrets.CLOUDFRONT_DIST_ID }} \
            --query 'Distribution.DomainName' --output text)"
```

### Step 6 — Add `output: 'export'` to next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
};
module.exports = nextConfig;
```

---

## Estimated AWS Costs (Monthly)

| Service        | Free Tier              | After Free Tier    |
|----------------|------------------------|--------------------|
| S3 Storage     | 5 GB / 20k requests    | ~$0.023/GB         |
| CloudFront     | 1 TB transfer/month    | ~$0.0085/GB        |
| Amplify        | 1000 build min/month   | ~$0.01/min         |
| **Total**      | **$0 (free tier)**     | **< $2/month**     |

---

## Domain Setup (Route 53 + ACM)

```bash
# Register domain or transfer to Route 53
# Then request SSL certificate
aws acm request-certificate \
  --domain-name yourdomain.com \
  --validation-method DNS \
  --region us-east-1  # ACM for CloudFront must be in us-east-1

# Create Route 53 alias record pointing to CloudFront distribution
aws route53 change-resource-record-sets \
  --hosted-zone-id YOUR_ZONE_ID \
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "yourdomain.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "your-cf-distribution.cloudfront.net",
          "EvaluateTargetHealth": false
        }
      }
    }]
  }'
```

---

## Quick Start Checklist

- [ ] Push code to GitHub
- [ ] Choose Option A (Amplify) or Option B (S3 + CloudFront)
- [ ] **Option A:** Connect GitHub repo in Amplify Console → done
- [ ] **Option B:** Create S3 bucket, CloudFront distribution, IAM user
- [ ] **Option B:** Add GitHub secrets (5 secrets)
- [ ] **Option B:** Create `.github/workflows/deploy.yml`
- [ ] **Option B:** Add `output: 'export'` to `next.config.js`
- [ ] Set up custom domain (optional)
- [ ] Enable CloudFront HTTPS (optional but recommended)

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Run `npm run build` locally first, fix errors |
| S3 403 error | Check bucket policy and public access block settings |
| CloudFront shows old content | Run a `/*` invalidation |
| Images not loading after export | Set `images: { unoptimized: true }` in next.config.js |
| Custom domain not working | Verify DNS propagation (up to 48h) |
