const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      description: "A brief one-line description for cards and previews.",
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "text",
      rows: 5,
    },
    {
      name: "icon",
      title: "Icon Name",
      type: "string",
      description:
        'Icon identifier (e.g., "crystal-ball", "sun", "crystal", "magic", "yin-yang")',
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
};

export default service;
