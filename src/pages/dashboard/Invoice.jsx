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
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Logo Section */}
          <div className="col-span-12 md:col-span-6">
            <img
              src="/img/logo-icon.png"
              loading="lazy"
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mx-auto md:mx-0"
              alt="Company Logo"
            />
          </div>

          {/* Company Information Section */}
          <div className="col-span-12 md:col-span-6 text-center md:text-end">
            <div className={`text-2xl md:text-[32px] ${textColorClass}`}>Arboshiki</div>
            <div className="text-gray-600">
              <p>455 Foggy Heights, AZ 85004, US</p>
              <p>(123) 456-789</p>
              <p>company@example.com</p>
            </div>
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
          <div className="min-w-full mt-10 mx-auto pb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="border border-b-2 border-white">
                    <th className="bg-[#eee] text-gray-600 text-base md:text-4xl py-2">#</th>
                    <th className="bg-[#eee] text-gray-600 text-base md:text-lg px-2 md:px-4 py-2">
                      DESCRIPTION
                    </th>
                    <th className="bg-[#eee] text-gray-600 text-base md:text-lg px-2 py-2">
                      HOUR PRICE
                    </th>
                    <th className="bg-[#eee] text-gray-600 text-base md:text-lg px-2 md:px-4 py-2">
                      HOURS
                    </th>
                    <th className="bg-[#eee] text-gray-600 text-base md:text-lg px-2 md:px-4 py-2">
                      TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-b-2 border-white">
                    <td
                      className={`border border-[#ddd] ${textColorClass} text-base md:text-2xl bg-[#ddd] px-2 md:px-4 py-4 md:py-6`}
                    >
                      04
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-4 md:py-6 bg-[#eee]">
                      <div className={`text-base md:text-xl ${textColorClass}`}>
                        Youtube channel
                      </div>
                      <div className="text-gray-600">
                        Useful videos to improve your Javascript skills. Subscribe and stay tuned :)
                      </div>
                    </td>
                    <td className="border border-gray-200 bg-[#ddd] px-2 md:px-4 py-4 md:py-6">
                      $0.00
                    </td>
                    <td className="border bg-[#eee] border-gray-200 px-2 md:px-4 py-4 md:py-6">
                      100
                    </td>
                    <td
                      className={`border border-gray-200 px-2 md:px-4 py-4 md:py-6 text-end bg-[#ddd] ${textColorClass}`}
                    >
                      $0.00
                    </td>
                  </tr>

                  <tr className="border border-b-2 border-white">
                    <td
                      className={`border border-[#ddd] ${textColorClass} text-base md:text-2xl bg-[#ddd] px-2 md:px-4 py-4 md:py-6`}
                    >
                      01
                    </td>
                    <td className="border bg-[#eee] border-gray-200 px-2 md:px-4 py-4 md:py-6">
                      <div className={`text-base md:text-xl ${textColorClass}`}>
                        Website Design
                      </div>
                      <div className="text-gray-600">
                        Creating a recognizable design solution based on the company’s existing visual identity
                      </div>
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 bg-[#ddd] py-4 md:py-6">
                      $40.00
                    </td>
                    <td className="border bg-[#eee] border-gray-200 px-2 md:px-4 py-4 md:py-6">
                      30
                    </td>
                    <td
                      className={`border border-gray-200 px-2 md:px-4 py-4 md:py-6 text-end bg-[#ddd] ${textColorClass}`}
                    >
                      $1,200.00
                    </td>
                  </tr>

                  <tr className="border border-b-2 border-white">
                    <td
                      className={`border border-[#ddd] ${textColorClass} text-base md:text-2xl bg-[#ddd] px-2 md:px-4 py-4 md:py-6`}
                    >
                      02
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-4 md:py-6 bg-[#eee]">
                      <div className={`text-base md:text-xl ${textColorClass}`}>
                        Website Development
                      </div>
                      <div className="text-gray-600">
                        Developing a Content Management System-based Website
                      </div>
                    </td>
                    <td className="border border-gray-200 bg-[#ddd] px-2 md:px-4 py-4 md:py-6">
                      $40.00
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-4 md:py-6 bg-[#eee]">
                      80
                    </td>
                    <td
                      className={`border border-gray-200 px-2 md:px-4 py-4 md:py-6 text-end bg-[#ddd] ${textColorClass}`}
                    >
                      $3,200.00
                    </td>
                  </tr>

                  <tr className="border border-b-2 border-white">
                    <td
                      className={`border border-[#ddd] ${textColorClass} text-base md:text-2xl bg-[#ddd] px-2 md:px-4 py-4 md:py-6`}
                    >
                      03
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-4 md:py-6 bg-[#eee]">
                      <div className={`text-base md:text-xl ${textColorClass}`}>
                        Search Engines Optimization
                      </div>
                      <div className="text-gray-600">Optimize the site for search engines (SEO)</div>
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 bg-[#ddd] py-4 md:py-6">
                      $40.00
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-4 md:py-6 bg-[#eee]">
                      20
                    </td>
                    <td
                      className={`border border-gray-200 px-2 md:px-4 py-4 md:py-6 text-end bg-[#ddd] ${textColorClass}`}
                    >
                      $800.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <div className="grid grid-cols-12 gap-4 md:gap-0">
                {/* Thank you message */}
                <div className="col-span-12 md:col-span-6 items-center justify-center flex">
                  <p className="text-center text-3xl md:text-4xl text-gray-600">
                    Thank you!
                  </p>
                </div>

                {/* Totals Section */}
                <div className="col-span-12 md:col-span-6 text-end">
                  <div className="flex justify-between md:justify-end md:gap-24">
                    <span className="text-base md:text-lg">SUBTOTAL</span>
                    <span className="text-base md:text-lg">$5,200.00</span>
                  </div>
                  <hr className="border-blue-gray-200 my-2 md:my-3" />
                  <div className="flex justify-between md:justify-end md:gap-24">
                    <span className="text-base md:text-lg">TAX 25%</span>
                    <span className="text-base md:text-lg">$1,300.00</span>
                  </div>
                  <hr className="border-[#ddd] my-2 md:my-3" />
                  <div className="flex justify-between md:justify-end md:gap-24">
                    <div className={`${textColorClass} font-semibold text-lg md:text-xl`}>
                      GRAND TOTAL
                    </div>
                    <span className={`${textColorClass} text-lg md:text-xl`}>$6,500.00</span>
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
