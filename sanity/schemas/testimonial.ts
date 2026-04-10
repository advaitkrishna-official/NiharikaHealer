const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
        Rule.required().min(1).max(5),
    },
    {
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "image",
      title: "Client Photo",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default testimonial;
