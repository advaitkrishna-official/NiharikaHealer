const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "price",
      title: "Price (INR)",
      type: "number",
      validation: (Rule: { required: () => { min: (n: number) => unknown } }) =>
        Rule.required().min(0),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Reports", value: "Reports" },
          { title: "Readings", value: "Readings" },
          { title: "Crystals", value: "Crystals" },
          { title: "Learning", value: "Learning" },
          { title: "Remedies", value: "Remedies" },
        ],
      },
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
      description:
        'Optional badge text (e.g., "Bestseller", "Popular", "Premium")',
    },
    {
      name: "image",
      title: "Product Image",
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

export default product;
