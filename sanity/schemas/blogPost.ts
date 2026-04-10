const blogPost = {
  name: "blogPost",
  title: "Blog Post",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A brief summary for blog listing cards.",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Tarot", value: "Tarot" },
          { title: "Numerology", value: "Numerology" },
          { title: "Crystal Healing", value: "Crystal Healing" },
          { title: "Energy Healing", value: "Energy Healing" },
          { title: "Yantra", value: "Yantra" },
          { title: "Spirituality", value: "Spirituality" },
        ],
      },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: 'e.g., "5 min read"',
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};

export default blogPost;
