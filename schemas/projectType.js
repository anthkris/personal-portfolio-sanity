export default {
  // Computer Name; singular and lower case
  name: "projectType",
  // Visible Title
  title: "Project Type",
  type: "document",
  fields: [
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      description: "What type of project is this?"
    }
  ],
  preview: {
    select: {
      title: "projectType"
    }
  }
};
