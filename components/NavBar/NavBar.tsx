import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import MyIcon from "@/components/MyIcons";
import {
  faArrowUpRightFromSquare,
  faMessage,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar: React.FC = () => {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link isBlock href="#" color="foreground">
            前往企业版
            <MyIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isBlock href="#" color="foreground">
            我的购物车
            <MyIcon icon={faShoppingCart} />
          </Link>
          <Link aria-current></Link>
        </NavbarItem>
        <NavbarItem>
          <Link isBlock color="foreground" href="#">
            消息
            <MyIcon icon={faMessage} />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="justify-start">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">你好，请登录</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
