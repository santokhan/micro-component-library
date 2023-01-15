import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Components from "../views/Components";
import Form from "../views/Form";
import Typography from "../views/Typography";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "components",
    element: <Components></Components>,
    children: [
      { path: "accordion", element: <Components></Components> },
      { path: "alerts", element: <Components></Components> },
      { path: "avatar", element: <Components></Components> },
      { path: "badge", element: <Components></Components> },
      { path: "breadcrumb", element: <Components></Components> },
      { path: "button-group", element: <Components></Components> },
      { path: "buttons", element: <Components></Components> },
      { path: "card", element: <Components></Components> },
      { path: "carousel", element: <Components></Components> },
      { path: "drawer-new", element: <Components></Components> },
      { path: "dropdowns-new", element: <Components></Components> },
      { path: "footer", element: <Components></Components> },
      { path: "forms", element: <Components></Components> },
      { path: "kbd-new", element: <Components></Components> },
      { path: "list-group", element: <Components></Components> },
      { path: "mega-menu-new", element: <Components></Components> },
      { path: "modal", element: <Components></Components> },
      { path: "navbar", element: <Components></Components> },
      { path: "pagination", element: <Components></Components> },
      { path: "popover-new", element: <Components></Components> },
      { path: "progress", element: <Components></Components> },
      { path: "rating", element: <Components></Components> },
      { path: "sidebar", element: <Components></Components> },
      { path: "skeleton-new", element: <Components></Components> },
      { path: "speed-dial-new", element: <Components></Components> },
      { path: "spinner", element: <Components></Components> },
      { path: "tables-new", element: <Components></Components> },
      { path: "tabs", element: <Components></Components> },
      { path: "timeline", element: <Components></Components> },
      { path: "toast", element: <Components></Components> },
      { path: "tooltips", element: <Components></Components> },
      { path: "typography", element: <Components></Components> },
      { path: "video", element: <Components></Components> },
    ],
  },
  {
    path: "form",
    element: <Form></Form>,
    children: [
      { path: "checkbox-new", element: <Form></Form> },
      { path: "file-input", element: <Form></Form> },
      { path: "floating-label", element: <Form></Form> },
      { path: "input-field", element: <Form></Form> },
      { path: "radio-new", element: <Form></Form> },
      { path: "range", element: <Form></Form> },
      { path: "search input", element: <Form></Form> },
      { path: "select", element: <Form></Form> },
      { path: "textarea", element: <Form></Form> },
      { path: "toggle", element: <Form></Form> },
    ],
  },
  {
    path: "typography",
    element: <Typography></Typography>,
    children: [
      { path: "blockquote", element: <Typography></Typography> },
      { path: "hr", element: <Typography></Typography> },
      { path: "headings", element: <Typography></Typography> },
      { path: "images", element: <Typography></Typography> },
      { path: "links", element: <Typography></Typography> },
      { path: "lists", element: <Typography></Typography> },
      { path: "paragraphs", element: <Typography></Typography> },
      { path: "text", element: <Typography></Typography> },
    ],
  },
]);

export default router;
