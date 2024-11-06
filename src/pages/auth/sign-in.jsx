import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";


export function SignIn() {
  return (
       <section className="bg-gray-100 py-10 lg:py-[40px]">
            <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className=" max-w-[525px] mx-auto  text-center bg-white
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               ">
                                <span className="text-2xl text-[#577fec]">Sign In</span>
                <div className="mb-10 md:mb-10 text-center">
                  <div                
                    className="inline-block mx-auto">                                         
                    <div className="flex justify-center items-center text-center gap-3">                  
                    <img loading="lazy" src="/img/khanakLogo.png" alt=""  className="h-12 w-12"/>
                      <span className="text-xl">Khanak Dashboard</span>
                    </div>
                                     </div>
                                </div>
                <form>
                  <div className="mb-6">
                    <input
                      type="name"
                      placeholder="Enter your name"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Enter your Email"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Enter Password Here"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    />
                  </div>
                  <div className="mb-10">
                    <input
                      type="submit"
                      value="Sign In"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-primary
                        py-3
                        px-5
                        bg-primary
                        text-base text-white
                        cursor-pointer
                        transition
                        bg-[#577fec]
                        "
                    />
                  </div>
                </form>
                <p className="text-base mb-6 text-[#adadad]">Connect With</p>
                <div className="flex justify-between -mx-2 mb-12">
                  <div className="px-2 w-full">
                    <div
                       
                      className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#4064AC]
                        hover:bg-opacity-90
                        "
                    >
                      <span><FaFacebookF size={20} color="white"/></span>
                    </div>
                  </div>
                  <div className="px-2 w-full">
                    <div
                       
                      className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#1C9CEA]
                        hover:bg-opacity-90
                        "
                    >
                      <span><FaTwitter size={20} color="white" /></span>
                    </div>
                  </div>
                  <div className="px-2 w-full">
                    <div
                       
                      className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#D64937]
                        hover:bg-opacity-90
                        "
                    >
                      <span><IoLogoGoogle size={20} color="white" /></span>
                    </div>
                  </div>
                </div>
                <a
                  className="
                  text-base
                  inline-block
                  mb-2
                  text-[#adadad]
                  hover:underline hover:text-primary" >
                  Forget Password?
                </a>
                <p className="text-base text-[#adadad]">
                  Not a member yet?
                  <a className="text-primary hover:underline">
                    Sign Up
                  </a>
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default SignIn;
