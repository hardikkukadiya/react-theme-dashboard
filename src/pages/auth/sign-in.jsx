import { FaFacebook, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";


export function SignIn() {
  return (
    // <section className="bg-gray-100 min-h-screen flex items-center justify-center">
    //   <div className="w-full max-w-[525px] p-5">
    //     <div className="
    //   mx-auto text-center bg-white rounded-lg relative overflow-hidden py-16 px-6
    //   sm:px-10 md:px-[60px] shadow-lg
    // ">
    //       <span className="text-2xl text-[#577fec]">Sign In</span>
    //       <div className="mb-10 text-center">
    //         <div className="flex justify-center items-center gap-3">
    //           <img loading="lazy" src="/img/khanakLogo.png" alt="Khanak Logo" className="h-12 w-12" />
    //           <span className="text-xl">Khanak Dashboard</span>
    //         </div>
    //       </div>
    //       <form>
    //         <div className="mb-6">
    //           <input
    //             type="name"
    //             placeholder="Enter your name"
    //             className="
    //           w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]
    //           text-base text-body-color placeholder-[#ACB6BE] outline-none
    //           focus-visible:shadow-none focus:border-primary
    //         "
    //           />
    //         </div>
    //         <div className="mb-6">
    //           <input
    //             type="text"
    //             placeholder="Enter your Email"
    //             className="
    //           w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]
    //           text-base text-body-color placeholder-[#ACB6BE] outline-none
    //           focus-visible:shadow-none focus:border-primary
    //         "
    //           />
    //         </div>
    //         <div className="mb-6">
    //           <input
    //             type="password"
    //             placeholder="Enter Password Here"
    //             className="
    //           w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]
    //           text-base text-body-color placeholder-[#ACB6BE] outline-none
    //           focus-visible:shadow-none focus:border-primary
    //         "
    //           />
    //         </div>
    //         <div className="mb-10">
    //           <input
    //             type="submit"
    //             value="Sign In"
    //             className="
    //           w-full rounded-md py-3 px-5 bg-[#577fec] text-base text-white cursor-pointer
    //           transition hover:bg-blue-600
    //         "
    //           />
    //         </div>
    //       </form>
    //       <p className="text-base mb-6 text-[#adadad]">Connect With</p>
    //       <div className="flex justify-between -mx-2 mb-12">
    //         <div className="px-2 w-full">
    //           <div className="
    //         flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90
    //       ">
    //             <FaFacebookF size={20} color="white" />
    //           </div>
    //         </div>
    //         <div className="px-2 w-full">
    //           <div className="
    //         flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90
    //       ">
    //             <FaTwitter size={20} color="white" />
    //           </div>
    //         </div>
    //         <div className="px-2 w-full">
    //           <div className="
    //         flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90
    //       ">
    //             <IoLogoGoogle size={20} color="white" />
    //           </div>
    //         </div>
    //       </div>
    //       <a className="text-base inline-block mb-2 text-[#adadad] hover:underline hover:text-blue-500">
    //         Forget Password?
    //       </a>
    //       <p className="text-base text-[#adadad]">
    //         Not a member yet?
    //         <Link to={"/auth/auth/sign-up"} className="text-primary hover:text-blue-500 hover:underline">
    //           Sign Up
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-2 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">

          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <div>
              <div className="py-8 text-base space-y-4 text-gray-700">
                <div className="relative">
                  <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                  <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div className="relative">
                  <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-sm mb-2">
            <p>Do not Have an account ?</p>
            <Link to={"/auth/auth/sign-up"} className="ml-2 underline text-blue-700 cursor-pointer">Register Here</Link>
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

export default SignIn;
