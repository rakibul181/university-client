import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import { adminPath } from "../../routes/admin.route";
import { facultyPath } from "../../routes/faculty.route";
import { studentPath } from "../../routes/student.route";
const { Sider } = Layout;

const Sidebar = () => {
    const role = 'admin'
let sidebarItems

const userRole = {
    ADMIN:'admin',
    FACULTY:'faculty',
    STUDENT:'student'
}

switch (role) {
    case userRole.ADMIN:
        sidebarItems = sidebarItemsGenerator(adminPath, userRole.ADMIN)
        break;
    case userRole.FACULTY:
        sidebarItems = sidebarItemsGenerator(facultyPath, userRole.FACULTY)
        break;
    case userRole.STUDENT:
        sidebarItems = sidebarItemsGenerator(studentPath, userRole.STUDENT)
        break;
}

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
       
       
    >
      <div>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          PH Uni
        </h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
