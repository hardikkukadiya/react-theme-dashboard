import {
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";

export function SignUp() {
  return (
    <section class="bg-gray-100 py-10 lg:py-[40px]">
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class=" max-w-[525px] mx-auto  text-center bg-white
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               ">
              <div className="text-2xl text-[#577fec] mb-7">Join Us Today</div>              
              <form>               
                <div class="mb-6">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    class="
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
                <div class="mb-6">
                  <input
                    type="password"
                    placeholder="Enter Password Here"
                    class="
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
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center justify-start font-medium"
                    >
                      I agree the&nbsp;
                      <a
                        href="#"
                        className="font-normal text-black transition-colors hover:text-gray-900 underline"
                      >
                        Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <div class="mb-10">
                  <input
                    type="submit"
                    value="Register now"
                    class="
                        w-full
                        rounded-md
                        border
                        bordder-primary
                        py-3
                        px-5
                        mt-5
                        bg-primary
                        text-base text-white
                        cursor-pointer
                        transition
                        bg-[#577fec]
                        "
                  />
                </div>
              </form>
              <p class="text-base mb-6 text-[#adadad]">Connect With</p>
              <div class="flex justify-between -mx-2 mb-12">
                <div class="px-2 w-full">
                  <div

                    class="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#4064AC]
                        hover:bg-opacity-90
                        "
                  >
                    <span><FaFacebookF size={20} color="white" /></span>
                  </div>
                </div>
                <div class="px-2 w-full">
                  <div

                    class="
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
                <div class="px-2 w-full">
                  <div

                    class="
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
