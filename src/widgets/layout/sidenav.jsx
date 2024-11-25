import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";
import {
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "../../context";

export function Sidenav({ brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };
  
  return (
    // <aside
    //   className={`${sidenavTypes[sidenavType]} ${
    //     openSidenav ? "translate-x-0" : "-translate-x-80"
    //   } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 overflow-y-auto custom`}
    // >
    //   <div
    //     className={`relative`}
    //   >
    //     <Link to="/" className="py-6 px-8 text-center">
    //       <Typography
    //         variant="h6"
    //         color={sidenavType === "dark" ? "white" : "blue-gray"}
    //       >
    //         {brandName}
    //       </Typography>
    //     </Link>
    //     <IconButton
    //       variant="text"
    //       color="white"
    //       size="sm"
    //       ripple={false}
    //       className="absolute top-5 right-5 grid rounded-br-none rounded-tl-none xl:hidden"
    //       onClick={() => setOpenSidenav(dispatch, false)}
    //     >
    //       <CgCloseO className="h-5 w-5 text-black" />
    //     </IconButton>
    //   </div>
    //   <div className="m-4">
    //     {routes.map(({ layout, title, pages }, key) => (
    //       <ul key={key} className="mb-4 flex flex-col gap-1">
    //         {title && (
    //           <li className="mx-3.5 mt-4 mb-2">
    //             <Typography
    //               variant="small"
    //               color={sidenavType === "dark" ? "white" : "blue-gray"}
    //               className="font-black uppercase opacity-75"
    //             >
    //               {title}
    //             </Typography>
    //           </li>
    //         )}
    //         {pages.map(({ icon, name, path }) => (
    //           <li key={name}>
    //             <NavLink to={`/${layout}${path}`}>
    //               {({ isActive }) => (
    //                 <Button
    //                   variant={isActive ? "gradient" : "text"}
    //                   color={
    //                     isActive
    //                       ? sidenavColor
    //                       : sidenavType === "dark"
    //                       ? "white"
    //                       : "blue-gray"
    //                   }                    
    //                   className="flex items-center gap-4 px-4 capitalize"
    //                   fullWidth>
    //                   {icon}
    //                   <Typography
    //                     color="inherit"
    //                     className="font-medium capitalize"
    //                   >
    //                     {name}
    //                   </Typography>
    //                 </Button>
    //               )}
    //             </NavLink>
    //           </li>
    //         ))}
    //       </ul>
    //     ))}
    //   </div>
    // </aside>
    
    
    <aside
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-y-0 left-0 z-50 h-full w-72 bg-white  transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 overflow-y-auto custom`}
    >
      {/* Header Section */}
      <div className="relative flex items-center justify-between py-6 px-6 ">
        <Link to="/" className="text-center px-8 ">
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
            className="text-lg font-semibold"
          >
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute top-5 right-5 grid xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <CgCloseO className="h-5 w-5 text-black" />
        </IconButton>
      </div>

      {/* Navigation Links */}
      <div className="p-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {/* Section Title */}
            {title && (
              <li className="mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-bold uppercase opacity-75 px-4"
                >
                  {title}
                </Typography>
              </li>
            )}
            {/* Navigation Items */}
            {/* {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                            ? "white"
                            : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography color="inherit" className="font-medium">
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))} */}

            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "blue-gray"
                      }                    
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth>
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>

  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Khanak Dashboard",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
