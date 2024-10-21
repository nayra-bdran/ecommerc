import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa"; 
import img from "../../assets/img (1).png"
import img6 from "../../assets/img (6).png"
import img7 from "../../assets/img (7).png"
import img8 from "../../assets/img (8).png"
import img9 from "../../assets/img (9).png"
export default function BlogItem() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {/* Sidebar with Search */}


        {/* Main Content - Blog Posts */}
        <div className="md:col-span-2 space-y-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg ">
            <Image
              src={assets.blog1} // Replace with your image path
              alt="Post 1"
              className="w-full  object-cover"
            />
            
            <div className="p-6">
              <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <FaUser />
                  <span>Admin</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCalendarAlt />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaTag />
                  <span>Wood</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 mb-4">
                Millennial design is more than just a trend, it’s a movement...
              </p>
              <div className="text-sm text-gray-500 mb-2">
                Posted on January 5, 2023 | Design
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>

              {/* Icon and Text under the post */}
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg ">
            <Image
              src={assets.blog2} // Replace with your image path
              alt="Post 2"
              className="w-full  object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <FaUser />
                  <span>Admin</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCalendarAlt />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaTag />
                  <span>Wood</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Exploring new ways of decorating
              </h2>
              <p className="text-gray-600 mb-4">
                Discover the latest trends and innovative methods for decorating
                your home...
              </p>
              <div className="text-sm text-gray-500 mb-2">
                Posted on February 15, 2023 | Home Decor
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>

              {/* Icon and Text under the post */}
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg">
            <Image
              src={assets.blog3} // Replace with your image path
              alt="Post 3"
              className="w-full object-cover"
            />

            <div className="p-6">
              <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <FaUser />
                  <span>Admin</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCalendarAlt />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaTag />
                  <span>Wood</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Handmade pieces that took time to make
              </h2>
              <p className="text-gray-600 mb-4">
                Creating beautiful handmade pieces can be a labor of love.
                Here’s how we crafted them...
              </p>
              <div className="text-sm text-gray-500 mb-2">
                Posted on March 1, 2023 | Handmade
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>

              {/* Icon and Text under the post */}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center space-x-2">
            <button className="bg-[#B88E2F] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              1
            </button>
            <button className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
              2
            </button>
            <button className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
              Next
            </button>
          </div>
        </div>



        <div className="space-y-8">
          {/* Search Box */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded"
              />
              {/* Icon next to the search input */}
              <button className="p-2 bg-[#B88E2F] text-white rounded">
                🔍
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="text-gray-600">
              <li className="mb-2 flex justify-between">
                <a href="#" className="hover:underline">
                  Crafts
                </a>
                <span>3</span>
              </li>
              <li className="mb-2 flex justify-between">
                <a href="#" className="hover:underline">
                  Design
                </a>
                <span>8</span>
              </li>
              <li className="mb-2 flex justify-between">
                <a href="#" className="hover:underline">
                  Handmade
                </a>
                <span>7</span>
              </li>
              <li className="mb-2 flex justify-between">
                <a href="#" className="hover:underline">
                  Interior
                </a>
                <span>1</span>
              </li>
              <li className="flex justify-between">
                <a href="#" className="hover:underline">
                  Wood
                </a>
                <span>4</span>
              </li>
            </ul>
          </div>
          {/* Recent Posts */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="text-gray-600">
              <li className="mb-4 flex items-center">
                <Image
                  src={img}
                  alt="Recent Post 1"
                  className="w-16 h-16 object-cover mr-4 rounded"
                />
                <div>
                  <a href="#" className="font-semibold hover:underline">
                    Post Title 1
                  </a>
                  <p className="text-sm text-gray-500">January 5, 2023</p>
                </div>
              </li>

              <li className="mb-4 flex items-center">
                <Image
                  src={img6}
                  alt="Recent Post 2"
                  className="w-16 h-16 object-cover mr-4 rounded"
                />
                <div>
                  <a href="#" className="font-semibold hover:underline">
                    Post Title 2
                  </a>
                  <p className="text-sm text-gray-500">February 15, 2023</p>
                </div>
              </li>

              <li className="flex items-center">
                <Image
                  src={img7}
                  alt="Recent Post 3"
                  className="w-16 h-16 object-cover mr-4 rounded"
                />
                <div>
                  <a href="#" className="font-semibold hover:underline">
                    Post Title 3
                  </a>
                  <p className="text-sm text-gray-500">March 1, 2023</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
