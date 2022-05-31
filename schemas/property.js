export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Timber', value: 'timber' },
          { title: 'Water Front', value: 'water front' },
          { title: 'Field', value: 'field' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'propertyImage' }],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'acres',
      title: 'Acres',
      type: 'number',
    },
   
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'host',
      title: 'host',
      type: 'host',
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'review' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
    },
  },
}
