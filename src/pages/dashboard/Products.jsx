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
// import CreatableSelect from 'react-select/creatable';

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

  useEffect(() => {
    setTimeout(() => {
      setProducts(TABLE_ROWS);
      setLoading(false);
    }, 1000);
  }, []);

  const handleOpen = () => setOpen(!open);
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
  // const handleDeleteClick = (index) => {
  //   setDeleteIndex(index); // Set the index of the item to delete
  //   setOpen(true); // Open the confirmation dialog
  // };
  // const handleDelete = () => {
  //   if (deleteIndex !== null) {
  //     const updatedProducts = products.filter((_, i) => i !== deleteIndex);
  //     setProducts(updatedProducts);
  //     toast.success("Product deleted");
  //     setOpen(false); // Close the dialog
  //     setDeleteIndex(null); // Reset the deleteIndex
  //   }
  // };

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
    { img: "/img/one.png", name: "Product 1", amount: "$2,500", date: "Wed 3:00pm", status: "paid" },
    { img: "/img/two.png", name: "Product 2", amount: "$5,000", date: "Wed 1:00pm", status: "paid" }
  ];
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

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

  const categoriesOptions = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'home-appliances', label: 'Home Appliances' },
  ];
  const productsOptions = [
    { value: 'clothes', label: 'clothes' },
    { value: 'watch', label: 'watch' },
    { value: 'phones', label: 'phones' },
    { value: 'laptop', label: 'laptop' },
    { value: 'keyboard', label: 'keyboard' },
  ];

  const handleCreatableChange = (newValue, actionMeta) => {
    setFormData({ ...formData, categories: newValue });
  };
  const handleProductChange = (newValue, actionMeta) => {
    setFormData({ ...formData, typeProduct: newValue });
  };
  return (
    <div className="mt-5">
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-end gap-4 mt-2 md:flex-row md:items-center md:gap-8">
            <div className="flex w-full shrink-0 gap-2 md:w-max mr-2">
              <div className="w-full md:w-60">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleUploadClick}
                  className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100"
                >
                  <ArrowUpTrayIcon className="w-5 h-5" />
                  <span>Upload</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  onClick={handleDownloadClick}
                  className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  <span>Download</span>
                </button>
                <button className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100">
                  <FolderPlusIcon className="w-5 h-5" />
                  <span>Create folder</span>
                </button>
                <button className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100">
                  <FunnelIcon className="w-5 h-5" />
                  <span>Filter</span>
                </button>
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
                {products.map((product, index) => (
                  <tr className="border-b border-blue-gray-50" key={product.name}>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Zoom>
                          <Avatar src={product.img || "/default-image.png"} alt={product.name} size="md" />
                        </Zoom>
                        <Typography variant="small" className="font-bold w-[160px] truncate">
                          {product.name}
                        </Typography>
                      </div>
                    </td>

                    <td className="p-4">
                      <Typography variant="small" className="font-normal">
                        {product.amount}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" className="font-normal">
                        {product.date}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Chip size="sm" className="w-max" variant="ghost" value={product.status} color={product.status === "paid" ? "green" : product.status === "pending" ? "amber" : "red"} />
                    </td>
                    <td className="p-4">                      
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
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>        
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


      <Dialog 
        size="md"    
        open={edit} handler={() => setEdit(false)}>
        <DialogHeader>{editIndex !== null ? "Edit Product" : "Add Product"}</DialogHeader>
        <DialogBody className="h-[450px] overflow-y-auto custom">
          <form className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12 mt-3">
              <Typography variant="h6">Product Image</Typography>
              <div className="border border-dashed border-gray-500 relative  rounded-lg">
                <input type="file" onChange={handleimgChange} accept="image/png, image/gif, image/jpeg, image/jpg" className="cursor-pointer relative block opacity-0 p-10 z-50" />
                <div className="text-center mt-5 absolute top-0 right-0 left-0">
                  <div className="flex justify-center items-center mb-3 text-blue-600"><FiUpload size={35} /></div>
                  <div className="text-lg text-blue-600 font-normal">Select Files</div>
                </div>
              </div>
              {formData.img && (
                <img loading="lazy" src={formData.img} alt="Product" className="mt-2 w-20 h-20 object-cover" />
              )}
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Product Name</Typography>
              <Input name="name" value={formData.name} onChange={handleInputChange} size="lg" placeholder="Product Name" />
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Amount</Typography>
              <Input  name="amount" value={formData.amount} onChange={handleInputChange} size="lg" type="number" placeholder="Amount" />
            </div>
            <div className="col-span-12 mt-2">
              <Typography variant="h6">Descripation</Typography>
              <Input name="descripation" value={formData.descripation} onChange={handleInputChange} size="lg" placeholder="descripation" type="text" />
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">color</Typography>
              <Input name="color" value={formData.color} onChange={handleInputChange} size="lg" placeholder="color" type="color" />
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">size</Typography>
              <Input name="size" value={formData.size} onChange={handleInputChange} size="lg" placeholder="size" type="text" />
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Quantity</Typography>
              <Input name="quantity" value={formData.quantity} onChange={handleInputChange} size="lg" placeholder="quantity" type="number" />
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Weight</Typography>
              <Input name="weight" value={formData.weight} onChange={handleInputChange} size="lg" placeholder="Weight" />
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Stock status</Typography>
              <Select name="status" value={formData.status} onChange={(value) => setFormData({ ...formData, status: value })} size="lg">
                <Option value="paid">Paid</Option>
                <Option value="pending">Pending</Option>
                <Option value="cancelled">Cancelled</Option>
              </Select>
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Categories</Typography>
              {/* <CreatableSelect
                isMulti
                value={formData.categories}
                onChange={handleCreatableChange}
                options={categoriesOptions}
                placeholder="categories"
              /> */}
              <Select
                name="categories"
                value={formData.categories}
                onChange={(value) => setFormData({ ...formData, categories: value })}
                placeholder="select a categories"
                size="lg"
              >
                <Option value="Electronics">Electronics</Option>
                <Option value="Fashion">Fashion</Option>
                <Option value="Home Appliances">Home Appliances</Option>
              </Select>
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Type of product</Typography>
              {/* <CreatableSelect
                isMulti
                value={formData.typeProduct}
                onChange={handleProductChange}
                options={productsOptions}
                placeholder="typeProduct"
              /> */}
              <Select
                name="Product"
                value={formData.typeProduct}
                onChange={(value) => setFormData({ ...formData, typeProduct: value })}
                placeholder="select a Product"
                size="lg"
              >
                <Option value="clothe">clothe</Option>
                <Option value="phones">phones</Option>
                <Option value="watch">watch</Option>
                <Option value="laptop">laptop</Option>                
              </Select>
            </div>       
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Gender</Typography>
              <Select
                name="gender"
                value={formData.gender}
                onChange={(value) => setFormData({ ...formData, gender: value })}
                placeholder="select a gender"
                size="lg"                
              >                
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Special Price</Typography>
              <Input name="specialPrice" value={formData.specialPrice} onChange={handleInputChange} size="lg" placeholder="price" />
            </div>
            <div className="col-span-6 mt-2">
              <Typography variant="h6">Date</Typography>
              <Input name="date" value={formData.date} onChange={handleInputChange} size="lg" type="date" />
            </div> 
            <div className="col-span-12 mt-2">
              <Typography variant="h6">country</Typography>
              <Input name="country" value={formData.country} onChange={handleInputChange} size="lg" placeholder="country" />
            </div>           
                       
          </form>
        </DialogBody>
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
