import React from "react";
import { FiPrinter } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { useMaterialTailwindController } from "../../context";

const Invoice = () => {
  const [controller] = useMaterialTailwindController();
  const { sidenavColor } = controller;
  const textColorClass = sidenavColor
    ? `text-${sidenavColor}-500`
    : "text-gray-700";
  const bgColorClass = sidenavColor ? `bg-${sidenavColor}-500` : "bg-gray-700";
  return (
    <div className="mt-5 bg-white px-4 py-4 rounded-lg">
      <div>
        <div className="flex justify-end items-end gap-2">
          <div>
            <button className="bg-grey-light hover:bg-[#183669] bg-[#172b4d]  text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
              <div className="w-4 h-4 mr-2 text-white">
                <FiPrinter />
              </div>
              <span className="text-white">Print</span>
            </button>
          </div>
          <div>
            <button className="bg-grey-light hover:bg-[#ec7189] bg-[#f5365c]  text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
              <div className="w-4 h-4 mr-2 text-white">
                <IoMdDownload />
              </div>
              <span className="text-white">Export as a PDF</span>
            </button>
          </div>
        </div>
        <hr className="border-blue-gray-200 my-8" />
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <img src="/img/logo-icon.png" loading="lazy" className="w-[80px] h-[80px]"></img>
          </div>
          <div className="col-span-6 text-end">
            <div className={` text-[32px] ${textColorClass}`}>Arboshiki</div>
            <span className="text-gray-600">
              455 Foggy Heights, AZ 85004, US
            </span>
            <span className="text-gray-600">(123) 456-789</span>
            <span className="text-gray-600">company@example.com</span>
          </div>
        </div>
        <hr className="border-blue-gray-200 my-8" />
      </div>
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 text-start">
            <div className="text-gray-800">INVOICE TO:</div>
            <div className={`text-3xl ${textColorClass} `}>John Doe</div>
            <div className="text-gray-800">
              796 Silver Harbour, TX 79273, US
            </div>
            <div className={`${textColorClass}`}>john@example.com</div>
          </div>
          <div className="col-span-6 text-end">
            <div className={`text-xl ${textColorClass}`}>INVOICE 340</div>
            <div className="text-gray-700">Date of Invoice: 01/10/2018</div>
            <div className="text-gray-700">Due Date: 30/10/2018</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-5xl mt-10 mx-auto pb-8">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="border border-b-2 border-white">
                  <th className="bg-[#eee] text-gray-60text-4xl py-2">#</th>
                  <th className="bg-[#eee] text-gray-600 px-4 py-2">
                    DESCRIPTION
                  </th>
                  <th className="bg-[#eee] text-gray-600">HOUR PRICE</th>
                  <th className="bg-[#eee] text-gray-600 px-4 py-2">HOURS</th>
                  <th className="bg-[#eee] text-gray-600 px-4 py-2">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-b-2 border-white">
                  <td
                    className={`border border-[#ddd] ${textColorClass} text-2xl bg-[#ddd] px-4 py-6`}
                  >
                    04
                  </td>
                  <td className="border border-gray-200 px-4 py-6 bg-[#eee]">
                    <div className={` text-xl ${textColorClass}`}>
                      Youtube channel{" "}
                    </div>
                    <div className="text-gray-600">
                      Useful videos to improve your Javascript skills. Subscribe
                      and stay tuned :)
                    </div>
                  </td>
                  <td className="border border-gray-200 bg-[#ddd] px-4 py-6">
                    $0.00
                  </td>
                  <td className="border bg-[#eee] border-gray-200 px-4 py-6">
                    100
                  </td>
                  <td
                    className={`border border-gray-200 px-4 py-6 text-end bg-[#ddd] ${textColorClass}`}
                  >
                    $0.00
                  </td>
                </tr>
                <tr className="border border-b-2 border-white">
                  <td
                    className={`border border-[#ddd] ${textColorClass} text-2xl bg-[#ddd] px-4 py-6`}
                  >
                    01
                  </td>
                  <td className="border bg-[#eee] border-gray-200 px-4 py-6">
                    <div className={` text-xl ${textColorClass}`}>
                      Website Design{" "}
                    </div>
                    <div className="text-gray-600">
                      Creating a recognizable design solution based on the
                      company’s existing visual identity
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 bg-[#ddd] py-8">
                    $40.00
                  </td>
                  <td className="border bg-[#eee] border-gray-200 px-4 py-6">
                    30
                  </td>
                  <td
                    className={`border border-gray-200 px-4 py-6 text-end bg-[#ddd] ${textColorClass}`}
                  >
                    $1,200.00
                  </td>
                </tr>
                <tr className="border border-b-2 border-white">
                  <td
                    className={`border border-[#ddd] ${textColorClass} text-2xl bg-[#ddd] px-4 py-6`}
                  >
                    02
                  </td>
                  <td className="border border-gray-200 px-4 py-6 bg-[#eee]">
                    <div className={` text-xl ${textColorClass}`}>
                      Website Development{" "}
                    </div>
                    <div className="text-gray-600">
                      Developing a Content Management System-based Website
                    </div>
                  </td>
                  <td className="border border-gray-200 bg-[#ddd] px-4 py-6">
                    $40.00
                  </td>
                  <td className="border border-gray-200 px-4 py-6 bg-[#eee]">
                    80
                  </td>
                  <td
                    className={`border border-gray-200 px-4 py-6 text-end bg-[#ddd] ${textColorClass}`}
                  >
                    $3,200.00
                  </td>
                </tr>
                <tr className="border border-b-2 border-white">
                  <td
                    className={`border border-[#ddd] ${textColorClass} text-2xl bg-[#ddd] px-4 py-6`}
                  >
                    03
                  </td>
                  <td className="border border-gray-200 px-4 py-6 bg-[#eee]">
                    <div className={` text-xl ${textColorClass}`}>
                      {" "}
                      Search Engines Optimization{" "}
                    </div>
                    <div className="text-gray-600">
                      Optimize the site for search engines (SEO)
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 bg-[#ddd] py-8">
                    $40.00
                  </td>
                  <td className="border border-gray-200 px-4 py-6 bg-[#eee]">
                    20
                  </td>
                  <td
                    className={`border border-gray-200 px-4 py-6 text-end bg-[#ddd] ${textColorClass}`}
                  >
                    $800.00
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <div className="grid grid-cols-12">
                <div className="col-span-6 items-center justify-center flex">
                  <p className=" text-center text-4xl text-gray-600">
                    Thank you!
                  </p>
                </div>
                <div className="col-span-6 text-end">
                  <div className="flex justify-end gap-24">
                    <span className="text-lg">SUBTOTAL</span>
                    <span className="text-lg">$5,200.00</span>
                  </div>
                  <hr className="border-blue-gray-200 my-3" />
                  <div className="flex justify-end gap-24">
                    <span className="text-lg">TAX 25%</span>
                    <span className="text-lg">$1,300.00</span>
                  </div>
                  <hr className="border-[#ddd] my-3" />
                  <div className="flex justify-end gap-24">
                    <div className={`${textColorClass} font-semibold text-xl`}>
                      GRAND TOTAL
                    </div>
                    <span className={`${textColorClass} text-xl`}>
                      $6,500.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-green-500 p-4 mt-6">
          <p className="text-base  text-gray-600">NOTICE:</p>
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

export default Invoice;
