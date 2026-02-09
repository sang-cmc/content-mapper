# Deployment Guide

## Prerequisites

- A Contentful account with space access
- Node.js (v16 or higher)
- npm or yarn

## Step 1: Build the Application

```bash
npm install
npm run build
```

This will create a `build` directory with the compiled application.

## Step 2: Host the Application

You can host the application on any static hosting service:

### Option A: Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy

### Option B: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Option C: GitHub Pages
1. Add to package.json scripts: `"deploy": "npm run build && gh-pages -d build"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Run: `npm run deploy`

### Option D: Contentful App Hosting (Recommended)
If you have access to Contentful App Hosting, you can deploy directly to Contentful:

1. Install Contentful CLI:
   ```bash
   npm install -g contentful-cli
   ```

2. Authenticate:
   ```bash
   contentful login
   ```

3. Create an app definition:
   ```bash
   contentful app create --name "Content Mapper"
   ```

4. Upload your app:
   ```bash
   npm run build
   contentful app upload --bundle-dir ./build
   ```

## Step 3: Configure in Contentful

1. Log into your Contentful space
2. Navigate to **Settings** > **Apps** > **Custom apps**
3. Click **Create app**
4. Fill in the details:
   - **Name**: Content Mapper
   - **Frontend URL**: Your deployed application URL (e.g., `https://your-app.netlify.app`)
   - **Locations**: Select "App configuration" and "Page"
5. Click **Save**

## Step 4: Install the App

1. In your Contentful space, go to **Apps**
2. Find "Content Mapper" in the available apps
3. Click **Install**
4. Configure the app if needed
5. The app will now be available under the "Apps" menu in your space

## Step 5: Using the App

1. Navigate to **Apps** > **Content Mapper** in your Contentful space
2. Select a content type from the dropdown
3. Choose an entry
4. Select the fields you want to map
5. Click "Map Selected Fields"

## Troubleshooting

### App doesn't load
- Check that your frontend URL is correct and accessible
- Ensure your build completed successfully
- Check browser console for errors

### Can't fetch content types
- Verify that the app has the necessary permissions in Contentful
- Check that you're logged into the correct space

### Content not appearing
- Ensure the content type has published entries
- Check that entries have content in fields

## Security Considerations

- The app uses the Contentful App SDK which handles authentication
- No credentials need to be stored in the app
- All API calls are authenticated through Contentful's session

## Support

For issues or questions, please open an issue on the GitHub repository.
