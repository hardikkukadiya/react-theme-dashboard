import { useState } from "react";
import { LuUploadCloud } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Pagination from "./Pagination";

const OrderTable = () => {
  const orders = [
    {
      id: "#3066",
      product: {
        name: "Arthur Melo",
        imgSrc: "/img/clothes.png",
      },
      customer: "Brooklyn Zeo",
      date: "12 Jul 2020",
      price: "$64.00",
      status: "pending",
    },
    {
      id: "#3067",
      product: {
        name: "Lisa Smith",
        imgSrc: "/img/clothes.png",
      },
      customer: "John Doe",
      date: "13 Jul 2020",
      price: "$75.00",
      status: "Dispatch",
    },
    {
      id: "#3068",
      product: {
        name: "Mark Johnson",
        imgSrc: "/img/clothes.png",
      },
      customer: "Sarah Connor",
      date: "14 Jul 2020",
      price: "$85.00",
      status: "Completed",
    },
    {
      id: "#3069",
      product: {
        name: "Mark Johnson",
        imgSrc: "/img/clothes.png",
      },
      customer: "Sarah Connor",
      date: "14 Jul 2020",
      price: "$85.00",
      status: "pending",
    },
    {
      id: "#3061",
      product: {
        name: "Mark Johnson",
        imgSrc: "/img/clothes.png",
      },
      customer: "Sarah Connor",
      date: "14 Jul 2020",
      price: "$85.00",
      status: "Completed",
    },
    {
      id: "#3062",
      product: {
        name: "Mark Johnson",
        imgSrc: "/img/clothes.png",
      },
      customer: "Sarah Connor",
      date: "14 Jul 2020",
      price: "$85.00",
      status: "dispatch",
    },
  ];

  const statusOptions = [
    {
      label: "Pending",
      color: "text-pink-600",
      borderColor: "border-pink-600 , hover:bg-pink-600",
    },
    {
      label: "Dispatch",
      color: "text-[#1ABB9C]",
      borderColor: "border-[#1ABB9C] , hover:bg-[#1ABB9C]",
    },
    {
      label: "Completed",
      color: "text-[#2dce89]",
      borderColor: "border-[#2dce89] , hover:bg-[#2dce89]",
    },
  ];
  const [selectedOrders, setSelectedOrders] = useState(new Set()); // To track selected orders

  const handleHeaderCheckboxChange = (e) => {
    if (e.target.checked) {
      // Select all orders
      setSelectedOrders(new Set(orders.map((order) => order.id)));
    } else {
      // Deselect all orders
      setSelectedOrders(new Set());
    }
  };

  const handleCheckboxChange = (orderId) => {
    const updatedSelectedOrders = new Set(selectedOrders);
    if (updatedSelectedOrders.has(orderId)) {
      updatedSelectedOrders.delete(orderId);
    } else {
      updatedSelectedOrders.add(orderId);
    }
    setSelectedOrders(updatedSelectedOrders);
  };

  const isAllSelected = orders.length > 0 && selectedOrders.size === orders.length;
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto mt-5">
          <div className="inline-block min-w-full align-middle">
            <div className="bg-white p-4 rounded-md">
              <span className="text-2xl">Orders Summary</span>
              <hr className="my-4" />
              <div className="overflow-hidden border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="py-3.5 px-4 text-md text-left font-bold dark:text-gray-400">
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            checked={isAllSelected}
                            onChange={handleHeaderCheckboxChange}
                            className="text-blue-500 border-gray-400 rounded dark:bg-gray-900 dark:border-gray-700"
                          />
                          <button className="flex items-center gap-x-2">
                            <span>Order ID</span>
                          </button>
                        </div>
                      </th>
                      {[
                        "Product",
                        "Customer",
                        "Date",
                        "Price",
                        "Status",
                        "Action",
                      ].map((heading) => (
                        <th
                          key={heading}
                          className="px-4 py-3.5 text-md font-bold text-left dark:text-gray-400"
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900">
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700"
                      >
                        <td className="px-3 py-3 text-md font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <div className="flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              checked={selectedOrders.has(order.id)}
                              onChange={() => handleCheckboxChange(order.id)}
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:border-gray-700"
                            />
                            <span className="text-black">{order.id}</span>
                          </div>
                        </td>
                        {/* Product Image and Name */}
                        <td className="px-3 py-3 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <Zoom>
                              <img
                                className="object-cover w-8 h-8 rounded-full flex-shrink-0"
                                src={order.product.imgSrc}
                                loading="lazy"
                                alt={order.product.name}
                              />
                            </Zoom>
                            <h2 className="text-md font-medium dark:text-white truncate max-w-[150px] sm:max-w-none">
                              {order.product.name}
                            </h2>
                          </div>
                        </td>
                        {/* Customer */}
                        <td className="px-3 py-3 text-md dark:text-gray-300 whitespace-nowrap">
                          {order.customer}
                        </td>

                        {/* Date */}
                        <td className="px-3 py-3 text-md dark:text-gray-300 whitespace-nowrap">
                          {order.date}
                        </td>

                        {/* Price */}
                        <td className="px-3 py-3 text-md dark:text-gray-300 whitespace-nowrap">
                          {order.price}
                        </td>

                        {/* Status */}
                        <td className="px-3 py-3 text-md whitespace-nowrap">
                          <span
                            className={`${statusOptions.find(
                              (status) =>
                                status.label.toLowerCase() === order.status.toLowerCase()
                            )?.color
                              } border ${statusOptions.find(
                                (status) =>
                                  status.label.toLowerCase() === order.status.toLowerCase()
                              )?.borderColor
                              } px-4 py-1.5 rounded-2xl hover:text-white capitalize cursor-pointer min-w-[100px] text-center block`}
                          >
                            {order.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="px-3 py-3">
                          <div className="flex justify-center items-center gap-4 cursor-pointer">
                            <RiDeleteBin6Line />
                            <LuUploadCloud />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination/>
    </div>
  );
};

export default OrderTable;
