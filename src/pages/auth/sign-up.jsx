import {
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { FaFacebook, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    // <section className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
    //   <div className="w-full max-w-[525px] px-4">
    //     <div className="bg-white rounded-lg relative overflow-hidden py-16 px-6 sm:px-10 md:px-[60px] shadow-lg mx-auto text-center">
    //       <div className="text-2xl text-[#577fec] mb-7">Join Us Today</div>

    //       <form>
    //         <div className="mb-6">
    //           <input
    //             type="text"
    //             placeholder="Enter your Email"
    //             className="
    //           w-full
    //           rounded-md
    //           border
    //           border-[#E9EDF4]
    //           py-3
    //           px-5
    //           bg-[#FCFDFE]
    //           text-base text-body-color
    //           placeholder-[#ACB6BE]
    //           outline-none
    //           focus-visible:shadow-none
    //           focus:border-primary
    //         "
    //           />
    //         </div>

    //         <div className="mb-6">
    //           <input
    //             type="password"
    //             placeholder="Enter Password Here"
    //             className="
    //           w-full
    //           rounded-md
    //           border
    //           border-[#E9EDF4]
    //           py-3
    //           px-5
    //           bg-[#FCFDFE]
    //           text-base text-body-color
    //           placeholder-[#ACB6BE]
    //           outline-none
    //           focus-visible:shadow-none
    //           focus:border-primary
    //         "
    //           />
    //         </div>

    //         <div className="mb-6 flex items-center justify-start">
    //           <Checkbox
    //             label={
    //               <Typography
    //                 variant="small"
    //                 color="gray"
    //                 className="flex items-center justify-start font-medium"
    //               >
    //                 I agree to the&nbsp;
    //                 <Link
    //                   to="/"
    //                   className="font-normal text-black transition-colors hover:text-blue-500 underline"
    //                 >
    //                   Terms and Conditions
    //                 </Link>
    //               </Typography>
    //             }
    //             containerProps={{ className: "-ml-2.5" }}
    //           />
    //         </div>

    //         <div className="mb-10">
    //           <input
    //             type="submit"
    //             value="Register now"
    //             className="
    //           w-full
    //           rounded-md
    //           border
    //           border-primary
    //           py-3
    //           px-5
    //           mt-5
    //           bg-primary
    //           text-base
    //           text-white
    //           cursor-pointer
    //           transition
    //           bg-[#577fec]
    //         "
    //           />
    //         </div>
    //       </form>

    //       <p className="text-base mb-6 text-[#adadad]">Connect With</p>
    //       <div className="flex justify-between gap-4 mb-12">
    //         <div className="w-full">
    //           <div className="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90">
    //             <FaFacebookF size={20} color="white" />
    //           </div>
    //         </div>

    //         <div className="w-full">
    //           <div className="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90">
    //             <FaTwitter size={20} color="white" />
    //           </div>
    //         </div>

    //         <div className="w-full">
    //           <div className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90">
    //             <IoLogoGoogle size={20} color="white" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-6">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-2 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">

          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign Up</h1>
            </div>
            <div>
              <div className="py-8 text-base space-y-4 text-gray-700">
                <div className="relative">
                  <input autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Enter Name" />
                  <label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Name</label>
                </div>
                <div className="relative">
                  <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                  <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div className="relative">
                  <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="relative">
                  <input autocomplete="off" id="conformPassword" name="conformPassword" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Conform Password" />
                  <label for="conformPassword" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Conform Password</label>
                </div>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-sm mb-2">
            <p>Have an account ?</p>
            <Link to={"/auth/auth/sign-in"} className="ml-2 underline text-blue-700 cursor-pointer">Login</Link>
          </div>
          <div className="w-full flex justify-center gap-2">
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <div>
                <FcGoogle size={25} />
              </div>
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <div className="text-blue-600">
                <FaFacebook size={25} />
              </div>
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <div className="text-black">
                <IoLogoApple size={25} />
              </div>
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">

              <div className="text-blue-600">
                <FaTwitter size={25} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SignUp;
