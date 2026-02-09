# Content Mapper - Features & Usage

## Overview

The Content Mapper is a Contentful custom app that simplifies the process of mapping content from one content type to another within your Contentful space.

## Key Features

### 1. Content Type Selection
- Browse all available content types in your Contentful space
- Easy-to-use dropdown menu for quick selection
- Real-time loading of content types from your space

### 2. Entry Selection
- View all entries for the selected content type
- Entries are displayed with their title or name for easy identification
- Support for up to 100 entries per content type

### 3. Field Mapping Interface
- Visual representation of all fields in the selected entry
- Checkbox selection for choosing which fields to map
- Preview of field values and types
- All fields are pre-selected by default for convenience

### 4. Smart Field Preview
- See the field type (string, number, object, etc.)
- Preview the first 50 characters of field content
- Proper handling of null/undefined values
- JSON preview for complex object fields

## User Workflow

### Step 1: Access the App
1. Log into your Contentful space
2. Navigate to the "Apps" menu
3. Click on "Content Mapper"

### Step 2: Select Source Content
1. Choose a content type from the "Select Content Type" dropdown
2. Wait for the entries to load
3. Select a specific entry from the "Select Entry" dropdown

### Step 3: Map Fields
1. Review the list of available fields
2. Check/uncheck fields based on your mapping needs
3. See previews of field content and types
4. Click "Map Selected Fields" to prepare the mapping

### Step 4: Complete the Mapping
The app will confirm which fields are ready for mapping. In a production implementation, this would trigger:
- Field value extraction from source entry
- Field mapping to target content model
- Data transformation if needed
- Creation or update of target entries

## Technical Details

### Supported Field Types
- Text fields (short and long)
- Number fields
- Boolean fields
- Date/DateTime fields
- Location fields
- Media (assets)
- References (entries and assets)
- JSON objects
- Arrays

### Limitations
- Maximum 100 entries loaded per content type
- Field preview limited to 50 characters
- Shows all entries (both published and draft)

## Configuration

The app can be configured through the Configuration screen:
- Accessible during app installation
- No parameters required for basic usage
- Ready to use out of the box

## Best Practices

1. **Start with a Test Space**: Test the app in a development space before using in production
2. **Review Field Selection**: Always review which fields you're mapping before confirming
3. **Check Field Types**: Ensure source and target field types are compatible
4. **Use Descriptive Entry Titles**: Make entry selection easier by using clear titles/names

## Future Enhancements

Potential features for future versions:
- Direct mapping to target content types
- Batch processing of multiple entries
- Field transformation rules
- Mapping templates/presets
- Export/import of mapping configurations
- Support for draft entries
- Field type validation
- Custom field mapping logic

## Troubleshooting

### No content types showing
- Verify you have content types in your space
- Check that the app has proper permissions

### No entries appearing
- Ensure the content type has published entries
- Check that entries contain data

### Fields not displaying
- Verify entries have fields with content
- Check for proper locale configuration

## Support

For bug reports or feature requests, please visit the GitHub repository.
