# Assets for Task 2 Integration Section

## Instructions for Replacing Placeholders

The current implementation uses placeholder text and emojis for logos. Replace these with actual assets from the Figma file:

### App Marketplace Logos
Replace the placeholder divs in `components/IntegrationDiagram.js` (lines 36-47) with actual Image components:

```jsx
// Replace:
<div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded flex items-center justify-center">
  <span className="text-gray-400 text-xs">SF</span>
</div>

// With:
<Image 
  src="/assets/salesforce-logo.png" 
  alt="Salesforce" 
  width={48} 
  height={48}
  className="w-10 h-10 md:w-12 md:h-12"
/>
```

### Required Logos:
1. Salesforce (salesforce-logo.png)
2. NetSuite (netsuite-logo.png) 
3. SAP (sap-logo.png)
4. Adobe (adobe-logo.png)
5. Snowflake (snowflake-logo.png)

### Image Specifications:
- Format: PNG with transparent background
- Size: 48x48px minimum
- Style: White or light-colored logos for dark background

### Storage Location:
Place all logo files in this `/public/assets/` directory.
