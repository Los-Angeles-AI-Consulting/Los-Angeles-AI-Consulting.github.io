# AWS Deployment Guide for Los Angeles AI Consulting Website

## Project Overview
This is a full-stack React + Express.js application with PostgreSQL database, ready for AWS deployment.

## Recommended AWS Services

### Option 1: AWS Amplify (Easiest)
**Best for**: Full-stack applications with minimal DevOps overhead

**Services needed**:
- AWS Amplify (hosting + CI/CD)
- Amazon RDS PostgreSQL (database)
- Amazon SES (email service)

**Steps**:
1. Push code to GitHub repository
2. Connect GitHub repo to AWS Amplify
3. Set up RDS PostgreSQL instance
4. Configure environment variables in Amplify
5. Set up SES for email functionality

### Option 2: AWS Elastic Beanstalk (Balanced)
**Best for**: Traditional application hosting with AWS management

**Services needed**:
- AWS Elastic Beanstalk (application hosting)
- Amazon RDS PostgreSQL (database)
- Amazon SES (email service)
- Amazon S3 (static assets)

### Option 3: Serverless (AWS Lambda)
**Best for**: Cost-effective, auto-scaling applications

**Services needed**:
- AWS Lambda (backend API)
- Amazon S3 + CloudFront (frontend hosting)
- Amazon RDS Serverless (database)
- Amazon SES (email service)

## Environment Variables Required

```env
# Database
DATABASE_URL=postgresql://username:password@your-rds-endpoint:5432/database_name

# Email Configuration (Amazon SES)
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-access-key
SMTP_PASS=your-ses-secret-key
NOTIFICATION_EMAIL=your-notification-email@domain.com

# Application
NODE_ENV=production
PORT=3000
```

## Pre-deployment Checklist

### 1. Database Setup
- ✅ Database schema defined in `shared/schema.ts`
- ✅ DatabaseStorage implementation ready
- ✅ Environment-based storage selection (dev/prod)

### 2. Application Configuration
- ✅ Production build scripts in `package.json`
- ✅ Error handling for production
- ✅ Environment variable configuration

### 3. Security
- ✅ Input validation with Zod schemas
- ✅ Proper error handling
- ✅ No sensitive data in client code

## Build Commands

```bash
# Install dependencies
npm install

# Build frontend
npm run build

# Start production server
npm start
```

## Database Migration
Run this command after setting up RDS:
```bash
npm run db:push
```

## Cost Estimates (Monthly)

### AWS Amplify Option
- Amplify hosting: ~$1-5/month
- RDS PostgreSQL (t3.micro): ~$15-20/month
- SES: ~$0.10 per 1000 emails
- **Total**: ~$16-25/month

### Elastic Beanstalk Option
- EB environment: ~$10-15/month
- RDS PostgreSQL: ~$15-20/month
- S3 storage: ~$1-3/month
- **Total**: ~$26-38/month

### Serverless Option
- Lambda: ~$0-5/month (depends on traffic)
- RDS Serverless: ~$10-20/month
- S3 + CloudFront: ~$1-5/month
- **Total**: ~$11-30/month

## Next Steps

1. **Choose deployment option** (recommended: AWS Amplify)
2. **Set up AWS account** and required services
3. **Create GitHub repository** with this code
4. **Configure environment variables** in AWS
5. **Set up database** and run migrations
6. **Configure SES** for email functionality
7. **Deploy and test**

## Support Files Created
- `server/db.ts` - Database connection configuration
- Updated `server/storage.ts` - Production database storage
- This deployment guide

The application is now ready for AWS deployment with proper database integration and production configurations.