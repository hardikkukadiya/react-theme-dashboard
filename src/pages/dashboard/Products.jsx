import React, { useEffect, useRef, useState } from "react";
import {
    ArrowUpTrayIcon,
    FolderPlusIcon,
    FunnelIcon,
} from "@heroicons/react/24/solid";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card, CardHeader, Typography, Button, CardBody, Chip, CardFooter, Avatar, IconButton, Input, DialogFooter, DialogBody, DialogHeader, Dialog,
    Select, Option, DialogTitle, DialogContent, DialogContentText, DialogActions
} from "@material-tailwind/react";
import html2canvas from "html2canvas";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FiUpload } from "react-icons/fi";
import { TbLayoutGridFilled } from "react-icons/tb";
import { FaList } from "react-icons/fa6";
import ProductsDemo from "./ProductsDemo";
// import CreatableSelect from 'react-select/creatable';
const ITEMS_PER_PAGE = 10;

const Products = () => {
    const fileInputRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [view, setView] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        img: "",
        name: "",
        amount: "",
        date: "",
        status: "pending"
    });
    const [editIndex, setEditIndex] = useState(null);
    const [isGridView, setIsGridView] = useState(false);
    const handleToggleView = (view) => {
        setIsGridView(view === 'grid');
    };
    useEffect(() => {
        setTimeout(() => {
            setProducts(TABLE_ROWS);
            setLoading(false);
        }, 1000);
    }, []);
    const handleView = (index) => {
        setFormData(products[index]);
        setView(true);
    };
    const handleEdit = (index) => {
        setFormData(products[index]);
        setEditIndex(index);
        setEdit(true);
    };

    const handleDelete = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        toast.success("Product deleted");
    };
// const handleDelete = (index) => {
//         const updatedProducts = products.filter((_, i) => i !== index);
//         setProducts(updatedProducts);
//         toast.success("Product deleted");

//         // Adjust page if the current page becomes empty after deletion
//         if (updatedProducts.length < currentPage * ITEMS_PER_PAGE && currentPage > 1) {
//             setCurrentPage((prevPage) => prevPage - 1);
//         }
//     };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        if (editIndex !== null) {
            const updatedProducts = products.map((product, index) =>
                index === editIndex ? formData : product
            );
            setProducts(updatedProducts);
            toast.success("Product edited");
        } else {
            setProducts([...products, formData]);
            toast.success("Product added");
        }
        setEdit(false);
        setEditIndex(null);
        setFormData({ img: "", name: "", amount: "", date: "", status: "pending" });
    };
    const handleimgChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData((prev) => ({ ...prev, img: reader.result }));
            };
            reader.readAsDataURL(file);
        } else {
            toast.error("Error occurred, try again later");
        }
    };

    const TABLE_HEAD = ["Product Name", "Amount", "Date", "Status", "Action"];
    const TABLE_ROWS = [
        { img: "/img/one.png", name: "Face Wash", amount: "2,500", date: "Wed 3:00pm", status: "paid" },
        { img: "/img/two.png", name: "Nail Paint",amount: "5,000", date: "Wed 1:00pm", status: "paid" },
        { img: "/img/three.png", name: "Earrings",amount: "5,000", date: "Wed 1:00pm", status: "pending" },
        { img: "/img/four.png", name: "Daisy Love spray" ,amount: "5,000", date: "Wed 1:00pm", status: "cancel" },
        { img: "/img/five.png", name: "Dimond Ring", amount: "5,000", date: "Wed 1:00pm", status: "pending" },
        { img: "/img/six.png", name: "Bag", amount: "5,000", date: "Wed 1:00pm", status: "cancel" },
        { img: "/img/seven.png", name: "Face Serum", amount: "5,000", date: "Wed 1:00pm", status: "cancel" },
        { img: "/img/eight.png", name: "Dimond Earrings", amount: "5,000", date: "Wed 1:00pm", status: "paid" },
        { img: "/img/2020.png", name: "Google Pixel", amount: "5,000", date: "Wed 1:00pm", status: "cancel" },       
    ];
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            toast.success("successfully uploaded");
        } else {
            toast.error("error occurred try again later");
        }
    };
    const handleDownloadClick = () => {
        html2canvas(document.body).then((canvas) => {
            const link = document.createElement("a");
            link.download = "page-screenshot.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    };
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const currentData = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div className="mt-5">
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-100 rounded-full inline-flex">
                        <button
                            className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 rounded-full px-4 py-2 ${isGridView ? '' : 'bg-white text-blue-400'}`}
                            id="list"
                            onClick={() => handleToggleView('list')}
                        >
                            <div className="w-4 h-4 mr-2">
                                <FaList />
                            </div>
                            <span>List</span>
                        </button>
                        <button
                            className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 rounded-full px-4 py-2 focus:bg-white ${isGridView ? 'bg-white text-blue-400' : ''}`}
                            id="grid"
                            onClick={() => handleToggleView('grid')}
                        >
                            <div className="w-4 h-4 mr-2">
                                <TbLayoutGridFilled />
                            </div>
                            <span>Grid</span>
                        </button>

                    </div>
                    <div className="mb-4 flex flex-col justify-end gap-4 mt-2 md:flex-row md:items-center md:gap-8">
                        <div className="flex w-full shrink-0 gap-2 md:w-max mr-2 flex-col md:flex-row">
                            <div className="w-full md:w-60">
                                <Input
                                    label="Search"
                                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                />
                            </div>                        
                            <div className="flex flex-wrap gap-2">
                                <button
                                    className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100">
                                    <ArrowUpTrayIcon className="w-5 h-5" />
                                    <span>Upload</span>
                                </button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />

                                {/* Download Button */}
                                <button
                                    onClick={handleDownloadClick}
                                    className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100"
                                >
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                    <span>Download</span>
                                </button>

                                {/* Create Folder Button */}
                                <button className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100">
                                    <FolderPlusIcon className="w-5 h-5" />
                                    <span>Create folder</span>
                                </button>

                                {/* Filter Button */}
                                <button className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100">
                                    <FunnelIcon className="w-5 h-5" />
                                    <span>Filter</span>
                                </button>

                                {/* Add Product Button */}
                                <button
                                    onClick={() => setEdit(true)}
                                    className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100"
                                >
                                    <FolderPlusIcon className="w-5 h-5" />
                                    <span>Add Product</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                {isGridView ? (
                    <div>
                        <ProductsDemo products={products} />
                    </div>
                ) : (
                    <div>
                        <CardBody className="overflow-scroll px-0">
                            {loading ? (
                                <div className="animate-pulse">
                                    {[...Array(6)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center py-4 px-6 border-b border-blue-gray-50"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                                                <div className="h-6 w-48 bg-gray-200 rounded"></div>
                                            </div>
                                            <div className="h-6 w-24 bg-gray-200 rounded"></div>
                                            <div className="h-6 w-20 bg-gray-200 rounded"></div>
                                            <div className="h-6 w-20 bg-gray-200 rounded"></div>
                                            <div className="h-6 w-16 bg-gray-200 rounded"></div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <table className="w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {TABLE_HEAD.map((head) => (
                                                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                                    <Typography variant="small" className="font-normal leading-none opacity-70">
                                                        {head}
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentData.map((product, index) => (
                                            <tr className="border-b border-blue-gray-50" key={index}>
                                                {/* Table row content */}
                                                <td className="p-4">
                                                    <div className="flex items-center gap-3">
                                                        <Zoom>
                                                        <Avatar
                                                            src={product.img || "/default-image.png"}
                                                            alt={product.name}
                                                            size="md"
                                                            />
                                                        </Zoom>
                                                        <Typography
                                                            variant="small"
                                                            className="font-bold w-[160px] truncate"
                                                        >
                                                            {product.name}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <Typography variant="small" className="font-normal">
                                                       $ {product.amount}
                                                    </Typography>
                                                </td>
                                                <td className="p-4">
                                                    <Typography variant="small" className="font-normal">
                                                        {product.date}
                                                    </Typography>
                                                </td>
                                                <td className="p-4">
                                                    <Chip
                                                        size="sm"
                                                        className="w-max"
                                                        variant="ghost"
                                                        value={product.status}
                                                        color={
                                                            product.status === "paid"
                                                                ? "green"
                                                                : product.status === "pending"
                                                                    ? "amber"
                                                                    : "red"
                                                        }
                                                    />
                                                </td>
                                                <td className="p-4 flex gap-2">
                                                    <IconButton onClick={() => handleEdit(index)} variant="text">
                                                        <FaRegEdit color="#22C55E" size={18} />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleView(index)} variant="text">
                                                        <AiOutlineEye color="#2377FC" size={18} />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleDelete(index)} variant="text">
                                                        <RiDeleteBinLine color="#FF5200" size={18} />
                                                    </IconButton>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </CardBody>

                        {products.length > ITEMS_PER_PAGE && (
                            <CardFooter className="flex flex-col items-center justify-between border-t border-blue-gray-50 p-4 gap-4 md:flex-row md:gap-0">
                                {/* Previous Button */}
                                <Button
                                    variant="outlined"
                                    size="sm"
                                    onClick={handlePrevious}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </Button>

                                {/* Pagination Buttons */}
                                <div className="flex items-center gap-2">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <IconButton
                                            key={index}
                                            variant={currentPage === index + 1 ? "outlined" : "text"}
                                            size="sm"
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </IconButton>
                                    ))}
                                </div>

                                {/* Next Button */}
                                <Button
                                    variant="outlined"
                                    size="sm"
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </Button>
                            </CardFooter>
                        )}
                    </div>
                )}
            </Card>

            <Dialog open={view} handler={() => setView(false)}>
                <DialogHeader>View Product Details</DialogHeader>
                <DialogBody className="h-[450px] overflow-y-auto custom">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12">
                            <div className="flex justify-center items-center">
                                <Zoom>
                                    <Avatar src={formData.img || "/default-image.png"} alt={formData.name} size="xxl" />
                                </Zoom>
                            </div>
                        </div>
                        <div className="col-span-4 ">
                            <Typography className="text-black" variant="h6">Product Name</Typography>
                            <div className="font-semibold">{formData.name || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Amount</Typography>
                            <div className="font-semibold">{formData.amount || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Descripation</Typography>
                            <div className="font-semibold">{formData.descripation || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Color</Typography>
                            <div className="font-semibold">{formData.color || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Size</Typography>
                            <div className="font-semibold">{formData.size || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Quantity</Typography>
                            <div className="font-semibold">{formData.quantity || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Weight</Typography>
                            <div className="font-semibold">{formData.weight || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Stock status</Typography>
                            <div className="font-semibold">{formData.status || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">categories</Typography>
                            <div className="font-semibold">
                                {/* {formData.categories
                  ? formData.categories.map((category) => category.label || category.value).join(", ")
                  : "-"} */}
                                {formData.categories || "-"}
                            </div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Type of product</Typography>
                            <div className="font-semibold">{formData.typeProduct || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Gender</Typography>
                            <div className="font-semibold">{formData.gender || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Special Price</Typography>
                            <div className="font-semibold">{formData.specialPrice || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">country</Typography>
                            <div className="font-semibold">{formData.country || "-"}</div>
                        </div>
                        <div className="col-span-4">
                            <Typography className="text-black" variant="h6">Date</Typography>
                            <div className="font-semibold">{formData.date || "-"}</div>
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="outlined" color="red" onClick={() => setView(false)}>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>

            <Dialog size="md" open={edit} handler={() => setEdit(false)}>
                <DialogHeader>{editIndex !== null ? "Edit Product" : "Add Product"}</DialogHeader>
                <DialogBody className="h-[400px] overflow-y-auto custom">
                    <form className="grid grid-cols-12 gap-x-4 gap-y-6">
                        {/* Product Image Section */}
                        <div className="col-span-12 mt-3">
                            <Typography variant="h6">Product Image</Typography>
                            <div className="border border-dashed border-gray-500 relative rounded-lg">
                                <input
                                    type="file"
                                    onChange={handleimgChange}
                                    accept="image/png, image/gif, image/jpeg, image/jpg"
                                    className="cursor-pointer relative block opacity-0 p-10 z-50"
                                />
                                <div className="text-center mt-5 absolute top-0 right-0 left-0">
                                    <div className="flex justify-center items-center mb-3 text-blue-600">
                                        <FiUpload size={35} />
                                    </div>
                                    <div className="text-lg text-blue-600 font-normal">Select Files</div>
                                </div>
                            </div>
                            {formData.img && (
                                <img loading="lazy" src={formData.img} alt="Product" className="mt-2 w-20 h-20 object-cover" />
                            )}
                        </div>

                        {/* Product Name */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Product Name</Typography>
                            <Input name="name" value={formData.name} onChange={handleInputChange} size="lg" placeholder="Product Name" />
                        </div>

                        {/* Amount */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Amount</Typography>
                            <Input name="amount" value={formData.amount} onChange={handleInputChange} size="lg" type="number" placeholder="Amount" />
                        </div>

                        {/* Description */}
                        <div className="col-span-12 mt-2">
                            <Typography variant="h6">Description</Typography>
                            <Input name="description" value={formData.description} onChange={handleInputChange} size="lg" placeholder="Description" type="text" />
                        </div>

                        {/* Color */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Color</Typography>
                            <Input name="color" value={formData.color} onChange={handleInputChange} size="lg" placeholder="Color" type="color" />
                        </div>

                        {/* Size */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Size</Typography>
                            <Input name="size" value={formData.size} onChange={handleInputChange} size="lg" placeholder="Size" type="text" />
                        </div>

                        {/* Quantity */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Quantity</Typography>
                            <Input name="quantity" value={formData.quantity} onChange={handleInputChange} size="lg" placeholder="Quantity" type="number" />
                        </div>

                        {/* Weight */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Weight</Typography>
                            <Input name="weight" value={formData.weight} onChange={handleInputChange} size="lg" placeholder="Weight" />
                        </div>

                        {/* Stock Status */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Stock Status</Typography>
                            <Select name="status" value={formData.status} onChange={(value) => setFormData({ ...formData, status: value })} size="lg">
                                <Option value="paid">Paid</Option>
                                <Option value="pending">Pending</Option>
                                <Option value="cancelled">Cancelled</Option>
                            </Select>
                        </div>

                        {/* Categories */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Categories</Typography>
                            <Select
                                name="categories"
                                value={formData.categories}
                                onChange={(value) => setFormData({ ...formData, categories: value })}
                                placeholder="Select a category"
                                size="lg"
                            >
                                <Option value="Electronics">Electronics</Option>
                                <Option value="Fashion">Fashion</Option>
                                <Option value="Home Appliances">Home Appliances</Option>
                            </Select>
                        </div>

                        {/* Type of Product */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Type of Product</Typography>
                            <Select
                                name="productType"
                                value={formData.typeProduct}
                                onChange={(value) => setFormData({ ...formData, typeProduct: value })}
                                placeholder="Select a product"
                                size="lg"
                            >
                                <Option value="clothe">Clothes</Option>
                                <Option value="phones">Phones</Option>
                                <Option value="watches">Watches</Option>
                                <Option value="laptops">Laptops</Option>
                            </Select>
                        </div>

                        {/* Gender */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Gender</Typography>
                            <Select
                                name="gender"
                                value={formData.gender}
                                onChange={(value) => setFormData({ ...formData, gender: value })}
                                placeholder="Select gender"
                                size="lg"
                            >
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                            </Select>
                        </div>

                        {/* Special Price */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Special Price</Typography>
                            <Input name="specialPrice" value={formData.specialPrice} onChange={handleInputChange} size="lg" placeholder="Special Price" />
                        </div>

                        {/* Date */}
                        <div className="col-span-12 sm:col-span-6 mt-2">
                            <Typography variant="h6">Date</Typography>
                            <Input name="date" value={formData.date} onChange={handleInputChange} size="lg" type="date" />
                        </div>

                        {/* Country */}
                        <div className="col-span-12 mt-2">
                            <Typography variant="h6">Country</Typography>
                            <Input name="country" value={formData.country} onChange={handleInputChange} size="lg" placeholder="Country" />
                        </div>
                    </form>
                </DialogBody>

                {/* Dialog Footer */}
                <DialogFooter className="flex justify-end">
                    <Button onClick={handleSave} className="mr-2" color="blue">{editIndex !== null ? "Save" : "Add"}</Button>
                    <Button onClick={() => setEdit(false)} className="ml-2" color="red">Cancel</Button>
                </DialogFooter>
            </Dialog>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this data?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="primary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <ToastContainer position="top-right" autoClose={2500} />
        </div>
    );
};

export default Products;
