import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";


// echo "# nayra" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nayra-bdran/nayra.git
// git push -u origin main
function CartModal({ onClose }) {
  const cartItems = [
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: assets.image6,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000,
      quantity: 1,
      image: assets.image6,
    },
  ];
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end z-50">
      <div className="bg-white w-full md:w-1/2 lg:w-1/3 h-full p-6 overflow-y-auto">
        <button onClick={onClose} className="text-2xl mb-4">
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <h3>{item.name}</h3>
                <p>
                  {item.quantity} x Rs. {item.price.toLocaleString()}
                </p>
              </div>
              <button className="text-gray-500">🗑️</button>
            </li>
          ))}
        </ul>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-xl font-bold">
            Subtotal: Rs. {subtotal.toLocaleString()}
          </h3>
          <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
            <Link href="/Cart">
              <button className="w-full sm:w-auto px-8 py-2 rounded-full font-semibold border-[1.8px] border-[#000000]">
                Cart
              </button>
            </Link>
            <Link href="/CheckOut">
              <button className="w-full sm:w-auto px-8 py-2 rounded-full font-semibold border-[1.8px] border-[#000000]">
                Checkout
              </button>
            </Link>
            <Link href="/Comparison">
              <button className="w-full sm:w-auto px-8 py-2 rounded-full font-semibold border-[1.8px] border-[#000000]">
                Comparison
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;










































// import Link from "next/link";
// import Image from "next/image";

// function CartModal({ cartItems = [], removeFromCart, onClose }) {
//   // حساب المجموع الفرعي (subtotal) بجمع الأسعار لكل عنصر في السلة
//   const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0), 0); // التأكد من أن السعر موجود وإلا نضع 0

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end z-50">
//       <div className="bg-white w-full md:w-1/2 lg:w-1/3 h-full p-6 overflow-y-auto">
//         <button onClick={onClose} className="text-2xl mb-4">X</button> {/* إغلاق السلة عند النقر على X */}
//         <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id} className="flex justify-between items-center mb-4">
//               <Image src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
//               <div className="flex-1 ml-4">
//                 <h3>{item.name}</h3>
//                 <p>{item.price ? item.price.toLocaleString('en-US') : 'Price not available'}</p> {/* التأكد من أن السعر موجود */}
//               </div>
//               {/* زر حذف المنتج من السلة */}
//               <button onClick={() => removeFromCart(item.id)} className="text-gray-500">🗑️</button>
//             </li>
//           ))}
//         </ul>
//         <div className="border-t mt-4 pt-4">
//           {/* عرض المجموع الفرعي (subtotal) مع تحديد اللغة */}
//           <h3 className="text-xl font-bold">Subtotal: Rp {subtotal.toLocaleString('en-US')}</h3>
//           <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
//             <Link href="/Cart">
//               <button onClick={onClose} className="w-full sm:w-auto px-8 py-2 rounded-full font-semibold border-[1.8px] border-[#000000]">Cart</button>
//             </Link>
//             <Link href="/CheckOut">
//               <button onClick={onClose} className="w-full sm:w-auto px-8 py-2 rounded-full font-semibold border-[1.8px] border-[#000000]">Checkout</button>
//             </Link>
//             <Link href="/Comparison">
//               <button onClick={onClose} className="w-full sm:w-auto px-8 py-2 rounded-full font-semibold border-[1.8px] border-[#000000]">Comparison</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartModal;

