import { AcmeLogo } from "@/components/NavBar/AcmeLogo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import MyIcon from "@/components/MyIcons";
import Link from "next/link";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="w-full">
        <div className="w-full">
          <Navbar className="w-full flex justify-around">
            <NavbarBrand>
              <Link href="/">
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
              </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
              <NavbarItem>
                <div>网站无障碍</div>
                <div>
                  <MyIcon icon={faMessage} />
                  <span>&quot;登录页面&quot;改进建议</span>
                </div>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <main>{children}</main>
        </div>
      </section>
    </>
  );
}
