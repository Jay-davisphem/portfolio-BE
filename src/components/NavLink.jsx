import { Link } from "react-router-dom";

import StyledButton from "./StyledButton";
function NavLink({ name, sty }) {
  const stripIt = (name) => {
    name = name.toLowerCase();
    if (name.split(" ").length > 1) {
      name = name.replace(name.substr(name.indexOf(" ")), "");
      console.log(name);
      return name;
    }
    return name;
  };
  return (
    <li className={sty}>
      <Link to={`/${stripIt(name)}`}>
        <StyledButton name={name} />
      </Link>
    </li>
  );
}
export default NavLink;
