import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDropbox, FaFolder, FaGoogleDrive, FaPlus,FaRegImage, FaRegImages, FaVideo } from "react-icons/fa6";
import { IoDocumentTextOutline, IoImageOutline, IoSearch} from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { Avatar, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { BiDevices, BiSolidDoorOpen } from "react-icons/bi";
import { FiMusic, FiVideo } from "react-icons/fi";
import { PiPlugChargingLight } from "react-icons/pi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdFolderOpen } from "react-icons/io";
import { HiOutlineRefresh } from "react-icons/hi";
import { TbFileZip } from "react-icons/tb";

const ProductListItem = ({ productName, sales, price }) => {
  const getIcon = () => {
    switch (productName) {
      case "Documents":
        return <FaFileAlt size={20} className="text-green-400" />;
      case "Images":
        return <FaRegImage size={20} className="text-blue-400" />;
      case "Media Files":
        return <FaVideo size={20} className="text-red-400" />;
      case "Other Files":
        return <FaRegImages size={20} className="text-purple-400" />;
      default:
        return <FaRegImages size={20} className="text-orange-400" />;
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 p-2 rounded-md hover:bg-gray-100 transition">
      <div className="flex items-center gap-3 min-w-0">
        {getIcon()}
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-700 truncate">{productName}</p>
          <p className="text-xs text-gray-500 truncate">{sales}</p>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-600 flex-shrink-0">{price}</span>
    </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* 704*318 than   sm:grid-cols-2 this css is not working proper plz check give me a proper responsive design  */}
        <div className="space-y-4">
          <div className="h-auto sm:h-[600px] bg-white rounded-md p-4 overflow-y-auto">
            <div className="h-16 flex items-center">
              <div className="w-full cursor-pointer mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-1.5 rounded space-x-2 transition duration-150">              
                <div><FaPlus /></div>
                <span>Add File</span>
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl">My Drive</div>
              <div>
                <div className="flex gap-4 items-center p-2.5 mt-3 border-b border-gray-300 cursor-pointer hover:bg-blue-600 text-gray-700 hover:text-white">
                  <span>
                    <IoMdFolderOpen size={20} />
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
                    <HiOutlineRefresh size={20} />
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
                    <FiVideo size={20} />
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
                    <TbFileZip size={20} />
                  </span>
                  <span>Zip File</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto sm:h-[420px] bg-white rounded-md p-3 overflow-y-auto custom shadow-md">         
            <div className="flex justify-between">
              <span className="text-lg sm:text-xl text-blue-600">45.5 GB</span>
              <span className="text-lg sm:text-xl text-gray-600">50 GB</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-sm sm:text-base text-gray-600">Used</span>
              <button className="text-sm sm:text-base text-blue-600 hover:underline focus:outline-none">
                Upgrade
              </button>
            </div>
            <div className="mt-2">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: '10%' }}
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
            {/* Product List */}
            <div className="mt-2 space-y-2">
              <ProductListItem productName="Documents" sales="1,756 files" price="15.3 GB" />
              <ProductListItem productName="Images" sales="123 files" price="256 MB" />
              <ProductListItem productName="Media Files" sales="24 files" price="3.4 GB" />
              <ProductListItem productName="Other Files" sales="24 files" price="3.4 GB" />
              <ProductListItem productName="Unknown Files" sales="24 files" price="178 GB" />
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
                      <FaGoogleDrive size={30} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      {/* <BsThreeDots size={25} /> */}
                      <Menu placement="left-start">
                        <MenuHandler>
                          <div className="cursor-pointer">
                            <BsThreeDots size={25} />
                          </div>
                        </MenuHandler>
                        <MenuList>
                          <MenuItem>Action</MenuItem>
                          <MenuItem>Another Action</MenuItem>
                          <MenuItem>Something else here</MenuItem>
                        </MenuList>
                      </Menu>
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
                      <FaDropbox size={30} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <Menu placement="left-start">
                        <MenuHandler>
                          <div className="cursor-pointer">
                            <BsThreeDots size={25} />
                          </div>
                        </MenuHandler>
                        <MenuList>
                          <MenuItem>Action</MenuItem>
                          <MenuItem>Another Action</MenuItem>
                          <MenuItem>Something else here</MenuItem>
                        </MenuList>
                      </Menu>
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
                      <BiSolidDoorOpen size={30} />
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <Menu placement="left-start">
                        <MenuHandler>
                          <div className="cursor-pointer">
                            <BsThreeDots size={25} />
                          </div>
                        </MenuHandler>
                        <MenuList>
                          <MenuItem>Action</MenuItem>
                          <MenuItem>Another Action</MenuItem>
                          <MenuItem>Something else here</MenuItem>
                        </MenuList>
                      </Menu>
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
                          src="/img/team-2.jpeg"
                        />
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 2"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="/img/team-1.jpeg"
                        />
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 3"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="/img/team-4.jpeg"
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
                          alt="user 2"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="/img/team-2.jpeg"
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
                          alt="user 2"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="/img/team-3.jpeg"
                        />
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="user 2"
                          className="border-2 border-white hover:z-10 focus:z-10"
                          src="/img/team-1.jpeg"
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
              <div className="shadow overflow-hidden rounded border-b border-gray-200 overflow-y-auto overflow-x-auto h-[470px] custom">
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
                        <td className="py-3 px-4 text-left text-[#1ABB9C] flex gap-2 justify-start items-center">
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