const navs = {
  components: [
    "accordion",
    "alerts",
    "avatar",
    "badge",
    "breadcrumb",
    "button group",
    "buttons",
    "card",
    "carousel",
    "drawer new",
    "dropdowns new",
    "footer",
    "forms",
    "kbd new",
    "list group",
    "mega menu new",
    "modal",
    "navbar",
    "pagination",
    "popover new",
    "progress",
    "rating",
    "sidebar",
    "skeleton new",
    "speed dial new",
    "spinner",
    "tables new",
    "tabs",
    "timeline",
    "toast",
    "tooltips",
    "typography",
    "video",
  ],
  forms: [
    "checkbox new",
    "file input",
    "floating labe",
    "input field",
    "radio new",
    "range",
    "search input",
    "select",
    "textarea",
    "toggle",
  ],
  typography: [
    "blockquote",
    "hr",
    "headings",
    "images",
    "links",
    "lists",
    "paragraphs",
    "text",
  ],
};

const modules = {
  generateRoutes(params) {
    const data = params.map((e) => {
      return { path: e, element: "" };
    });
    console.log(data);
  },

  sorting(params) {
    const data = params.sort().map((e) => e.toLowerCase());
    console.log(data);
  },
  createDirectory(params) {
    params.forEach((e) => {
      console.log("mkdir ", e.replace(/ /g, "-"));
    });
  },
};

modules.createDirectory(navs.components);
