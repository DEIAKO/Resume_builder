# Vercel Deployment Guide - Resume Builder

## Overview
This monorepo contains two deployable applications:
1. **resume-landing** - React frontend (static SPA)
2. **api-server** - Node.js Express backend API

## Pre-Deployment Checklist

### 1. Project Requirements
- [ ] Vercel account created and connected to your GitHub repo
- [ ] All environment variables identified
- [ ] Database migrations completed (if applicable)
- [ ] All dependencies pinned in package.json
- [ ] Code tested locally with `pnpm run build`

### 2. Environment Variables to Configure
Set these in Vercel Project Settings → Environment Variables:

#### For resume-landing:
```
PORT=3000
BASE_PATH=/
```

#### For api-server:
```
PORT=3000
NODE_ENV=production
DATABASE_URL=<your-database-url>
CORS_ORIGIN=<your-frontend-url>
```

## Deployment Options

### Option 1: Deploy Both Apps Separately (RECOMMENDED)
Create two separate Vercel projects - one for frontend, one for backend.

#### Steps:
1. **Resume Landing (Frontend)**
   ```bash
   - Create new project in Vercel
   - Connect GitHub repo
   - Root Directory: `artifacts/resume-landing`
   - Build Command: `cd ../.. && pnpm run build --filter='@workspace/resume-landing'`
   - Output Directory: `dist`
   - Environment Variables:
     * PORT=3000
     * BASE_PATH=/
   ```

2. **API Server (Backend)**
   ```bash
   - Create new Vercel project for API
   - Root Directory: `artifacts/api-server`
   - Build Command: `cd ../.. && pnpm run build --filter='@workspace/api-server'`
   - Output Directory: `dist`
   - Environment Variables:
     * NODE_ENV=production
     * PORT=3000
     * DATABASE_URL=<your-db-url>
   ```

3. **Connect Frontend to Backend**
   - In resume-landing, set environment variable:
     ```
     VITE_API_URL=https://<your-api-domain>.vercel.app
     ```

### Option 2: Monorepo Single Project Deployment
Deploy entire monorepo as single project with root-level `vercel.json`.

```json
{
  "buildCommand": "pnpm run build",
  "outputDirectory": "artifacts/resume-landing/dist"
}
```

**Note:** This approach is simpler but limits flexibility. Choose Option 1 for production.

## Vercel Configuration Files

### vercel.json (artifact-level)
Each app has a `vercel.json` that specifies:
- Build commands
- Output directory
- Environment variables
- Function timeout settings
- Development commands

### .vercelignore
Root-level file that excludes unnecessary files from deployment:
- Version control files (.git, .github)
- Dependencies (node_modules)
- Documentation
- Test files
- IDE configurations

---

## Deployment Steps

### First-time Deploy:

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Choose root directory:
     * For frontend: `artifacts/resume-landing`
     * For backend: `artifacts/api-server`

3. **Configure Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add all required variables from `.env.example`
   - Different values for Preview vs Production if needed

4. **Set Build Settings**
   - Build Command: See examples above
   - Output Directory: `dist`
   - Install Command: (leave default)

5. **Deploy**
   - Click "Deploy"
   - Vercel automatically deploys on git push

### Subsequent Deployments:
Just push to your main branch:
```bash
git push origin main
```
Vercel automatically redeploys!

---

## Important Deployment Considerations

### 1. **Node Version**
- Vercel uses Node 18/20 by default
- Ensure `package.json` has `"engines"` field if needed:
  ```json
  {
    "engines": {
      "node": ">=20.0.0",
      "pnpm": ">=9.0.0"
    }
  }
  ```

### 2. **Build Optimization**
- Install time: ~2-3 minutes (pnpm is fast)
- Build time: ~2-5 minutes
- Your Vercel project has default build timeout of **45 seconds** for standard, **900 seconds** for pro
- Long builds may timeout - verify locally with `pnpm run build`

### 3. **Output Directory**
- Frontend (Vite): `dist/` → static files served at `/`
- Backend (Node): `dist/` → Node.js server executable

### 4. **Monorepo Considerations**
- **pnpm workspaces** are fully supported by Vercel
- Vercel caches `node_modules` and monorepo structure
- First deploy is slower (full install), subsequent deploys faster (cache hits)
- All dependencies must use `workspace:*` protocol where applicable

### 5. **Database Migrations**
If using Drizzle ORM (as in your project):
- Run migrations BEFORE deployment
- Or add migration command to build script
- Set DATABASE_URL in Environment Variables
- Migration runs on build (add to package.json build script if needed)

### 6. **CORS Issues**
- Configure backend CORS to accept frontend domain
- In api-server, set environment variable:
  ```
  CORS_ORIGIN=https://yourdomain.vercel.app,https://www.yourdomain.com
  ```

### 7. **File Size Limits**
- Vercel function file size limit: **50MB** for Pro
- Your dist build should be < 10MB typically
- Check build size: `du -sh dist/`

### 8. **Environment Variables**
- Different environments (Production, Preview, Development)
- Set environment-specific values in Vercel dashboard
- Preview deployments use Preview env vars (great for testing)

---

## Troubleshooting Common Issues

### Build Fails with "Build timed out"
- **Cause:** Build takes > 900 seconds (pro) or 45 (standard)
- **Solution:** 
  - Profile build: `time pnpm run build`
  - Optimize dependencies
  - Upgrade to Vercel Pro
  - Split into smaller builds

### Module not found errors
- **Cause:** pnpm workspace imports not resolved
- **Solution:** Ensure `package.json` has correct workspace paths
- Test locally: `pnpm run build`

### Environment variables not working
- **Cause:** Not set in Vercel dashboard OR wrong deployment
- **Solution:**
  - Check Vercel Settings → Environment Variables
  - Rebuild deployment after adding vars
  - Verify variable name spelled correctly (case-sensitive)

### CORS errors in frontend
- **Cause:** Backend CORS not configured for frontend domain
- **Solution:**
  - Update CORS_ORIGIN env var on backend
  - Ensure it matches frontend domain exactly
  - Redeploy backend

### Database connection fails
- **Cause:** DATABASE_URL not set or incorrect
- **Solution:**
  - Verify DATABASE_URL in Vercel env vars
  - Test connection string locally
  - Check database firewall allows Vercel IPs

---

## Performance Optimization Tips

### Frontend (resume-landing)
- ✅ Already using Vite (fast builds)
- Optimize images: Use next-gen formats (WebP)
- Enable compression in Vercel (automatic)
- Monitor bundle size: `pnpm run build` and check `dist/`

### Backend (api-server)
- ✅ Code is already tree-shaken by esbuild
- Monitor API response times in Vercel Analytics
- Set appropriate function timeout (currently 60s)
- Enable caching where appropriate

---

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Project → Settings → Domains
   - Add custom domain
   - Add DNS records (provided by Vercel)

2. **For Both Frontend and Backend:**
   - Frontend: `yourdomain.com`
   - Backend: `api.yourdomain.com`
   - Updated `.env` with VITE_API_URL in frontend

---

## Monitoring & Logs

### Access Logs
- Vercel Dashboard → Deployments → Click deployment
- View function logs and build output
- Real-time logs available for running deployments

### Analytics
- View traffic, response times, errors
- Dashboard → Analytics
- Set up error notifications

### Rollback to Previous Deploy
- Dashboard → Deployments
- Click "..." next to previous deployment
- Select "Redeploy"

---

## Security Best Practices

✅ **DO:**
- Keep secrets in Vercel environment variables (never commit to git)
- Use different credentials for staging vs production
- Enable branch protection on main branch
- Use environment-specific database URLs
- Rotate secrets regularly

❌ **DON'T:**
- Commit `.env` files to git
- Hardcode API keys or passwords
- Deploy from local machines (use GitHub CI/CD)
- Share environment variables via Slack/email

---

## Post-Deployment Verification

After deploy, verify:

```bash
# Frontend
- [ ] https://yourdomain.com loads correctly
- [ ] All assets load (CSS, JS, images)
- [ ] Links navigate properly
- [ ] Mobile responsive works

# Backend
- [ ] https://api.yourdomain.com/health returns 200
- [ ] Database queries work
- [ ] CORS allows frontend domain
- [ ] Environment variables are set

# Integration
- [ ] Frontend can call backend API
- [ ] No CORS errors in browser console
- [ ] No 401/403 auth errors
- [ ] Data displays correctly
```

---

## Cost Considerations

**Vercel Pricing (as of 2024):**
- **Hobby** (Free): Great for personal projects
  - 100GB bandwidth/month
  - No SLA guarantees
  - Function timeout: 10 seconds
  
- **Pro** ($20/month): Recommended for production
  - 1TB bandwidth/month
  - Priority support
  - Function timeout: 900 seconds
  - serverless function execution

- **Enterprise**: Custom pricing

Choose **Pro** if you have:
- Database operations that take >10 seconds
- High traffic expectations
- Production monitoring needs

---

## Quick Reference Commands

```bash
# Local testing
pnpm run build                    # Full build
pnpm run build --filter=@workspace/resume-landing  # Frontend only
pnpm run build --filter=@workspace/api-server      # Backend only
pnpm run dev --filter=@workspace/resume-landing    # Dev frontend
pnpm run dev --filter=@workspace/api-server        # Dev backend

# Check build output
du -sh artifacts/resume-landing/dist
du -sh artifacts/api-server/dist

# Check for type errors
pnpm run typecheck
```

---

## Support & Resources

- [Vercel Docs](https://vercel.com/docs)
- [Vercel for Node.js](https://vercel.com/docs/functions/nodejs/quickstart)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [pnpm with Vercel](https://pnpm.io/deployments/vercel)
- [GitHub Issues](https://github.com/vercel/vercel/issues)

---

**Last Updated:** April 2026
**Deployment Ready:** ✅ Yes - Configuration Complete
