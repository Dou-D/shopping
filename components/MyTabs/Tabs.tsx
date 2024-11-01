import { Tabs, Tab } from "@nextui-org/tabs";
import { MyTabsProps } from "./types";
import { Card, CardBody } from "@nextui-org/react";
import { ThemeKey } from "../ThemeSwitcher/types";
import { Key } from "react";

export const MyTabs: React.FC<MyTabsProps> = ({ tabs, handleChange }) => {
  return (
    <Tabs aria-label="Dynamic tabs" items={tabs} onSelectionChange={(key: Key) => handleChange(key)}>
      {(item) => (
        <Tab key={item.id} title={item.title}>
          {item.content && (
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          )}
        </Tab>
      )}
    </Tabs>
  );
};
