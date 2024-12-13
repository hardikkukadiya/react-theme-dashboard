import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  CardHeader,
  IconButton,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const Order = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleView = () => setView(!view);
  const handleEdit = () => setEdit(!edit);

  const TABLE_HEAD = [
    {
      head: "Number",
    },
    {
      head: "Customer",
    },
    {
      head: "Amount",
    },
    {
      head: "Issued",
    },
    {
      head: "Payment Date",
    },
    {
      head: "Action",
    },
  ];

  const TABLE_ROWS = [
    {
      number: "#MS-415646",
      customer: "Viking Burrito",
      amount: "$14,000",
      issued: "31 Jan 2024",
      date: "31 Feb 2024",
    },
    {
      number: "#RV-126749",
      customer: "Stone Tech Zone",
      amount: "$3,000",
      issued: "24 Jan 2024",
      date: "24 Feb 2024",
    },
    {
      number: "#QW-103578",
      customer: "Fiber Notion",
      amount: "$20,000",
      issued: "12 Jan 2024",
      date: "12 Feb 2024",
    },
    {
      number: "#MS-415688",
      customer: "Blue Bird",
      amount: "$5,600",
      issued: "10 Jan 2024",
      date: "10 Feb 2024",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-5">
      {loading ? (
        <Card className="h-full w-full overflow-scroll">
          <CardHeader
            floated={false}
            shadow={false}
            className="mb-2 rounded-none p-2 flex justify-end items-end"
          >
            <div className="w-full md:w-96">
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </CardHeader>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>                
                {TABLE_HEAD.map(({ head }) => (
                  <th key={head} className="border-b border-gray-300 p-4">
                    <div className="flex items-center gap-1">                
                      <Typography
                        color="blue-gray"
                        variant="small"
                        className="!font-bold"
                      >
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                      </Typography>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 4 }).map((_, index) => (
                <tr key={index}>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-6"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-6"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-6"></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : (
        <Card className="h-full w-full overflow-scroll">
          <CardHeader
            floated={false}
            shadow={false}
            className="mb-2 rounded-none p-2 flex justify-end items-end"
          >
            <div className="w-full md:w-96">
              <Input
                label="Search Invoice"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </CardHeader>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map(({ head }) => (
                  <th key={head} className="border-b border-gray-300 p-4">
                    <div className="flex items-center gap-1">
                      <Typography
                        color="blue-gray"
                        variant="small"
                        className="!font-bold"
                      >
                        {head}
                      </Typography>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ number, customer, amount, issued, date }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-gray-300";

                  return (
                    <tr key={number}>
                      <td className={classes}>
                        <div className="flex items-center gap-1">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {number}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {customer}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {issued}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton onClick={handleEdit} variant="text">
                            <FaRegEdit color={"#22C55E"} size={18} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="View User">
                          <IconButton onClick={handleView} variant="text">
                            <AiOutlineEye color={"#2377FC"} size={18} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete User">
                          <IconButton onClick={handleOpen} variant="text">
                            <RiDeleteBinLine color={"#FF5200"} size={18} />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      )}      
    </div>            
  );
};

export default Order;
