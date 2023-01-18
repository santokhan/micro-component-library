import SideNav from "../SideNav";
import { TextToLink } from "./functions/TextToLink";
const componentNavs = ["social-media"];

export default function Icon({ status }) {
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
