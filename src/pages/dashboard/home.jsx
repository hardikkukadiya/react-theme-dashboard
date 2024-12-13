 
import { FaChartLine } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { PiStorefrontBold } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import UserDashboardCard from "@/widgets/cards/UserDashboardCard";
import OrderTable from "@/widgets/Tables/OrderTable";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-white p-5 mt-2 mb-2 rounded-lg flex justify-between items-center shadow">
          <div>
            <div className="text-[#6c757d] text-[16px] font-[500]">Total Orders</div>
            <p className="text-[#172b4d] my-1 text-2xl">$4805</p>
            <p className="text-[#2dce89] text-sm">$34 from last week</p>
          </div>
          <span className="p-4 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white rounded-full font-bold cursor-pointer  hover:bg-gradient-to-l from-[#dd9183] to-[#ff416c]">
            <FiShoppingCart size={20} />
          </span>
        </div>

        <div className="bg-white  p-5 mt-2 mb-2 rounded-lg flex justify-between items-center shadow">
          <div>
            <div className="text-[#6c757d] text-[16px] font-[500]">
              Total Customers
            </div>
            <p className="text-[#172b4d] my-1 text-2xl">8.4K</p>
            <p className="text-[#f5365c] text-sm">$24 from last week</p>
          </div>
          <span className="p-4 bg-gradient-to-r from-[#8965e0] to-[#bc65e0] text-white rounded-full cursor-pointer hover:bg-gradient-to-l from-[#d4a6e7] to-[#8965e0]">
            <HiUsers size={20} />
          </span>
        </div>

        <div className="bg-white  p-5 mt-2 mb-2 rounded-lg flex justify-between items-center shadow">
          <div>
            <div className="text-[#6c757d] text-[16px] font-[500]">
              Store Visitors
            </div>
            <p className="text-[#172b4d] my-1 text-2xl">59K</p>
            <p className="text-[#2dce89] text-sm">$34 from last week</p>
          </div>
          <span className="p-4 bg-gradient-to-r from-[#2dce89] to-[#2dcecc] text-white rounded-full cursor-pointer hover:bg-gradient-to-l from-[#2dcecc] to-[#6afcbd]">
            <PiStorefrontBold size={20} />
          </span>
        </div>

        <div className="bg-white  p-5 mt-2 mb-2 rounded-lg flex justify-between items-center shadow">
          <div>
            <div className="text-[#6c757d] text-[16px] font-[500]">Bounce Rate</div>
            <p className="text-[#172b4d] my-1 text-2xl">34.46%</p>
            <p className="text-[#f5365c] text-sm">12.2% from last week</p>
          </div>
          <span className="p-4 bg-gradient-to-r from-[#f7971e] to-[#ffd200] text-white rounded-full hover:bg-gradient-to-l from-[#ffe15e] to-[#f7971e] cursor-pointer">
            <FaChartLine size={20} />
          </span>
        </div>
      </div>

      {/* User's  Crad */}
      <div><UserDashboardCard /></div>
      <div><OrderTable /></div>
    </div>
  );
};

export default Home;
