import SideNav from "../SideNav";
import { TextToLink } from "./functions/TextToLink";
const componentNavs = [
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
];

export default function ComponentDropdown({ status }) {
  if (status) {
    return (
      <ul className="space-y-2 ml-4">
        {componentNavs.map((e, i) => {
          const to = TextToLink(e);
          return (
            <SideNav to={"/components/" + to} key={i}>
              <span className="flex-1 ml-3 whitespace-nowrap">{e}</span>
            </SideNav>
          );
        })}
      </ul>
    );
  }
}
