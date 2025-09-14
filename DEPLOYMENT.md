# Deployment Guide for OfficeBanao Clone

## CORS Issue Resolution

The CORS error you were experiencing has been fixed by:

1. **Backend CORS Configuration** (`backend/server.js`):
   - Added specific origins for Vercel deployment
   - Configured proper headers and methods
   - Added preflight request handling

2. **Frontend API Configuration** (`src/components/PartnerForm.js`):
   - Updated to use environment variables
   - Fallback to localhost for development

## Deployment Steps

### 1. Deploy Backend
You need to deploy your backend to a hosting service that supports Node.js. Some options:
- **Railway**: Easy deployment with automatic HTTPS
- **Render**: Free tier available
- **Heroku**: Popular choice
- **DigitalOcean App Platform**: Good performance

### 2. Set Environment Variables in Vercel
In your Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add: `REACT_APP_API_URL` = `https://your-backend-url.com`

### 3. Test CORS Locally
```bash
# Start your backend
cd backend
npm start

# In another terminal, test CORS
node test-cors.js
```

### 4. Update CORS Origins
If you deploy to a different backend URL, update the `origin` array in `backend/server.js`:
```javascript
origin: [
  'http://localhost:3000',
  'https://officebanao-clone.vercel.app',
  'https://your-new-backend-url.com' // Add your backend URL here
]
```

## Current Configuration

- **Frontend**: Deployed on Vercel
- **Backend**: Currently configured for localhost:5000
- **CORS**: Configured for Vercel domain

## Next Steps

1. Deploy your backend to a hosting service
2. Update the `REACT_APP_API_URL` environment variable in Vercel
3. Update the CORS origins in your backend if needed
4. Test the integration

## Testing

The `test-cors.js` file can help you verify CORS is working correctly before deployment.
