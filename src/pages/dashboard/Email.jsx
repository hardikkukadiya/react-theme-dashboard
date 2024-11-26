import React, { useState } from "react";
import EmailProfile from "./EmailProfile";
import { IoBookmarkOutline, IoDocumentTextOutline, IoVideocam, IoWarningOutline } from "react-icons/io5";
import { MdBookmarkBorder, MdOutlineInbox, MdOutlineNavigateNext, MdOutlineWatchLater, MdPeople } from "react-icons/md";
import { Avatar } from "@material-tailwind/react";
import { FaPlus, FaRegStar } from "react-icons/fa6";
import { GoPaperAirplane } from "react-icons/go";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import { LuRefreshCcw } from "react-icons/lu";
import { HiOutlineMail, HiOutlineMailOpen, HiOutlineSaveAs } from "react-icons/hi";
import { FiStar } from "react-icons/fi";
import { GrFormPrevious } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedEmails, setSelectedEmails] = useState(new Set());
  const [compose, setCompose] = useState(false);
  const emails = [
    { id: 1, name: "John Doe", message: "Lorem ipsum dolor sit amet" },
    { id: 2, name: "Jane Sadsmith", message: "Consectetur adipiscing elit" },
    { id: 3, name: "Jane Smasfith", message: "Consectetur adipiscing elit" },
    { id: 4, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 5, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 6, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 7, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 8, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 9, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 10, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 11, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 12, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
    { id: 13, name: "Jane Smafsdith", message: "Consectetur adipiscing elit" },
  ];

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };
  const handleClick = () => {
    setCompose(!compose);
  };

  const handleBackClick = () => {
    setSelectedEmail(null);
  };
  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      // Select all emails
      setSelectedEmails(new Set(emails.map((email) => email.id)));
    } else {
      // Deselect all emails
      setSelectedEmails(new Set());
    }
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (emailId) => {
    const updatedSelectedEmails = new Set(selectedEmails);
    if (updatedSelectedEmails.has(emailId)) {
      updatedSelectedEmails.delete(emailId);
    } else {
      updatedSelectedEmails.add(emailId);
    }
    setSelectedEmails(updatedSelectedEmails);
  };

  const isAllSelected = emails.length > 0 && selectedEmails.size === emails.length;
  
  const handleSubmit = () => {
    const emailInput = document.getElementById("email").value; 
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/; 

    if (emailRegex.test(emailInput)) {
      toast.success("Message sent successfully");
      setCompose(!compose);
    } else {
      toast.error("Please enter a valid email address"); 
    }
  };

  return (
    <div className="mt-5">
      <div className="w-full bg-white shadow-xl rounded-lg flex flex-col lg:flex-row overflow-x-auto custom-scrollbar">
        <div className="w-full lg:w-64 px-4">
          <div className="h-16 flex items-center">
            <div
              onClick={handleClick}
              className="w-full lg:w-48 cursor-pointer mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150">
              <div><FaPlus /></div>
              <span>Compose</span>
            </div>
          </div>
          <div className="px-2 pt-4 pb-8 border-r border-gray-300 max-h-screen overflow-y-auto custom">
            <ul className="space-y-2">
              <li>
                <div className="bg-gray-500 bg-opacity-30 text-blue-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <span><MdOutlineInbox size={15} /></span>
                    <span>Inbox</span>
                  </span>
                  <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span><FaRegStar size={15} /></span>
                  <span>Starred</span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span><MdOutlineWatchLater size={15} /></span>
                  <span>Snoozed</span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span><MdBookmarkBorder size={15} /></span>
                  <span>Important</span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span><GoPaperAirplane size={15} /></span>
                  <span>Sent</span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <span><IoDocumentTextOutline /></span>
                    <span>Drafts</span>
                  </span>
                  <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    1
                  </span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span><IoWarningOutline size={15} /></span>
                  <span>Spam</span>
                </div>
              </li>
              <li>
                <div className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span><RiDeleteBin6Line size={15} /></span>
                  <span>Trash</span>
                </div>
              </li>   
            </ul>
            <hr className="my-2 border-gray-300" />
            <span>Meet</span>
            <hr className="my-2 border-gray-300" />
            <div className="flex gap-4 items-center">
              <span><IoVideocam size={20} /></span>
              <span>Start a meeting</span>
            </div>
            <div className="flex gap-4 items-center mt-3">
              <span><MdPeople size={20} /></span>
              <span>Join a meeting</span>
            </div>
            <hr className="my-3 border-gray-300" />
            <div className="flex justify-between">
              <div className="flex justify-start gap-4">
                <Avatar
                  src="/img/fena.jpg"
                  alt="FenaRudani"
                  size="sm"
                  variant="rounded"
                  className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
                <div className="flex justify-between font-semibold items-center">jon dues</div>
              </div>
              <div className="text-2xl font-bold flex justify-center">+</div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-2">         
          <div className="h-auto md:h-16 flex flex-wrap items-center justify-between px-2 md:px-4 space-y-2 md:space-y-0">
            <div className="flex items-center flex-wrap space-y-2 md:space-y-0">
              <div className="relative flex items-center px-0.5 space-x-0.5">
                <input type="checkbox" checked={isAllSelected}
                  onChange={handleSelectAllChange} className="focus:ring-0" />
              </div>
              <div className="flex items-center ml-3">
                <button
                  title="Reload"
                  className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100">
                  <span><LuRefreshCcw size={17} /></span>
                </button>
              </div>
              <span className="bg-gray-300 h-6 w-[.5px] mx-3 hidden md:inline"></span>
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <button
                  title="Archive"
                  className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                >
                  <span><HiOutlineSaveAs size={17} /></span>
                </button>
                <button
                  title="Mark As Spam"
                  className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                >
                  <span><IoWarningOutline size={17} /></span>
                </button>
                <button
                  title="Delete"
                  className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                >
                  <span><RiDeleteBinLine size={17} /></span>
                </button>
              </div>
              <span className="bg-gray-300 h-6 w-[.5px] mx-3 hidden md:inline"></span>
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <button
                  title="Mark As Read"
                  className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                >
                  <span><HiOutlineMailOpen size={17} /></span>
                </button>
                <button
                  title="Mark As Unread"
                  className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                >
                  <span><HiOutlineMail size={17} /></span>
                </button>
                <button
                  title="Add Star"
                  className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                >
                  <span><FiStar size={17} /></span>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-auto mt-2 md:mt-0">
              <span className="text-sm text-gray-500">1-15 of 1,323</span>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 text-gray-400 p-1.5 rounded-lg"
                  title="Newer"
                >
                  <span><GrFormPrevious size={17} /></span>
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1.5 rounded-lg transition duration-150"
                  title="Older"
                >
                  <span><MdOutlineNavigateNext size={20} /></span>
                </button>
              </div>
            </div>
          </div>


          <div className="bg-gray-100 mb-6 rounded-md overflow-y-auto max-h-screen custom">
            {selectedEmail ? (
              <div className="p-4">
                <EmailProfile email={selectedEmail} />
                <button
                  onClick={handleBackClick}
                  className="px-4 py-2 bg-blue-500 text-white rounded mt-2.5"
                >
                  Back to Email List
                </button>
              </div>
            ) : (
              <div>
                {emails.map((email) => (
                  <div
                    key={email.id}
                    className="flex items-center border-y hover:bg-gray-200 px-2"
                  >
                    <input
                      type="checkbox"
                      checked={selectedEmails.has(email.id)}
            onChange={() => handleCheckboxChange(email.id)}
                      className="focus:ring-0 border-2 border-gray-400"
                    />
                    <div className="w-full flex items-center justify-between p-1 my-1 cursor-pointer">
                      <div className="flex items-center">
                        <div className="flex items-center mr-4 ml-1 space-x-1">
                          <button title="Not starred">
                            <span className="text-gray-500 hover:text-gray-900"><FaRegStar /></span>
                          </button>
                          <button title="Click to mark this email as important">
                            <span className="text-gray-500 hover:text-gray-900"><IoBookmarkOutline /></span>
                          </button>
                        </div>
                        <span
                          onClick={() => handleEmailClick(email)}
                          className="w-24 sm:w-36 text-sm pr-2 truncate"
                        >
                          {email.name}
                        </span>
                        <span className="mx-1">-</span>
                        <span
                          onClick={() => handleEmailClick(email)}
                          className="w-64 sm:w-96 text-gray-600 text-sm truncate"
                        >
                          {email.message}
                        </span>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className="text-sm text-gray-500">3:05 PM</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {compose ? (
        <div className="fixed bottom-0 right-0 mb-2 mr-4">
          <div className="w-full max-w-full sm:max-w-md lg:max-w-lg xl:max-w-[566px] h-auto my-1 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm max-h-[90vh] overflow-auto border-2 border-gray-200">
            <div className="bg-blue-600 w-full flex justify-between px-4 py-3 rounded-md text-white cursor-pointer">
              New Message <span onClick={handleClick}><IoMdCloseCircleOutline size={25} /></span>
            </div>
            <form>
              <div className="mb-6 mt-3">
                <input
                  type="email"
                  name="email"
                  id="email"               
                  placeholder="John Doe@gmail.com"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="subject"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <div                 
                  onClick={handleSubmit}
                  className="w-full px-3 cursor-pointer py-4 text-white bg-blue-600 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Send Message
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
      
<ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
};

export default Email;
