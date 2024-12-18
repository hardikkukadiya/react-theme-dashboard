import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { MdDelete } from 'react-icons/md';
import { BiSolidEdit } from 'react-icons/bi';

const Faq = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: "What is Faq?", answer: "We're not always in the position that we want to be at. We're constantly growing." },
    { id: 2, question: "How to use FAQ?", answer: "We're constantly making mistakes. We're constantly trying to express ourselves." },
    { id: 3, question: "What can I do with FAQ's?", answer: "We're constantly trying to actualize our dreams." },
  ]);
  const [open, setOpen] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);
  const [faqToDelete, setFaqToDelete] = useState(null); // Track FAQ to be deleted
  const [newFaq, setNewFaq] = useState({ question: "", answer: "", image: "", video: "" });
  const [editId, setEditId] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleAddFaq = () => {
    if (newFaq.question && newFaq.answer) {
      setFaqs([...faqs, { id: faqs.length + 1, ...newFaq }]);
      resetForm();
    }
  };

  const handleDeleteFaq = (id) => {
    setFaqToDelete(id); // Set FAQ to be deleted
    setDeleteConfirmationModalOpen(true); // Open delete confirmation modal
  };

  const confirmDeleteFaq = () => {
    setFaqs(faqs.filter((faq) => faq.id !== faqToDelete));
    setDeleteConfirmationModalOpen(false); // Close confirmation modal
    setFaqToDelete(null); // Reset the FAQ to be deleted
  };

  const handleEditFaq = (id) => {
    const faqToEdit = faqs.find((faq) => faq.id === id);
    setNewFaq({ ...faqToEdit });
    setEditId(id);
    setModalOpen(true);
  };

  const handleUpdateFaq = () => {
    const updatedFaqs = faqs.map((faq) =>
      faq.id === editId ? { ...faq, ...newFaq } : faq
    );
    setFaqs(updatedFaqs);
    resetForm();
  };

  const resetForm = () => {
    setNewFaq({ question: "", answer: "", image: "", video: "" });
    setEditId(null);
    setModalOpen(false);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewFaq({ ...newFaq, [name]: files[0] });
  };

  return (
    <div className='mt-12'>
      <span className='text-4xl flex justify-center'>FAQ&apos;s</span>
      <div className='text-end mb-4'>
        <button onClick={() => setModalOpen(true)} className="mt-4 bg-blue-500 text-white p-2 rounded">Add FAQ</button>
      </div>
      {faqs.map(faq => (
        <Accordion key={faq.id} open={open === faq.id} className="mb-2 rounded-lg border border-blue-gray-100 bg-gray-100 px-4">
          <AccordionHeader
            onClick={() => handleOpen(faq.id)}
            className={`border-b-0 transition-colors ${open === faq.id ? "text-black hover:!text-black" : ""}`}
          >
            {faq.question}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <div className='text-end'>
              <button onClick={() => handleDeleteFaq(faq.id)} className="text-red-500 ml-4"><MdDelete size={20} /></button>
              <button onClick={() => handleEditFaq(faq.id)} className="text-blue-500 ml-4"><BiSolidEdit size={20} /></button>
            </div>
            {open === faq.id && (
              <div className="pt-0 text-base font-normal">
                <p>{faq.answer}</p>
                {faq.image && <img src={URL.createObjectURL(faq.image)} alt="FAQ related" className="mt-2 w-96 h-52 object-cover" />}
                {faq.video && (
                  <video controls className="mt-2 w-96 h-52">
                    <source src={URL.createObjectURL(faq.video)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </AccordionBody>
        </Accordion>
      ))}

      {/* Add/Edit FAQ Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
          <div className="bg-white rounded-lg p-8 w-96 shadow-xl transform transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">{editId ? "Edit FAQ" : "Add FAQ"}</h2>
            <div className="mb-3">
              <label className="text-sm font-medium text-gray-600 block mb-2">Question</label>
              <input
                type="text"
                placeholder="Enter the question"
                value={newFaq.question}
                onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                className="border border-gray-300 p-2 w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label className="text-sm font-medium text-gray-600 block mb-2">Answer</label>
              <input
                type="text"
                placeholder="Enter the answer"
                value={newFaq.answer}
                onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                className="border border-gray-300 p-2 w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-3">
              <label className="text-sm font-medium text-gray-600 block mb-2">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full p-2 bg-gray-100 rounded-md focus:outline-none border border-gray-300 hover:border-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-600 block mb-2">Upload Video</label>
              <input
                type="file"
                name="video"
                onChange={handleFileChange}
                className="w-full p-2 bg-gray-100 rounded-md focus:outline-none border border-gray-300 hover:border-blue-500 transition duration-300"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button onClick={resetForm} className="bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 transition">
                Cancel
              </button>
              <button
                onClick={editId ? handleUpdateFaq : handleAddFaq}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
              >
                {editId ? "Update FAQ" : "Add FAQ"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Delete
            </h3>
            <p className="text-gray-600">
              Are you sure you want to delete this <span className='font-bold'>FAQ ?</span> This action cannot be
              undone.
            </p>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setDeleteConfirmationModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteFaq}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Faq;
