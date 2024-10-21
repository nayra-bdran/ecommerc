import Navebar from "../Header/Navebar";

export default function Footer() {
  return (
    <footer>
      <hr className="border-t-2 text-[#616161] my-8 sm:mt-12 mt-36" />
      <div className="bg-white py-10 mt-8 divide-x-0 sm:divide-x-2 divide-[#9F9F9F]">
        <div className="px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-lg mx-auto">
            <div className="">
              <h2 className="text-3xl font-bold mb-10">Funiro.</h2>
              <p className="text-sm mt-4 text-[#9F9F9F]">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#9F9F9F] mb-6 sm:mb-12">
                Links
              </h3>
              <Navebar className="flex flex-col justify-center" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#9F9F9F] mb-6 sm:mb-12">
                Help
              </h3>
              <ul className="mt-4 space-y-6 sm:space-y-10 font-semibold">
                <li>
                  <a href="#" className="hover:underline">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#9F9F9F] mb-6 sm:mb-8">
                Newsletter
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="py-2 border-b border-[#9F9F9F] outline-none w-full sm:w-auto"
                />
                <button className="py-2 border-b border-[#000000] text-[#000000] font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-500 text-sm">
            <hr className="border-t-2 text-[#616161] my-8" />
            <p>2023 Funiro. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
