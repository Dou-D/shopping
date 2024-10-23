import { Tabs, Tab } from "@nextui-org/tabs";
import { MyTabsProps, MyTabsType } from "./types";
import { Card, CardBody } from "@nextui-org/react";

export const MyTabs: React.FC<MyTabsProps> = ({ tabs, handleThemeChange }) => {
  return (
    <Tabs aria-label="Dynamic tabs" items={tabs} onSelectionChange={(key) => handleThemeChange(key)}>
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
