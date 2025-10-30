// ./schemas/project.js
export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "object",
          name: "mediaItem",
          title: "Media Item",
          fields: [
            {
              name: "mediaType",
              title: "Media Type",
              type: "string",
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "Video", value: "video" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              hidden: ({ parent }) => parent?.mediaType !== "image",
            },
            {
              name: "video",
              title: "Video File",
              type: "file",
              options: {
                accept: "video/*",
              },
              hidden: ({ parent }) => parent?.mediaType !== "video",
            },
            {
              name: "videoUrl",
              title: "Video URL (YouTube/Vimeo)",
              type: "url",
              hidden: ({ parent }) => parent?.mediaType !== "video",
            },
            {
              name: "thumbnail",
              title: "Video Thumbnail",
              type: "image",
              hidden: ({ parent }) => parent?.mediaType !== "video",
            },
          ],
          preview: {
            select: {
              mediaType: "mediaType",
              image: "image",
              thumbnail: "thumbnail",
            },
            prepare({ mediaType, image, thumbnail }) {
              return {
                title: mediaType === "image" ? "Image" : "Video",
                media: mediaType === "image" ? image : thumbnail,
              };
            },
          },
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Residential", value: "residential" },
          { title: "Commercial", value: "commercial" },
          { title: "Office", value: "office" },
          { title: "Restaurant", value: "restaurant" },
          { title: "Hotel", value: "hotel" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "area",
      title: "Area (sq ft)",
      type: "number",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      category: "category",
    },
    prepare(selection) {
      const { title, media, category } = selection;
      return {
        title: title,
        subtitle: category,
        media: media,
      };
    },
  },
};
