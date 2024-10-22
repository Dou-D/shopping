import { Tabs, Tab } from "@nextui-org/tabs";
import { MyTabsType } from "./types";
import { Card, CardBody } from "@nextui-org/react";

export const MyTabs: React.FC<{ tabs: MyTabsType[] }> = ({ tabs }) => {
  return (
    <Tabs aria-label="Dynamic tabs" items={tabs}>
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
