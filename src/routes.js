// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.jsx";
import Profile from "./views/Profiles/Profile.jsx";
import TeacherKids from "./views/Dashboard/KidsList.jsx";
import AppsListing from "./views/AppsListing/AppsListing";
//import TableList from "./views/TableList/TableList.jsx";
//import Icons from "./views/Icons/Icons.jsx";

const adminRoutes = [
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/kids",
    name: "kids",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path : "/apps",
    name : "APPS",
    icon: Dashboard,
    component :AppsListing,
    layout : "/admin"
  }
];

const teacherRoutes = [
  {
    path : "/user",
    name : "Profile",
    icon : Person,
    component :Profile,
    layout : "/teacher"
  },
  {
    path: "/kids",
    name: "kids",
    icon: Dashboard,
    component: TeacherKids,
    layout: "/teacher"
  },
  {
    path : "/apps",
    name : "APPS",
    component :AppsListing,
    icon: Dashboard,
    layout : "/teacher"
  }
];

const parentRoutes = [
  {
    path : "/user",
    name : "Profile",
    icon : Person,
    component :Profile,
    layout : "/parent"
  },
  {
    path: "/kids",
    name: "kids",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/parent"
  },
  {
    path : "/apps",
    name : "APPS",
    icon: Dashboard,
    component :AppsListing,
    layout : "/parent"
  }
];
export {
  adminRoutes,
  teacherRoutes,
  parentRoutes
};
