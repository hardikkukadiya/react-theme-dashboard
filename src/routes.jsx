import React, { lazy } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { TbReportSearch } from "react-icons/tb";
import {FiShoppingCart} from "react-icons/fi"  
import { LuListTodo } from "react-icons/lu";
import { FaFileArrowUp, FaRegCalendar } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
const Home = lazy(() => import("./pages/dashboard/home"));
const Profile = lazy(() => import("./pages/dashboard/profile"));
const SignIn = lazy(() => import("./pages/auth/sign-in"));
const SignUp = lazy(() => import("./pages/auth/sign-up"));
const Order = lazy(() => import("./pages/dashboard/Order"));
const Products = lazy(() => import("./pages/dashboard/Products"));
const Invoice = lazy(() => import("./pages/dashboard/Invoice"));
const TodoList = lazy(() => import("./pages/dashboard/TodoList"));
const Email = lazy(() => import("./pages/dashboard/Email"));
const Report = lazy(() => import("./pages/dashboard/Report"));
const FileManager = lazy(() => import("./pages/dashboard/FileManager"));
const Calendar = lazy(() => import("./pages/dashboard/Calendar"));
const ChatBox = lazy(() => import("./pages/dashboard/ChatBox"));
const Faq = lazy(() => import("./pages/dashboard/Faq"));
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
        icon: <TbReportSearch {...icon} />,
        name: "Report",
        path: "/report",
        element: <Report />,
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
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/auth/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;