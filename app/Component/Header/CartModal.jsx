import Link from "next/link";
import Image from "next/image.js";
import { assets } from "@/assets/assets";
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
      <div className="bg-white w-1/3 h-full p-6">
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
          <div className="flex justify-between mt-4 gap-4">
          <Link href="/Cart">

              <button className=" px-8 py-1 rounded-full font-semibold border-[1.8px]  border-[#000000]">
                Cart
              </button>
              </Link>

              <Link href="/CheckOut">

            <button className=" px-8 rounded-full font-semibold border-[1.8px]  border-[#000000]">
              Checkout
            </button>
            </Link>

            <Link href="/Comparison">
            <button className=" px-8 rounded-full font-semibold border-[1.8px]  border-[#000000]">
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
