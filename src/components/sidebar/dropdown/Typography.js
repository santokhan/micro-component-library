import SideNav from "../SideNav";
import { TextToLink } from "./functions/TextToLink";

const typographyNavs = [
  "blockquote",
  "hr",
  "headings",
  "images",
  "links",
  "lists",
  "paragraphs",
  "text",
];

export default function Typography({ status }) {
  if (status) {
    return (
      <ul className="space-y-2 ml-4">
        {typographyNavs.map((e, i) => {
          const to = TextToLink(e);
          return (
            <SideNav to={"/typography/" + to} key={i}>
              <span className="flex-1 ml-3 whitespace-nowrap">{e}</span>
            </SideNav>
          );
        })}
      </ul>
    );
  }
}
