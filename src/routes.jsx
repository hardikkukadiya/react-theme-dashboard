import React, { lazy } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { FiShoppingCart } from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import { FaFileArrowUp, FaRegCalendar } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

// Lazy load components
const Home = lazy(() => import("@/pages/dashboard/Home"));
const Profile = lazy(() => import("@/pages/dashboard/Profile"));
const SignIn = lazy(() => import("@/pages/auth/SignIn"));
const SignUp = lazy(() => import("@/pages/auth/SignUp"));
const Order = lazy(() => import("./pages/dashboard/Order"));
const Products = lazy(() => import("./pages/dashboard/Products"));
const Invoice = lazy(() => import("./pages/dashboard/Invoice"));
const TodoList = lazy(() => import("./pages/dashboard/TodoList"));
const Email = lazy(() => import("./pages/dashboard/Email"));
const DashboardDemo = lazy(() => import("./pages/dashboard/DashboardDemo"));
const FileManager = lazy(() => import("./pages/dashboard/FileManager"));
const Calendar = lazy(() => import("./pages/dashboard/Calendar"));
const ChatBox = lazy(() => import("./pages/dashboard/ChatBox"));
const Faq = lazy(() => import("./pages/dashboard/Faq"));
const ProductsDemo = lazy(() => import("./pages/dashboard/ProductsDemo"));

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard Demo",
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
        name: "Todo",
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
        name: "Products Demo",
        path: "/productsDemo",
        element: <ProductsDemo />,
      },
      {
        icon: <FiShoppingCart {...icon} />,
        name: "Order",
        path: "/order",
        element: <Order />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <FaQuestionCircle {...icon} />,
        name: "FAQ",
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
  {
    title: "Auth Pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Sign In",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Sign Up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
