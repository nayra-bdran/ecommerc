import { assets } from "@/assets/assets";
import Image from "next/image";
import PageBanner from "../PageBanner/PageBanner";
export default function ShopPage() {
  return (
    <div className=" ">
      <PageBanner tittel="shop" />
      {/* Filter and sorting section */}
      <div className="bg-[#F9F1E7] py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side: Filter and Layout Icons */}
          <div className="flex items-center flex-wrap space-x-4 w-full md:w-auto justify-center md:justify-start">
            <button className="flex items-center space-x-2">
              <Image src={assets.system} alt={assets.system} />
              <span>Filter</span>
            </button>

            {/* Grid and list layout icons */}
            <div className="flex space-x-2 ">
              <button className="p-2 border rounded">
                <Image src={assets.ci} alt={assets.ci} />
              </button>
              <button className="p-2 border rounded ">
                <Image src={assets.bi} alt={assets.bi} />
              </button>
            </div>
            <p className="">Showing 1–16 of 32 results</p>
          </div>

          {/* Right side: Show and Sort */}
          <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-end  ">
            <label htmlFor="show" className="flex items-center space-x-1 gap-3">
              <span>Show</span>
              <input
                id="show"
                type="number"
                defaultValue="16"
                className="w-16 border p-2 rounded"
              />
            </label>
            <label htmlFor="sort" className="flex items-center space-x-1">
              <span>Sort by</span>
              <select id="sort" className="border p-2 rounded">
                <option value="default">Default</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
