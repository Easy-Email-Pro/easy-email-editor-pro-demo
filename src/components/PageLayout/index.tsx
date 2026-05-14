import { Layout, Menu } from "@arco-design/web-react";
import {
  Home,
  BellElectric,
  Blocks,
  Rocket,
  BookOpen,
  Mail,
  MonitorPlay,
  BookMarked,
} from "lucide-react";
import "@arco-design/web-react/dist/css/arco.css";
import React from "react";
import "@arco-themes/react-easy-email-pro/css/arco.css";
import Logo from "./easy-email-pro.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Space } from "@arco-design/web-react";
import { pushEvent } from "@/utils/pushEvent";

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;

const menuItems = [
  {
    key: "features",
    label: "Features",
    icon: <Home size={18} />,
    path: "/",
  },
  {
    key: "templates",
    label: "Templates",
    icon: <Mail size={18} />,
    path: "/templates",
  },
  {
    key: "components",
    label: "Components",
    icon: <Blocks size={18} />,
    path: "/components",
  },
  {
    key: "start-trial",
    label: "Start Trial",
    icon: <Rocket size={18} />,
    path: "https://www.easyemail.pro/?#trial?utm_source=demo",
    target: "_blank",
  },
  {
    key: "docs",
    label: "Docs",
    icon: <BookOpen size={18} />,
    path: "https://docs.easyemail.pro/docs/intro/?utm_souce=demo",
    target: "_blank",
  },
  {
    key: "write-email",
    label: "SaSS demo",
    icon: <BookMarked size={18} />,
    path: "https://admin.easyemail.pro/?utm_souce=demo",
    target: "_blank",
  },
];

export function PageLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 根据当前路径获取选中的菜单项
  const getSelectedKey = () => {
    const path = location.pathname;
    const item = menuItems.find((item) => item.path === path);
    return item ? item.key : "features";
  };

  const LogoCom = Logo as any;

  return (
    <div className="" style={{ fontSize: 0 }}>
      <div className=" header border-solid border-b border-b-slate-200 w-full">
        <div className="px-10 m-auto py-5 flex justify-between">
          <h1 className="flex">
            <a href="https://www.easyemail.pro/">
              <LogoCom className="logo" height={36} width={175} />
            </a>
          </h1>
        </div>
      </div>
      <Layout style={{ height: "calc(100vh - 80px)" }}>
        <Sider
          style={{
            width: 200,
            background: "#fff",
            borderRight: "1px solid #eee",
          }}
        >
          <Menu
            selectedKeys={[getSelectedKey()]}
            style={{ width: "100%" }}
            onClickMenuItem={(key) => {
              const item = menuItems.find((item) => item.key === key);
              if (item) {
                if (item.target) {
                  pushEvent({
                    event: "page_menu_item_click",
                    payload: {
                      key,
                      label: item.label,
                    },
                  });
                  setTimeout(() => {
                    window.open(item.path, item.target);
                  }, 100);
                } else {
                  pushEvent({
                    event: "page_menu_item_click",
                    payload: {
                      key,
                      label: item.label,
                    },
                  });
                  setTimeout(() => {
                    navigate(item.path);
                  }, 100);
                }
              }
            }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.key}>
                <Space align="center">
                  <div style={{ height: 18, lineHeight: 1 }}>{item.icon}</div>{" "}
                  {item.label}
                </Space>
              </MenuItem>
            ))}
          </Menu>
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </div>
  );
}
