import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";

// Reusable component for a user/customer list item
const UserListItem = ({ imgSrc, name, email }) => (
  <li className="flex items-center justify-between">
    <div className="flex items-center">
      <Zoom>
        <img
          src={imgSrc}
          loading="lazy"
          alt="Customers"
          className="border border-blue-gray-50 bg-blue-gray-50/50 object-cover h-10 w-10"
        />
      </Zoom>
      <div className="ml-3">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
    <div className="flex space-x-2">
      <Link to={"/dashboard/email"} className="p-1.5 bg-gray-200 rounded-full">
        <MdEmail size={13} />
      </Link>
    </div>
  </li>
);

// Reusable component for a product list item
const ProductListItem = ({ imgSrc, productName, sales, price }) => (
  <li className="flex justify-between items-center">
    <div className="flex items-center">
      <Zoom>
        <img loading="lazy" className="w-10 h-10" src={imgSrc} alt={productName} />
      </Zoom>
      <div className="ml-3">
        <p className="font-medium">{productName}</p>
        <p className="text-sm text-gray-500">{sales} Sales</p>
      </div>
    </div>
    <p className="font-semibold">{price}</p>
  </li>
);

// Reusable component for social media list item
const SocialListItem = ({ imgSrc, platform, count, growth }) => (
  <li className="flex justify-between items-center">
    <div className="flex items-center">
      <Zoom>
        <img loading="lazy" className="w-6 h-6" src={imgSrc} alt={platform} />
      </Zoom>
      <p className="ml-3 font-medium">{platform}</p>
    </div>
    <div>
      <p className="font-semibold">{count}</p>
      <p
        className={`text-sm ${growth > 0 ? "text-green-500" : "text-red-500"}`}
      >
        {growth}% {growth > 0 ? "↑" : "↓"}
      </p>
    </div>
  </li>
);

const UserDashboardCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ">
  
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">New Customers</div>
          <div>
            <Menu placement="left-start">
              <MenuHandler>
                <div className="cursor-pointer">
                  <HiDotsHorizontal size={20} />
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <hr className="border-blue-gray-200 my-2" />
        <div className="h-[300px] md:h-[400px] overflow-y-auto custom px-2">
          <ul className="space-y-4 mt-2">
            <UserListItem
              imgSrc="/img/team-4.jpeg"
              name="Emy Jackson"
              email="emy_jac@xyz.com"
            />           
          </ul> <hr className="my-2" />
          <ul className="space-y-4 mt-2">
            <UserListItem
              imgSrc="/img/team-4.jpeg"
              name="Emy Jackson"
              email="emy_jac@xyz.com"
            />           
          </ul><hr className="my-2" />
          <ul className="space-y-4 mt-2">
            <UserListItem
              imgSrc="/img/team-4.jpeg"
              name="Emy Jackson"
              email="emy_jac@xyz.com"
            />           
          </ul><hr className="my-2" />          
          <ul className="space-y-4 mt-2">
            <UserListItem
              imgSrc="/img/team-4.jpeg"
              name="Emy Jackson"
              email="emy_jac@xyz.com"
            />           
          </ul><hr className="my-2" />          
          <ul className="space-y-4 mt-2">
            <UserListItem
              imgSrc="/img/team-4.jpeg"
              name="Emy Jackson"
              email="emy_jac@xyz.com"
            />           
          </ul><hr className="my-2" />
          <ul className="space-y-4 mt-2">
            <UserListItem
              imgSrc="/img/team-4.jpeg"
              name="Emy Jackson"
              email="emy_jac@xyz.com"
            />           
          </ul><hr className="my-2" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Top Products</div>
          <div>
            <Menu placement="left-start">
              <MenuHandler>
                <div className="cursor-pointer">
                  <HiDotsHorizontal size={20} />
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <hr className="border-blue-gray-200 my-2" />
        <div className="h-[300px] md:h-[400px] overflow-y-auto custom px-2">
          <ul className="space-y-4 mt-2">
            <ProductListItem
              imgSrc="/img/yellow.png"
              productName="Yellow Tshirt"
              sales={278}
              price="$24K.00"
            />
          </ul><hr className="my-2" />
          <ul className="space-y-4 mt-2">
            <ProductListItem
              imgSrc="/img/yellow.png"
              productName="Yellow Tshirt"
              sales={278}
              price="$24K.00"
            />
          </ul><hr className="my-2" />
          <ul className="space-y-4 mt-2">
            <ProductListItem
              imgSrc="/img/yellow.png"
              productName="Yellow Tshirt"
              sales={278}
              price="$24K.00"
            />
          </ul><hr className="my-2" />
          <ul className="space-y-4 mt-2">
            <ProductListItem
              imgSrc="/img/yellow.png"
              productName="Yellow Tshirt"
              sales={278}
              price="$24K.00"
            />
          </ul><hr className="my-2" />
          <ul className="space-y-4 mt-2">
            <ProductListItem
              imgSrc="/img/yellow.png"
              productName="Yellow Tshirt"
              sales={278}
              price="$24K.00"
            />
          </ul><hr className="my-2" />
          <ul className="space-y-4 mt-2">
            <ProductListItem
              imgSrc="/img/yellow.png"
              productName="Yellow Tshirt"
              sales={278}
              price="$24K.00"
            />
          </ul><hr className="my-2" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Social Leads</div>
          <div>
            <Menu placement="left-start">
              <MenuHandler>
                <div className="cursor-pointer">
                  <HiDotsHorizontal size={20} />
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <hr className="border-blue-gray-200 my-2" />
        <div className="h-[300px] md:h-[400px] overflow-y-auto custom px-2">
          <ul className="space-y-4">
            <SocialListItem
              imgSrc="/img/twitter.png"
              platform="Twitter"
              count={175}
              growth={45}
            />
          </ul>
          <hr className="my-2" />
          <ul className="space-y-4">
            <SocialListItem
              imgSrc="/img/twitter.png"
              platform="Twitter"
              count={175}
              growth={45}
            />
          </ul>
          <hr className="my-2" />
          <ul className="space-y-4">
            <SocialListItem
              imgSrc="/img/twitter.png"
              platform="Twitter"
              count={175}
              growth={45}
            />
          </ul>
          <hr className="my-2" />
          <ul className="space-y-4">
            <SocialListItem
              imgSrc="/img/twitter.png"
              platform="Twitter"
              count={175}
              growth={45}
            />
          </ul>
          <hr className="my-2" />
          <ul className="space-y-4">
            <SocialListItem
              imgSrc="/img/twitter.png"
              platform="Twitter"
              count={175}
              growth={45}
            />
          </ul>
          <hr className="my-2" />
          <ul className="space-y-4">
            <SocialListItem
              imgSrc="/img/twitter.png"
              platform="Twitter"
              count={175}
              growth={45}
            />
          </ul>
          <hr className="my-2" />
        </div>
      </div>
    </div>
    
  );
};

export default UserDashboardCard;
