const hero = {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "highlightText",
      title: "Highlight Text",
      type: "string",
      description: "The gold-highlighted text in the heading.",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    },
    {
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    },
    {
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
    },
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    },
  ],
};

export default hero;
