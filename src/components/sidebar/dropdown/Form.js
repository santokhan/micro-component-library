import SideNav from "../SideNav";
import { TextToLink } from "./functions/TextToLink";
const formNavs = [
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
];
export default function Form({ status }) {
  if (status) {
    return (
      <ul className="space-y-2 ml-4">
        {formNavs.map((e, i) => {
          const to = TextToLink(e);
          return (
            <SideNav to={"/form/" + to} key={i}>
              <span className="flex-1 ml-3 whitespace-nowrap">{e}</span>
            </SideNav>
          );
        })}
      </ul>
    );
  }
}
