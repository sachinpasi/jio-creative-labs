import { CONSTANTS } from "@/app/constants";
import Icon from "../UI/Icon";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-[68px] shadow-drop fixed z-50 bg-white">
      <div className="container flex items-center h-full justify-between">
        <Link href="/">
          <Icon name={"LOGO_HORIZONTAL"} width={228} height={36} />
        </Link>
        <div className="w-[500px] flex justify-between">
          {CONSTANTS.NAV_LINKS.map((el) => (
            <Link scroll className="text-label " key={el.name} href={el.ref}>
              {el.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
