import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import {FiShoppingCart} from "react-icons/fi"  
import { Home, Profile} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Order from "./pages/dashboard/Order";
import Products from "./pages/dashboard/Products";
import Invoice from "./pages/dashboard/Invoice";
import TodoList from "./pages/dashboard/TodoList";
import { LuListTodo } from "react-icons/lu";
import { FaFileArrowUp, FaRegCalendar } from "react-icons/fa6";
import Email from "./pages/dashboard/Email";
import DashboardDemo from "./pages/dashboard/DashboardDemo";
import FileManager from "./pages/dashboard/FileManager";
import Calendar from "./pages/dashboard/Calendar";
import ChatBox from "./pages/dashboard/ChatBox";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Faq from "./pages/dashboard/Faq";
import { FaQuestionCircle } from "react-icons/fa";
import ProductsDemo from "./pages/dashboard/ProductsDemo";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard demo",
        path: "/dashboardDemo",
        element: <DashboardDemo />,
      },     
       {
        icon: <FiShoppingCart {...icon} />,
        name: "Invoice",
        path: "/invoice",
        element: <Invoice />,
      },
          {
        icon: <LuListTodo {...icon} />,
        name: "todo",
        path: "/todo",
        element: <TodoList />,
      },
       {
        icon: <TableCellsIcon {...icon} />,
        name: "Email",
        path: "/email",
        element: <Email />,
      },
       {
        icon: <FaFileArrowUp {...icon} />,
        name: "File Manager",
        path: "/fileManager",
        element: <FileManager />,
      },
       {
         icon: <IoChatbubbleEllipsesOutline {...icon} />,
        name: "Chat Box",
        path: "/chatBox",
        element: <ChatBox />,
      },
       {
        icon: <FaRegCalendar {...icon} />,
        name: "Calendar",
        path: "/calendar",
        element: <Calendar />,
      },      
        {
        icon: <FiShoppingCart {...icon} />,
        name: "Products",
        path: "/products",
        element: <Products />,
      },
        {
        icon: <FiShoppingCart {...icon} />,
        name: "ProductsDemo",
        path: "/productsDemo",
        element: <ProductsDemo />,
      },
      {
        icon: <FiShoppingCart {...icon} />,
        name: "order",
        path: "/order",
        element: <Order />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },   
      {
        icon: <FaQuestionCircle {...icon} />,
        name: "faq",
        path: "/faq",
        element: <Faq />,
      },                          
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;