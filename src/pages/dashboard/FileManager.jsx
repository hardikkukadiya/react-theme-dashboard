import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaFolder, FaRegFolder, FaRegImage, FaRegImages, FaVideo } from "react-icons/fa6";
import { IoDocumentTextOutline, IoImageOutline, IoSearch, IoVideocamOutline } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { Avatar } from "@material-tailwind/react";
import { BiDevices } from "react-icons/bi";
import { FiMusic, FiRefreshCcw } from "react-icons/fi";
import { PiPlugChargingLight } from "react-icons/pi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GoFileZip } from "react-icons/go";

const ProductListItem = ({ productName, sales, price }) => {
  // Define an icon based on the productName
  const getIcon = () => {
    switch (productName) {
      case "Documents":
        return <FaFileAlt size={20} className="text-green-400" />; // Document icon
      case "Images":
        return <FaRegImage size={20} className="text-blue-400" />; // Image icon
      case "Media Files":
        return <FaVideo size={20} className="text-red-400" />; // Video/Media icon
      case "Other Files":
        return <FaRegImages size={20} className="text-purple-400" />; // Video/Media icon
      default:
        return <FaRegImages size={20} className="text-orange-400" />; // Default icon
    }
  };
   
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-11 h-11 bg-gray-100 flex justify-center items-center rounded-md">
          {getIcon()}
        </div>
        <div className="ml-3">
          <p className="font-medium">{productName}</p>
          <p className="text-sm text-gray-500">{sales}</p>
        </div>
      </div>
      <p className="font-semibold text-blue-600">{price}</p>
    </li>
  );
};

const FileManager = () => {
  const data = [
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
    { name: "Competitor Analysis Template", members: "Only you", lastModified: "Sep 3, 2019" },
  ];
  
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="space-y-4">
          <div className="h-auto sm:h-[600px] bg-white rounded-md p-4 overflow-y-auto">
            <div className="h-16 flex items-center">
              <div className="w-full sm:w-48 cursor-pointer mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-1.5 rounded space-x-2 transition duration-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                <span>Add File</span>
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl">My Drive</div>
              <div>
                <div className="flex gap-4 items-center p-2.5 mt-3 border-b border-gray-300 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <FaRegFolder size={20} />
                  </span>
                  <span>All File</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 border-b border-gray-300 pb-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <BiDevices size={20} />
                  </span>
                  <span>My Devices</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 border-b border-gray-300 pb-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <FiRefreshCcw size={20} />
                  </span>
                  <span>Recents</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 border-b border-gray-300 pb-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <PiPlugChargingLight size={20} />
                  </span>
                  <span>Important</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 border-b border-gray-300 pb-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <RiDeleteBin2Line size={20} />
                  </span>
                  <span>Delete Files</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 border-b border-gray-300 pb-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <IoDocumentTextOutline size={20} />
                  </span>
                  <span>Documents</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 border-b border-gray-300 pb-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <IoImageOutline size={20} />
                  </span>
                  <span>Images</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 border-b border-gray-300 pb-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <IoVideocamOutline size={20} />
                  </span>
                  <span>Videos</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 border-b border-gray-300 pb-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <FiMusic size={20} />
                  </span>
                  <span>Audio</span>
                </div>
                <div className="flex gap-4 items-center p-2.5 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <GoFileZip size={20} />
                  </span>
                  <span>Zip File</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto sm:h-[420px] bg-white rounded-md p-3 overflow-y-auto custom">
            <div className="flex justify-between">
              <span className="text-lg sm:text-xl text-blue-600">45.5 GB</span>
              <span className="text-lg sm:text-xl text-gray-600">50 GB</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm sm:text-base text-gray-600">Used</span>
              <span className="text-sm sm:text-base text-blue-600">Upgrade</span>
            </div>
            <div className="mt-2.5">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{width:'10%'}}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                  <div
                    style={{ width: '15%' }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                  ></div>
                  <div
                    style={{ width: '25%' }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <ul className="space-y-2 sm:space-y-4 mt-3">
                <ProductListItem
                  productName="Documents"
                  sales="1,756 files"
                  price="15.3 GB"
                />
              </ul>
            </div>
            <div>
              <ul className="space-y-2 sm:space-y-4 mt-3">
                <ProductListItem
                  productName="Images"
                  sales="123 files"
                  price="256 MB"
                />
              </ul>
            </div>
            <div>
              <ul className="space-y-2 sm:space-y-4 mt-3">
                <ProductListItem
                  productName="Media Files"
                  sales="24 files"
                  price="3.4 GB"
                />
              </ul>
            </div>
            <div>
              <ul className="space-y-2 sm:space-y-4 mt-3">
                <ProductListItem
                  productName="Other Files"
                  sales="24 files"
                  price="3.4 GB"
                />
              </ul>
            </div>
            <div>
              <ul className="space-y-2 sm:space-y-4 mt-3">
                <ProductListItem
                  productName="Unknown Files"
                  sales="24 files"
                  price="178 GB"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:col-span-6 md:col-span-2 lg:col-span-3 xl:col-span-3 h-auto min-h-[200px] bg-white rounded-md p-4">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              className="bg-gray-100 h-12 w-full px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-4 mr-4">
              <span className="h-4 w-4 fill-current">
                <IoSearch />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 mt-8">
            {/* Google Drive Card */}
            <div className="border border-gray-300 rounded-md">
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="bg-[#1ABB9C] h-14 w-14 rounded-lg flex justify-center items-center">
                    <span className="text-white">
                      <MdPeople size={30} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <BsThreeDots size={25} />
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-lg sm:text-xl">Google Drive</div>
                <div className="mt-5 flex justify-between">
                  <span>23.4 GB</span>
                  <span>28 GB</span>
                </div>
                <div className="relative mt-1">
                  <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "60%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1ABB9C]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropbox Card */}
            <div className="border border-gray-300 rounded-md">
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="bg-[#f5365c] h-14 w-14 rounded-lg flex justify-center items-center">
                    <span className="text-white">
                      <MdPeople size={30} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <BsThreeDots size={25} />
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-lg sm:text-xl">Dropbox</div>
                <div className="mt-5 flex justify-between">
                  <span>1.2 GB</span>
                  <span>3 GB</span>
                </div>
                <div className="relative mt-1">
                  <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "60%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#f5365c]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* OneDrive Card */}
            <div className="border border-gray-300 rounded-md">
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="bg-[#fb6340] h-14 w-14 rounded-lg flex justify-center items-center">
                    <span className="text-white">
                      <MdPeople size={30} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <BsThreeDots size={25} />
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-lg sm:text-xl">OneDrive</div>
                <div className="mt-5 flex justify-between">
                  <span>23.4 GB</span>
                  <span>28 GB</span>
                </div>
                <div className="relative mt-1">
                  <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "60%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#fb6340]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-5 text-2xl">Folders</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 mt-4">
            {/* Analytics Card */}
            <div className="border border-gray-300 rounded-md">
              <div className="px-4 py-3">
                <div className="flex justify-between">
                  <div className="rounded-lg flex justify-center items-center">
                    <span className="text-[#1ABB9C]">
                      <FaFolder size={25} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <div className="flex items-center -space-x-4">
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 1"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 2"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                        />
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 3"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                        />
                      </div>
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-[#1ABB9C]">Analytics</div>
                <div className="text-sm">15 files</div>
              </div>
            </div>

            {/* Analytics Card with one user */}
            <div className="border border-gray-300 rounded-md">
              <div className="px-4 py-3">
                <div className="flex justify-between">
                  <div className="rounded-lg flex justify-center items-center">
                    <span className="text-[#1ABB9C]">
                      <FaFolder size={25} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <div className="flex items-center -space-x-4">
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 1"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                      </div>
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-[#1ABB9C]">Analytics</div>
                <div className="text-sm">15 files</div>
              </div>
            </div>

            {/* Marketing Card */}
            <div className="border border-gray-300 rounded-md">
              <div className="px-4 py-3">
                <div className="flex justify-between">
                  <div className="rounded-lg flex justify-center items-center">
                    <span className="text-[#1ABB9C]">
                      <FaFolder size={25} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <div className="flex items-center -space-x-4">
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 1"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 2"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                        />
                      </div>
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-[#1ABB9C]">Marketing</div>
                <div className="text-sm">15 files</div>
              </div>
            </div>
          </div>       
          
          <div className="mt-5">
            <div className="flex justify-between items-center">
              <span className="text-2xl">Recent Files</span>
              <span className="text-[#1ABB9C] text-sm">View All</span>
            </div>
            <div className="mt-5 w-full">
              <div className="shadow overflow-hidden rounded border-b border-gray-200 overflow-y-auto h-[470px] custom">
                <table className="min-w-full bg-white">
                  <thead className="text-black">
                    <tr>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Members</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Last Modified</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((file, index) => (
                      <tr key={index} className={`bg-${index % 2 === 0 ? 'gray-100' : 'white'} hover:bg-gray-200 transition duration-200`}>
                        <td className="py-3 px-4 text-left text-[#1ABB9C] flex gap-2 justify-center items-center">
                          <FaFolder />
                          <div className="text-center">{file.name}</div>
                        </td>
                        <td className="py-3 px-4 text-left">{file.members}</td>
                        <td className="text-left">{file.lastModified}</td>
                        <td className="py-3 px-4 text-left">
                          <BsThreeDots size={20} />
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
    </div>
  );
};

export default FileManager;