# content-mapper

A Contentful custom app that allows content creators to map content from different content types.

## Features

- **Content Type Selection**: Pull contents from any content-type via a dropdown menu
- **Field Mapping**: Select specific fields to map from the source content to your target content model
- **Easy Integration**: Seamlessly integrates with Contentful's UI

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Building

Build the production version:
```bash
npm run build
```

## Setting Up in Contentful

1. Go to your Contentful space
2. Navigate to **Apps** > **Custom apps** > **Create app**
3. Configure the app:
   - Name: Content Mapper
   - Frontend URL: `http://localhost:3000` (for development) or your deployed URL
   - Locations: Enable "App configuration" and "Page"
4. Install the app in your space
5. The app will be available in the "Apps" section of your Contentful space

## Usage

1. Open the Content Mapper from the Apps menu in Contentful
2. Select a source content type from the dropdown
3. Choose an entry from the selected content type
4. Select the fields you want to map
5. Click "Map Selected Fields" to prepare the mapping

## Technology Stack

- React 18
- Contentful App SDK
- Contentful Forma 36 Components
- Vite

## License

ISC

