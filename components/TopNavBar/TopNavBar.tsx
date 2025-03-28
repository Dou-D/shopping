import {
  Button,
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
import { SelectDataType } from "@/components/MySelect/types";

const selectType: SelectDataType[] = [
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
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="w-full">
        <NavbarItem className="w-full">
          <form>
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] lg:max-w-[100rem]",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500",
              }}
              placeholder="Type to search..."
              size="md"
              startContent={
                <MySelect
                  options={selectType}
                  defaultSelectedKey={[selectType[0].key]}
                  size="sm"
                />
              }
              endContent={
                <Button type="submit">
                  <MyIcon icon={faSearch} />
                </Button>
              }
              type="search"
            />
          </form>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
