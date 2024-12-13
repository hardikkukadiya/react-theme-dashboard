import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const Pagination = () => {
  return (
    <div>
          <div className="flex items-center justify-between mt-6">
              <div                  
                  className="flex items-center px-5 py-2 text-md text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                  <div><FaArrowLeftLong /></div>
                  <span>previous</span>
              </div>

              <div className="items-center hidden md:flex gap-x-3">
                  <div                      
                      className="px-2 py-1 text-md text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
                  >
                      1
                  </div>
                  <div                      
                      className="px-2 py-1 text-md text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                  >
                      2
                  </div>
                  <div                      
                      className="px-2 py-1 text-md text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                  >
                      3
                  </div>
                  <div                      
                      className="px-2 py-1 text-md text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                  >
                      ...
                  </div>
                  <div                      
                      className="px-2 py-1 text-md text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                  >
                      12
                  </div>
                  <div                      
                      className="px-2 py-1 text-md text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                  >
                      13
                  </div>
                  <div                      
                      className="px-2 py-1 text-md text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                  >
                      14
                  </div>
              </div>

              <div                  
                  className="flex items-center px-5 py-2 text-md text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                  <span>Next</span>
                  <div><FaArrowRightLong /></div>
              </div>
          </div>
    </div>
  )
}

export default Pagination
