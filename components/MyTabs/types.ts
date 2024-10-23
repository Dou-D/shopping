export interface MyTabsType {
    id: string
    title: string
    content?: any
    fn?: Function
}

export interface MyTabsProps {
    tabs: MyTabsType[]
    handleThemeChange: (key: React.Key) => void
}