// sanity/schemaTypes/siteSettings.js
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'visitorCount',
      title: 'Visitor Count',
      type: 'number',
      initialValue: 0,
    },
  ],
}