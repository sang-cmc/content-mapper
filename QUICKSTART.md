# Content Mapper - Quick Start Guide

## What You Get

The Content Mapper app provides a clean, intuitive interface within Contentful for mapping content between different content types.

## Main Interface Components

### 1. Content Type Selector
```
┌─────────────────────────────────────────────┐
│ Select Content Type                         │
│ ┌─────────────────────────────────────────┐ │
│ │ -- Select a content type --          ▼ │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```
- Dropdown showing all available content types in your space
- Automatically loads when app opens

### 2. Entry Selector
```
┌─────────────────────────────────────────────┐
│ Select Entry                                │
│ ┌─────────────────────────────────────────┐ │
│ │ -- Select an entry --                ▼ │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```
- Appears after selecting a content type
- Shows entry title/name and ID for easy identification
- Loads up to 100 entries

### 3. Field Mapping Interface
```
┌───────────────────────────────────────────────────────────┐
│  Select Fields to Map                                     │
│                                                           │
│  ☑ title                                                  │
│     Type: string | Preview: My Article Title             │
│  ─────────────────────────────────────────────────────── │
│  ☑ description                                            │
│     Type: string | Preview: This is a description...     │
│  ─────────────────────────────────────────────────────── │
│  ☑ publishDate                                            │
│     Type: string | Preview: 2024-02-09T10:00:00.000Z    │
│  ─────────────────────────────────────────────────────── │
│  ☐ tags                                                   │
│     Type: object | Preview: {"en-US":["tech","news"]}... │
│  ─────────────────────────────────────────────────────── │
│                                                           │
│  [ Map Selected Fields ]                                  │
└───────────────────────────────────────────────────────────┘
```
- Checkbox for each field in the entry
- Shows field name, type, and preview of content
- All fields selected by default
- Button enabled when at least one field is selected

## User Flow

```
Step 1: Open App
    ↓
Step 2: Select Content Type
    ↓ (Loads entries)
Step 3: Select Entry
    ↓ (Displays fields)
Step 4: Review & Select Fields
    ↓
Step 5: Click "Map Selected Fields"
    ↓
Step 6: See Success Message
```

## Success Feedback

When you map fields, you'll see:
```
┌───────────────────────────────────────────────────────────┐
│ ✓ Successfully prepared 3 field(s) for mapping:          │
│   title, description, publishDate                         │
└───────────────────────────────────────────────────────────┘
```

## Error Handling

The app provides clear error messages:
```
┌───────────────────────────────────────────────────────────┐
│ ⚠ Failed to fetch content types: [error details]         │
└───────────────────────────────────────────────────────────┘
```

## Configuration Screen

The app configuration screen shows:
```
┌───────────────────────────────────────────────────────────┐
│  Content Mapper Configuration                             │
│                                                           │
│  This app allows you to map content from one content      │
│  type to another.                                         │
│                                                           │
│  The Content Mapper app will be available in the          │
│  "Apps" section. Once configured, you can use it to:      │
│                                                           │
│  • Select a source content type from a dropdown           │
│  • Choose specific fields to map from the source          │
│  • Map those fields to your target content model          │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

## Key Features At a Glance

✅ **Easy Navigation**: Clean, step-by-step workflow
✅ **Visual Feedback**: Preview field content before mapping
✅ **Flexible Selection**: Choose exactly which fields to map
✅ **Error Handling**: Clear messages if something goes wrong
✅ **Contentful Native**: Uses Forma 36 design system for familiar UI
✅ **Fast Loading**: Efficient data fetching with loading states

## Tips for Best Results

1. **Use Descriptive Titles**: Make your entries easy to identify
2. **Review Field Types**: Check that field types match your needs
3. **Start Small**: Test with a few fields before mapping many
4. **Check Previews**: Use the field preview to verify data before mapping

## Next Steps

After setting up the app:
1. Try mapping a simple entry with just 2-3 fields
2. Verify the field selection works as expected
3. Use the app regularly for your content migration needs

---

For detailed deployment instructions, see DEPLOYMENT.md
For technical details and limitations, see FEATURES.md
