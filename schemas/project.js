import { GoPackage as icon } from "react-icons/go";

export default {
  // Computer Name
  name: "project",
  // Visible Title
  title: "Projects",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name of Project",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Tell us a bit about this project"
    },
    {
      name: "image",
      title: "Image of the project",
      type: "image",
      options: {
        // Allows you to hotspot the important info for different sizes
        hotspot: true
      }
    },
    {
      name: "altText",
      title: "Image Alt",
      type: "string",
      description: "Create descriptive alt text for the project image"
    },
    {
      title: "Project URL",
      name: "projectUrl",
      type: "url"
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projectType" }] }]
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }
  ],
  preview: {
    select: {
      title: "name"
    }
  }
};
