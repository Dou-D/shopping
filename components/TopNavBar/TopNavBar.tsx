import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Logo from "@/components/Logo";
import MySelect from "@/components/MySelect";
import MyIcon from "@/components/MyIcons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MySelectTypes } from "@/components/MySelect/types";

const selectType: MySelectTypes[] = [
  {
    key: "1",
    label: "宝贝",
  },
  {
    key: "2",
    label: "店铺",
  },
  {
    key: "3",
    label: "天猫",
  },
];
export const TopNavBar: React.FC = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <form>
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] lg:max-w-[100rem]",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="md"
              startContent={<MySelect options={selectType} />}
              endContent={<MyIcon icon={faSearch} />}
              type="search"
            />
          </form>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
