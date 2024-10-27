import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import MyIcon from "@/components/MyIcons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const NavBar: React.FC = () => {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link isBlock showAnchorIcon href="#" color="foreground">
            前往企业版
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isBlock href="#" color="foreground">
            我的购物车
            <MyIcon icon={faShoppingCart} color="#ff5000" />
          </Link>
          <Link aria-current></Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="justify-start">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
