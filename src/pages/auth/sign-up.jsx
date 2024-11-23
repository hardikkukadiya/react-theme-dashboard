import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export function SignUp() {
  return (  
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 px-4 sm:px-0">
      <div class="relative py-3 max-w-md w-full mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-8 bg-white shadow-lg rounded-xl sm:rounded-3xl sm:px-16">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold text-center sm:text-left">Sign Up</h1>
            </div>
            <div>
              <div class="py-8 text-base space-y-6 text-gray-700">
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="name"
                    name="name"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Enter Name"
                  />
                  <label
                    for="name"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Enter Name
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Email address"
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="confirm password"
                    name="confirm password"
                    type="confirm password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Confirm Password"
                  />
                  <label
                    for="confirm password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>
                <div class="relative">
                  <button class="bg-blue-500 text-white w-full rounded-md px-4 py-2 hover:bg-blue-600 transition">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap text-sm mb-4 justify-center sm:justify-between">
              <p class="text-center sm:text-left">Have an account?</p>
              <a
                class="ml-2 underline text-blue-700 cursor-pointer"
                href="/auth/auth/sign-in"
              >
                Login
              </a>
            </div>
            <div class="w-full flex flex-wrap justify-center gap-2">
              <button
                class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <div className="text-blue-600">
                  <FaFacebook size={25} />
                </div>
              </button>
              <button
                class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <div>
                  <FcGoogle size={25} />
                </div>
              </button>
              <button
                class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <div class="text-blue-600">
                  <FaTwitter size={25} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SignUp;
