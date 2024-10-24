import Link from "next/link";

export default function Breadcrumb() {
  return (
    <div className="bg-gray-50 py-4 pl-20">
      <div className="container mx-auto flex flex-wrap items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
        {/* Links for Home and Shop */}
        <Link href="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <span className="text-gray-500">{'>'}</span>

        <Link href="/shop" className="text-gray-500 hover:text-black">
          Shop
        </Link>
        <span className="text-gray-500">{'>'}</span>

        {/* Divider */}
        <div className="hidden sm:block border-l h-6 border-gray-300 mx-2"></div>

        {/* Current Product */}
        <span className="text-black font-semibold">Asgaard sofa</span>
      </div>
    </div>
  );
}
