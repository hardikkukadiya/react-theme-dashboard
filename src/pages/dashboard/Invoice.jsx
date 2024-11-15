import React from "react";
import { FiPrinter } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";

const Invoice = () => {
  return (
    <div className="mt-5 bg-white px-4 py-4 rounded-lg">
      <div>
        <div className="flex justify-end items-end gap-2">
          <ActionButton
            icon={<FiPrinter />}
            label="Print"
            bgColor="bg-[#172b4d]"
            hoverColor="hover:bg-[#183669]"
          />
          <ActionButton
            icon={<IoMdDownload />}
            label="Export as a PDF"
            bgColor="bg-[#f5365c]"
            hoverColor="hover:bg-[#ec7189]"
          />
        </div>
        <hr className="border-blue-gray-200 my-8" />
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-6">
            <img
              src="/img/logo-icon.png"
              loading="lazy"
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mx-auto md:mx-0"
              alt="Company Logo"
            />
          </div>

          <div className="col-span-12 md:col-span-6 text-center md:text-end">
            <h2 className="text-2xl md:text-[32px] text-black">Arboshiki</h2>
            <address className="text-gray-600">
              455 Foggy Heights, AZ 85004, US
              <br />
              (123) 456-789
              <br />
              company@example.com
            </address>
          </div>
        </div>

        <hr className="border-blue-gray-200 my-8" />
        <div className="grid grid-cols-12">
          <div className="col-span-6 text-start">
            <div className="text-gray-800">INVOICE TO:</div>
            <h3 className="text-3xl text-black">John Doe</h3>
            <p className="text-gray-800">
              796 Silver Harbour, TX 79273, US
            </p>
            <p className="text-black">john@example.com</p>
          </div>
          <div className="col-span-6 text-end">
            <div className="text-xl text-black">INVOICE 340</div>
            <p className="text-gray-700">Date of Invoice: 01/10/2018</p>
            <p className="text-gray-700">Due Date: 30/10/2018</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="min-w-full mt-10 mx-auto pb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="border-b-2 border-white text-base md:text-lg">
                    <TableHeader>#</TableHeader>
                    <TableHeader>DESCRIPTION</TableHeader>
                    <TableHeader>HOUR PRICE</TableHeader>
                    <TableHeader>HOURS</TableHeader>
                    <TableHeader>TOTAL</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {invoiceItems.map((item, index) => (
                    <tr className="border-b-2 border-white" key={index}>
                      <TableCell isHeader>{item.id}</TableCell>
                      <TableCell>
                        <div className="text-base md:text-lg text-black">
                          {item.description}
                        </div>
                        <div className="text-gray-600 text-base">{item.details}</div>
                      </TableCell>                      
                      <TableCell>${item.hourPrice}</TableCell>
                      <TableCell>{item.hours}</TableCell>
                      <TableCell className="text-end">${item.total}</TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-12 gap-4 md:gap-0">
                <div className="col-span-12 md:col-span-6 flex items-center justify-center">
                  <p className="text-center text-3xl md:text-4xl text-gray-600">
                    Thank you!
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 text-end">
                  <InvoiceSummary label="SUBTOTAL" value="$5,200.00" />
                  <InvoiceSummary label="TAX 25%" value="$1,300.00" />
                  <InvoiceSummary label="GRAND TOTAL" value="$6,500.00" isBold />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-green-500 p-4 mt-6">
          <p className="text-base text-gray-600">NOTICE:</p>
          <p className="text-base text-gray-600">
            A finance charge of 1.5% will be made on unpaid balances after 30
            days.
          </p>
        </div>

        <hr className="border-blue-gray-200 my-8" />
        <span className="flex items-center text-gray-600 justify-center">
          Invoice was created on a computer and is valid without the signature
          and seal.
        </span>
      </div>
    </div>
  );
};
const ActionButton = ({ icon, label, bgColor, hoverColor }) => (
  <button
    className={`${bgColor} ${hoverColor} text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center`}
  >
    <div className="w-4 h-4 mr-2 text-white">{icon}</div>
    <span className="text-white">{label}</span>
  </button>
);
const TableHeader = ({ children }) => (
  <th className="bg-[#eee] text-gray-600 text-base md:text-lg px-2 md:px-4 py-2">
    {children}
  </th>
);

const TableCell = ({ children, isHeader = false }) => (
  <td
    className={`border border-[#ddd] text-black text-base md:text-xl bg-[#ddd] px-2 md:px-4 py-4 md:py-6 ${isHeader ? "bg-[#ddd]" : "bg-[#eee]"
      }`}
  >
    {children}
  </td>
);

const InvoiceSummary = ({ label, value, isBold = false }) => (
  <div className="flex justify-between md:justify-end md:gap-24">
    <span className={`text-base md:text-lg ${isBold ? "font-semibold" : ""}`}>
      {label}
    </span>
    <span className={`text-base md:text-lg ${isBold ? "font-semibold" : ""}`}>
      {value}
    </span>
  </div>
);
const invoiceItems = [
  {
    id: "04",
    description: "Youtube channel",
    details: "Useful videos to improve your Javascript skills.",
    hourPrice: "0.00",
    hours: 100,
    total: "0.00",
  },
  {
    id: "01",
    description: "Website Design",
    details:
      "Creating a recognizable design solution based on the company’s existing visual identity.",
    hourPrice: "40.00",
    hours: 30,
    total: "1,200.00",
  },
  {
    id: "02",
    description: "Website Development",
    details: "Developing a Content Management System-based Website.",
    hourPrice: "40.00",
    hours: 80,
    total: "3,200.00",
  },
  {
    id: "03",
    description: "Search Engines Optimization",
    details: "Optimize the site for search engines (SEO).",
    hourPrice: "40.00",
    hours: 20,
    total: "800.00",
  },
];

export default Invoice;
