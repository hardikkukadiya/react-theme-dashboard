import React, { useRef, useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { FaPhone, FaRegFaceSmile, FaSquareFontAwesomeStroke } from 'react-icons/fa6'
import { FiPaperclip, FiSend } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiArrowDropDownLine, RiContactsBook3Line } from 'react-icons/ri'
import EmojiPicker from 'emoji-picker-react';


const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const fileInputRef = useRef(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newMessage = {
                id: Date.now(),
                type: file.type.startsWith('image/') ? 'image' : 'file',
                content: URL.createObjectURL(file), 
                sender: 'user',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, newMessage]);
            fileInputRef.current.value = ''; 
            simulateReply();
        }
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: Date.now(),
                type: 'text',
                content: message,
                sender: 'user',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, newMessage]);
            setMessage(''); 
            simulateReply();
        }
    };

    const simulateReply = () => { 
        setTimeout(() => {
            const replyMessage = {
                id: Date.now() + 1,
                type: 'text',
                content: "This is an automated reply.",
                sender: 'recipient',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, replyMessage]);
        }, 1000); 
    };

    const handleEmojiClick = (emojiData) => {
        setMessage((prev) => prev + emojiData.emoji);
        setShowPicker(false);
    };

    return (
        <div className='mt-5'>
            <div className="flex flex-col bg-white rounded-md md:flex-row "> 
                <div className="w-full md:w-[33%] p-4 border-r">
                    <div className="flex items-center space-x-3">
                        <img loading="lazy" src="/img/team-2.jpeg" alt="User Avatar" className="w-10 h-10 rounded-full" />
                        <div>   
                            <h2 className="text-lg font-semibold">jon dues</h2>
                            <p className="text-sm text-green-500">Active Now</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <input type="search" placeholder="People, groups, & messages" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div className="mt-6 flex justify-around border-b pb-1.5 border-gray-300">
                        <div className="flex flex-col items-center text-green-800">
                            <span><BsChatDots size={20} /></span>
                            <span className='text-sm mt-1.5'>Chats</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-800 hover:text-green-800 cursor-pointer">
                            <div><FaPhone size={20} /></div>
                            <span className='text-sm mt-1.5'>Calls</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-800 hover:text-green-800 cursor-pointer">
                            <div><RiContactsBook3Line size={20} /></div>
                            <span className='text-sm mt-1.5'>Contacts</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-800 hover:text-green-800 cursor-pointer">
                            <div><IoMdNotificationsOutline size={20} /></div>
                            <span className='text-sm mt-1.5'>Notifications</span>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='border border-gray-400 px-4 md:p-1 py-1 rounded-2xl flex justify-center items-center gap-2 cursor-pointer mb-2 md:mb-0'>
                                <span>Meet now</span>
                                <span><RiArrowDropDownLine size={20} /></span>
                            </div>
                            <div className='border border-gray-400 px-4 py-1 rounded-2xl flex justify-center items-center gap-2 cursor-pointer'>
                                <span>New Chat</span>
                                <span><RiArrowDropDownLine size={20} /></span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-gray-500">RECENT CHATS</h3>
                        <div className="mt-3 space-y-1 overflow-y-auto custom h-52 ">
                            <div className="flex items-center justify-between p-3 hover:bg-[#dcedff] cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <img loading="lazy" src="https://i.pravatar.cc/40?img=1" alt="Chat User" className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="font-medium">Louis Litt</p>
                                        <p className="text-sm text-gray-500 truncate w-36">Wrong. You take the gun. swdsaff sdfasdfa..</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">9:51 AM</span>
                            </div>

                            <div className="flex items-center justify-between bg-[#dcedff] p-3 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <img loading="lazy" src="https://i.pravatar.cc/40?img=2" alt="Chat User" className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="font-medium">Harvey Specter</p>
                                        <p className="text-sm text-gray-500 truncate w-36">Wrong. You take the gun...</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">4:32 PM</span>
                            </div>
                            <div className="flex items-center justify-between p-3 hover:bg-[#dcedff] cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <img loading="lazy" src="https://i.pravatar.cc/40?img=1" alt="Chat User" className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="font-medium">Louis Litt</p>
                                        <p className="text-sm text-gray-500 truncate w-36">Wrong. You take the gun. swdsaff sdfasdfa..</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">9:51 AM</span>
                            </div>
                            <div className="flex items-center justify-between p-3 hover:bg-[#dcedff] cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <img loading="lazy" src="https://i.pravatar.cc/40?img=1" alt="Chat User" className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="font-medium">Louis Litt</p>
                                        <p className="text-sm text-gray-500 truncate w-36">Wrong. You take the gun. swdsaff sdfasdfa..</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">9:51 AM</span>
                            </div>
                            <div className="flex items-center justify-between p-3 hover:bg-[#dcedff] cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <img loading="lazy" src="https://i.pravatar.cc/40?img=1" alt="Chat User" className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="font-medium">Louis Litt</p>
                                        <p className="text-sm text-gray-500 truncate w-36">Wrong. You take the gun. swdsaff sdfasdfa..</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">9:51 AM</span>
                            </div>
                            <div className="flex items-center justify-between p-3 hover:bg-[#dcedff] cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <img loading="lazy" src="https://i.pravatar.cc/40?img=1" alt="Chat User" className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="font-medium">Louis Litt</p>
                                        <p className="text-sm text-gray-500 truncate w-36">Wrong. You take the gun. swdsaff sdfasdfa..</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">9:51 AM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-grow w-full md:w-3/4 flex flex-col justify-between h-[550px]">
                    <div className="flex-grow p-6 space-y-4 overflow-y-auto custom">
                        {messages.length === 0 ? (
                            <p className="bg-gray-200 text-gray-700 p-3 rounded-lg max-w-xs">
                                Hello! How can I help you today?
                            </p>
                        ) : (
                            messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'items-start'} space-x-2`}
                                >
                                    {msg.sender === 'user' ? null : (
                                        <img loading="lazy" src="https://i.pravatar.cc/40?img=2" alt="Avatar" className="w-10 h-10 rounded-full" />
                                    )}
                                    <div>
                                        {msg.type === 'text' ? (
                                            <p className={`bg-${msg.sender === 'user' ? '[#dcedff]' : 'gray-200'} text-gray-700 p-3 rounded-lg max-w-xs`}>
                                                {msg.content}
                                            </p>
                                        ) : (
                                            <img
                                                    src={msg.content}
                                                    loading="lazy"
                                                alt="Uploaded"
                                                className="max-w-xs rounded-lg"
                                            />
                                        )}
                                        <span className="text-sm text-gray-400">{msg.time}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 shadow-md">
                        <div>
                            <button onClick={() => fileInputRef.current.click()} className="flex items-center justify-center text-gray-500 hover:text-gray-600">
                                <span><FiPaperclip size={20} /></span>
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"/>
                        </div>
                        <div className="flex-grow ml-4 relative">
                            <textarea
                                value={message}
                                rows="3"
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 pt-1.5 pr-12 h-10"
                                placeholder="Type a message..." />
                            <button
                                className="absolute flex items-center justify-center h-10 w-10 right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-600"
                                onClick={() => setShowPicker(!showPicker)}>
                                <span><FaRegFaceSmile size={20} /></span>
                            </button>
                            {showPicker && (
                                <div className="absolute z-10 bottom-11 right-0 mt-1">
                                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                                </div>
                            )}
                        </div>
                        <div className="ml-4">
                            <button
                                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-2xl text-white px-4 py-1 h-8"
                                onClick={handleSendMessage}>
                                <span><FiSend /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default ChatBox
